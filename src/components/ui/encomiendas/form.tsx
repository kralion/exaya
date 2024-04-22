import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Typography,
} from "antd";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { encomiendaSchema } from "@/schemas";
import { FaBuilding, FaBuildingShield } from "react-icons/fa6";
import { useNotification } from "@/context/NotificationContext";
import { useSession } from "next-auth/react";

import { api } from "@/utils/api";
import { useState } from "react";
import type { z } from "zod";
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 30 },
  },
  wrapperCol: {
    xs: { span: 30 },
    sm: { span: 30 },
  },
};

export function EncomiendasForm() {
  const [form] = Form.useForm();
  const { data: session } = useSession();
  const [senderQueryEnabled, setSenderQueryEnabled] = useState(false);
  const [receiverQueryEnabled, setReceiverQueryEnabled] = useState(false);
  const { data: rutas } = api.rutas.getAllRutas.useQuery();
  const { data: viajesDiariosDisponibles } =
    api.viajes.getViajesByRutaDestinyAndStatus.useQuery({
      destiny: form.getFieldValue("ciudadDestino") as string,
    });
  const { openNotification } = useNotification();
  const createEncomiendaMutation =
    api.encomiendas.createEncomienda.useMutation();

  const { data: receptorInformacion } = api.clientes.validateDni.useQuery(
    {
      dni: form.getFieldValue("destinatarioDni") as string,
    },
    {
      enabled: receiverQueryEnabled,
    }
  );
  const { data: remitenteInformacion } = api.clientes.validateDni.useQuery(
    {
      dni: form.getFieldValue("remitenteDni") as string,
    },
    {
      enabled: senderQueryEnabled,
    }
  );

  async function onFinish(values: z.infer<typeof encomiendaSchema>) {
    if (remitenteInformacion?.status === "error") {
      openNotification({
        message: "Error al registrar encomienda",
        description:
          "El DNI del Remitente es requerido y debe ser válido, por favor verifique el valor",
        type: "error",
        placement: "bottomRight",
      });
      return;
    }
    if (receptorInformacion?.status === "error") {
      openNotification({
        message: "Error al registrar encomienda",
        description:
          "El DNI del Destinatario es requerido y debe ser válido , por favor verifique el valor",
        type: "error",
        placement: "bottomRight",
      });
      return;
    }
    await createEncomiendaMutation.mutateAsync(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        fechaEnvio: new Date(values.fechaEnvio),
        remitenteNombres: remitenteInformacion?.data?.nombres ?? "",
        remitenteApellidos: `${
          remitenteInformacion?.data?.apellidoPaterno ?? ""
        } ${remitenteInformacion?.data?.apellidoMaterno ?? ""}`,
        destinatarioNombres: receptorInformacion?.data?.nombres ?? "",
        destinatarioApellidos: `${
          receptorInformacion?.data?.apellidoPaterno ?? ""
        } ${receptorInformacion?.data?.apellidoMaterno ?? ""}`,
      },

      {
        onSuccess: (response) => {
          openNotification({
            message: "Encomienda registrada",
            description: response.message,
            type: "success",
            placement: "bottomRight",
          });
        },

        onError: (error) => {
          openNotification({
            message: "Error al registrar encomienda",
            description: error.message,
            type: "error",
            placement: "bottomRight",
          });
        },
      }
    );

    form.resetFields();
  }

  return (
    <div className="space-y-7">
      <Title level={5}>Registrar Encomienda</Title>

      <Form
        {...formItemLayout}
        form={form}
        layout="vertical"
        name="register"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={onFinish}
        initialValues={{ prefix: "+51" }}
        scrollToFirstError
        className="grid grid-flow-row grid-cols-4 gap-x-3.5 gap-y-7"
      >
        <Form.Item
          name="remitenteDni"
          label="DNI del Remitente"
          tooltip="Persona que va a enviar la encomienda"
          rules={[
            {
              required: true,
              message: "Ingresa el DNI",
              whitespace: true,
            },
          ]}
          validateStatus={
            form.getFieldValue("remitenteDni") === ""
              ? ""
              : remitenteInformacion?.status === "error"
              ? "error"
              : remitenteInformacion?.status === "success"
              ? "success"
              : "validating"
          }
          help={
            form.getFieldValue("remitenteDni") === "" ? (
              ""
            ) : remitenteInformacion?.status === "error" ? (
              "El DNI no existe"
            ) : remitenteInformacion?.status === "success" ? (
              <p>
                {remitenteInformacion?.data?.nombres}{" "}
                {remitenteInformacion?.data?.apellidoPaterno}{" "}
                {remitenteInformacion?.data?.apellidoMaterno}
              </p>
            ) : (
              "Validando"
            )
          }
        >
          <InputNumber
            placeholder="12345678"
            onChange={(value) => {
              const dni = String(value);
              form.setFieldValue("remitenteDni", dni);
              setSenderQueryEnabled(dni.length === 8);
            }}
            type="number"
            className="w-full"
            controls={false}
          />
        </Form.Item>

        <Form.Item
          name="destinatarioDni"
          label="DNI del Destinatario"
          tooltip="Persona que va a recibir la encomienda"
          rules={[
            {
              required: true,
              message: "Ingresa el DNI",
              whitespace: true,
            },
          ]}
          validateStatus={
            form.getFieldValue("destinatarioDni") === ""
              ? ""
              : receptorInformacion?.status === "error"
              ? "error"
              : receptorInformacion?.status === "success"
              ? "success"
              : "validating"
          }
          help={
            form.getFieldValue("destinatarioDni") === "" ? (
              ""
            ) : receptorInformacion?.status === "error" ? (
              "El DNI no existe"
            ) : receptorInformacion?.status === "success" ? (
              <p>
                {receptorInformacion?.data?.nombres}{" "}
                {receptorInformacion?.data?.apellidoPaterno}{" "}
                {receptorInformacion?.data?.apellidoMaterno}
              </p>
            ) : (
              "Validando"
            )
          }
        >
          <InputNumber
            placeholder="12345678"
            onChange={(value) => {
              const dni = String(value);
              form.setFieldValue("destinatarioDni", dni);
              setReceiverQueryEnabled(dni.length === 8);
            }}
            type="number"
            className="w-full"
            controls={false}
          />
        </Form.Item>

        <Form.Item
          name="ciudadOrigen"
          label="Origen"
          rules={[{ required: true, message: "Selecciona" }]}
        >
          <Select placeholder="Jr.Angaraes 123 - Huancayo">
            {rutas?.map((origen: { id: string; ciudadOrigen: string }) => (
              <Select.Option key={origen.id} value={origen.ciudadOrigen}>
                {origen.ciudadOrigen}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="ciudadDestino"
          help={
            viajesDiariosDisponibles?.response?.find(
              (viaje: {
                ruta: {
                  ciudadDestino: string;
                  terminalDestino: string;
                };
              }) =>
                viaje.ruta.ciudadDestino === form.getFieldValue("ciudadDestino")
            )?.ruta.terminalDestino
          }
          label="Destino"
          rules={[{ required: true, message: "Selecciona" }]}
        >
          <Select placeholder="Huancayo">
            {rutas?.map((destino: { id: string; ciudadDestino: string }) => (
              <Select.Option key={destino.id} value={destino.ciudadDestino}>
                {destino.ciudadDestino}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <div className="flex gap-3.5">
          <Form.Item
            name="precio"
            label="Precio"
            rules={[
              {
                min: 1,
                required: true,
                message: "Requerido",
              },
            ]}
          >
            <Input
              addonBefore="S/."
              type="number"
              style={{ width: "100%" }}
              placeholder="25"
            />
          </Form.Item>

          <Form.Item
            name="fechaEnvio"
            label="Fecha de Envío"
            tooltip="Fecha en la que se va a cargar al compartimento de encomiendas"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <DatePicker
              className="w-full min-w-[150px]"
              placeholder="18/05/2024"
            />
          </Form.Item>
        </div>

        <div className="flex gap-3.5">
          <Form.Item
            name="factura"
            label="Comprobante"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select
              onChange={(value: boolean) => {
                alert(value);
              }}
              style={{ width: 120 }}
              placeholder="Boleto"
            >
              <Select.Option value={false}>Boleto</Select.Option>
              <Select.Option value={true}>Factura</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="pagado"
            tooltip="¿Ya se pagó por la encomienda?"
            label="Pagado"
          >
            <Switch
              checkedChildren="Sí"
              unCheckedChildren="No"
              className=" bg-red-500 shadow-lg"
              onChange={(checked) =>
                form.setFieldsValue({
                  estado: checked ? true : false,
                })
              }
            />
          </Form.Item>
        </div>
        <div className="col-span-2 flex gap-3.5">
          <Form.Item name="descripcion" label="Descripción">
            <Input.TextArea
              style={{
                width: 375,
              }}
              placeholder="Qué contiene y como se vé la encomienda ?"
              autoSize={{ minRows: 1, maxRows: 2 }}
            />
          </Form.Item>
          <Form.Item
            name="viajeId"
            tooltip="En qué turno se va a enviar la encomienda"
            label="Viaje"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select style={{ width: 120 }} placeholder="AYHYO-1">
              {viajesDiariosDisponibles?.response?.map(
                (viaje: { id: string; salida: Date }) => (
                  <Select.Option key={viaje.id} value={viaje.id}>
                    {new Date(viaje.salida).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </Select.Option>
                )
              )}
            </Select>
          </Form.Item>
        </div>
        {form.getFieldValue("factura") === false ? (
          <div className="col-span-2">
            <Form.Item
              name="empresa"
              label="Nombre de la Empresa"
              rules={[
                {
                  required: true,
                  message: "Requerido",
                  whitespace: true,
                },
              ]}
            >
              <Input
                style={{
                  width: 200,
                }}
                addonBefore={<FaBuilding />}
                placeholder="Empresa de Transportes SAC"
              />
            </Form.Item>
            <Form.Item
              name="ruc"
              label="RUC"
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Input
                type="number"
                addonBefore={<FaBuildingShield />}
                style={{
                  width: 100,
                }}
                maxLength={11}
                placeholder="12345678901"
              />
            </Form.Item>
          </div>
        ) : null}
        <div></div>

        <div className="col-span-4 flex items-end justify-end gap-3">
          <Button htmlType="submit" type="primary">
            Registrar Encomienda
          </Button>

          <Button htmlType="reset" onClick={() => form.resetFields()}>
            Cancelar
          </Button>
        </div>
      </Form>
    </div>
  );
}
