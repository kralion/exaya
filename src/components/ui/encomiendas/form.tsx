import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { encomiendaSchema } from "@/schemas";
import { useNotification } from "@/context/NotificationContext";
import dayjs, { type Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import { FaBuilding, FaBuildingShield } from "react-icons/fa6";

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
  const [remitenteDNI, setRemitenteDNI] = useState<string>("");
  const [destinatarioDNI, setDestinatarioDNI] = useState<string>("");
  const [dateQuery, setDateQuery] = useState<Dayjs>(dayjs().startOf("day"));
  const { data: viajesDiariosDisponibles } =
    api.viajes.getViajesByDate.useQuery({
      date: dateQuery.format("YYYY-MM-DD"),
    });
  const { openNotification } = useNotification();
  const [facturaUI, setFacturaUI] = useState(false);
  const createEncomiendaMutation =
    api.encomiendas.createEncomienda.useMutation();

  const { data: receptorInformacion } = api.clientes.validateDni.useQuery(
    {
      dni: destinatarioDNI,
    },
    {
      enabled: destinatarioDNI.length === 8,
    }
  );
  const { data: remitenteInformacion } = api.clientes.validateDni.useQuery(
    {
      dni: form.getFieldValue("remitenteDni") as string,
    },
    {
      enabled: remitenteDNI.length === 8,
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
        className="grid grid-flow-row grid-cols-4 gap-4"
      >
        <Form.Item
          name="remitenteDni"
          label="DNI del Remitente"
          rules={[
            {
              required: true,
              message: "Ingresa el DNI",
              whitespace: true,
            },
          ]}
          validateStatus={
            remitenteDNI === ""
              ? ""
              : remitenteInformacion?.status === "error"
              ? "error"
              : remitenteInformacion?.status === "success"
              ? "success"
              : "validating"
          }
          help={
            remitenteDNI === "" ? (
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
              ""
            )
          }
        >
          <Input
            placeholder="23354545"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRemitenteDNI(event.target.value);
            }}
            type="number"
            maxLength={8}
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          name="destinatarioDni"
          label="DNI del Destinatario"
          rules={[
            {
              required: true,
              message: "Ingresa el DNI",
              whitespace: true,
            },
          ]}
          validateStatus={
            destinatarioDNI === ""
              ? ""
              : receptorInformacion?.status === "error"
              ? "error"
              : receptorInformacion?.status === "success"
              ? "success"
              : "validating"
          }
          help={
            destinatarioDNI === "" ? (
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
              ""
            )
          }
        >
          <Input
            placeholder="54774145"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDestinatarioDNI(event.target.value);
            }}
            type="number"
            maxLength={8}
            className="w-full"
          />
        </Form.Item>
        <div className="col-span-2 flex gap-4">
          <Form.Item
            name="fechaEnvio"
            label="Fecha de Envío"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <DatePicker
              style={{ width: 150 }}
              onChange={(date) => setDateQuery(date)}
              className="w-full min-w-[150px]"
              placeholder="18/05/2024"
            />
          </Form.Item>
          <Form.Item
            name="viajeId"
            tooltip="Qué viaje llevará la encomienda"
            label="Viaje"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select
              style={{ width: 340 }}
              placeholder="Selva Central - Huancayo - 08:30 PM"
            >
              {viajesDiariosDisponibles?.response?.map(
                (viaje: {
                  ruta: { ciudadOrigen: string; ciudadDestino: string };
                  id: string;
                  salida: Date;
                }) => (
                  <Select.Option key={viaje.id} value={viaje.id}>
                    {viaje.ruta.ciudadOrigen} - {viaje.ruta.ciudadDestino} -{" "}
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
        <div className="flex justify-between">
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
              onChange={(value) => setFacturaUI(value as boolean)}
              style={{ width: 150 }}
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
              style={{ width: 80 }}
              className=" bg-red-500 shadow-lg"
              onChange={(checked) =>
                form.setFieldsValue({
                  estado: checked ? true : false,
                })
              }
            />
          </Form.Item>
        </div>
        <Form.Item
          className="col-span-2"
          name="descripcion"
          label="Descripción"
        >
          <Input.TextArea
            placeholder="Qué contiene y como se vé la encomienda ?"
            autoSize={{ minRows: 1, maxRows: 2 }}
          />
        </Form.Item>
        {facturaUI === true ? (
          <Space className="col-span-2 flex gap-4">
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
                  width: 505,
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
                maxLength={11}
                style={{ width: 505 }}
                placeholder="12345678901"
              />
            </Form.Item>
          </Space>
        ) : null}

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
