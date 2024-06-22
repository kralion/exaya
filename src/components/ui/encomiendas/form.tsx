import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
import { useMessageContext } from "@/context/MessageContext";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { encomiendaSchema } from "@/schemas";
import dayjs, { type Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import { FaBuilding, FaBuildingShield } from "react-icons/fa6";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import type { z } from "zod";
import { customAlphabet } from "nanoid";
const { Title } = Typography;

enum SerieEncomienda {
  B001 = "B001",
  F001 = "F001",
}

export function EncomiendasForm({
  encomiendaIdToEdit,
  setEncomiendaIdToEdit,
}: {
  encomiendaIdToEdit: string;
  setEncomiendaIdToEdit: (id: string) => void;
}) {
  const [form] = Form.useForm();
  const { data: session } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const nanoid = customAlphabet("0123456789abcdef", 6);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
  const [trackingCode, setTrackingCode] = useState<string>(nanoid());
  const utils = api.useUtils();
  const { data: singleEncomienda } = api.encomiendas.getEncomiendaById.useQuery(
    {
      id: encomiendaIdToEdit,
    }
  );
  const [remitenteDNI, setRemitenteDNI] = useState<string>("");

  const [destinatarioDNI, setDestinatarioDNI] = useState<string>("");
  const [dateQuery, setDateQuery] = useState<Dayjs>(dayjs().startOf("day"));
  const {
    data: viajesDiariosDisponibles,
    isLoading: isLoadingViajesDiariosDisponibles,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery.format("YYYY-MM-DD"),
  });
  const { openMessage } = useMessageContext();
  const [facturaUI, setFacturaUI] = useState(false);

  const {
    mutateAsync: createEncomiendaMutation,
    isLoading: isLoadingCreateEncomienda,
  } = api.encomiendas.createEncomienda.useMutation();
  const {
    mutateAsync: updateEncomiendaMutation,
    isLoading: isLoadingUpdateEncomienda,
  } = api.encomiendas.updateEncomienda.useMutation();

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

  async function handleUpdateEncomienda(
    values: z.infer<typeof encomiendaSchema>
  ) {
    const serie: SerieEncomienda = values.factura
      ? SerieEncomienda.F001
      : SerieEncomienda.B001;
    if (remitenteInformacion?.data === undefined) {
      return openMessage({
        content: "El DNI no existe en la base de datos de la RENIEC",
        duration: 3,
        type: "error",
      });
    }
    if (receptorInformacion?.data === undefined) {
      return openMessage({
        content: "El DNI no existe en la base de datos de la RENIEC",
        duration: 3,
        type: "error",
      });
    }
    await updateEncomiendaMutation(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        codigoRastreo: trackingCode,
        precio: parseFloat(values.precio.toString()),
        id: encomiendaIdToEdit,
        serie,
        fechaEnvio: new Date(values.fechaEnvio),
        remitenteNombres: remitenteInformacion.data.nombres,
        remitenteApellidos: `${remitenteInformacion.data.apellidoPaterno} ${remitenteInformacion.data.apellidoMaterno}`,
        destinatarioNombres: receptorInformacion.data.nombres,
        destinatarioApellidos: `${receptorInformacion.data.apellidoPaterno} ${receptorInformacion.data.apellidoMaterno}`,
      },

      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
        },

        onError: (error) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
        onSettled: () => {
          form.resetFields();
          setRemitenteDNI("");
          setDestinatarioDNI("");
        },
      }
    );
  }
  async function handleCreateEncomienda(
    values: z.infer<typeof encomiendaSchema>
  ) {
    const serie: SerieEncomienda = values.factura
      ? SerieEncomienda.F001
      : SerieEncomienda.B001;

    if (remitenteInformacion?.data === undefined) {
      return openMessage({
        content: "El DNI no existe en la base de datos de la RENIEC",
        duration: 3,
        type: "error",
      });
    }
    if (receptorInformacion?.data === undefined) {
      return openMessage({
        content: "El DNI no existe en la base de datos de la RENIEC",
        duration: 3,
        type: "error",
      });
    }
    await createEncomiendaMutation(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        precio: parseFloat(values.precio.toString()),
        codigoRastreo: trackingCode,
        serie,
        fechaEnvio: new Date(values.fechaEnvio),
        remitenteNombres: remitenteInformacion.data.nombres,
        remitenteApellidos: `${remitenteInformacion.data.apellidoPaterno} ${remitenteInformacion.data.apellidoMaterno}`,
        destinatarioNombres: receptorInformacion.data.nombres,
        destinatarioApellidos: `${receptorInformacion.data.apellidoPaterno} ${receptorInformacion.data.apellidoMaterno}`,
      },

      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
        },

        onError: (error) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
        onSettled: () => {
          form.resetFields();
          setRemitenteDNI("");
          setDestinatarioDNI("");
        },
      }
    );
  }

  async function onFinish(values: z.infer<typeof encomiendaSchema>) {
    if (encomiendaIdToEdit) {
      await handleUpdateEncomienda(values);
    } else {
      await handleCreateEncomienda(values);
    }
    await utils.encomiendas.getAllEncomiendas.invalidate();
  }

  useEffect(() => {
    if (encomiendaIdToEdit && singleEncomienda?.response) {
      form.setFieldsValue({
        remitenteDni: singleEncomienda.response.remitenteDni,
        destinatarioDni: singleEncomienda.response.destinatarioDni,
        fechaEnvio: dayjs(singleEncomienda.response.fechaEnvio),
        viajeId: singleEncomienda.response.viajeId,
        codigoRastreo: setTrackingCode(singleEncomienda.response.codigoRastreo),
        factura: singleEncomienda.response.factura,
        ruc: singleEncomienda.response.ruc,
        destino: singleEncomienda.response.destino,
        razonSocial: singleEncomienda.response.razonSocial,
        pagado: singleEncomienda.response.pagado,
        precio: singleEncomienda.response.precio,
        descripcion: singleEncomienda.response.descripcion,
      });
      if (singleEncomienda.response.factura === true) {
        setFacturaUI(true);
      }
    }
  }, [singleEncomienda, encomiendaIdToEdit, form]);

  function handleCancel() {
    setRemitenteDNI("");
    setDestinatarioDNI("");
    form.resetFields();
    setEncomiendaIdToEdit("");
  }

  return (
    <div className="space-y-7">
      <Title level={5}>Registrar Encomienda</Title>
      <Form
        form={form}
        layout="vertical"
        name="register"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={onFinish}
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
              placeholder=""
              className="w-full min-w-[150px]"
            />
          </Form.Item>
          <Form.Item
            name="viajeId"
            tooltip="En qué viaje llevará la encomienda"
            help="Sé cuidadoso, este valor es importante"
            label="Viaje"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select
              status="warning"
              loading={isLoadingViajesDiariosDisponibles}
              style={{ width: 340 }}
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
        <div className="flex gap-4">
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
            <Input addonBefore="S/." type="number" />
          </Form.Item>
          <Form.Item
            name="destino"
            label="Destino"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Select className="min-w-[140px]">
              <Select.Option value="Huanta">Huanta</Select.Option>
              <Select.Option value="Ayacucho">Ayacucho</Select.Option>
              <Select.Option value="Huancayo">Huancayo</Select.Option>
            </Select>
          </Form.Item>
        </div>
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
            >
              <Select.Option value={false}>Boleto</Select.Option>
              <Select.Option value={true}>Factura</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="pagado"
            tooltip="¿La encomienda va ir pagada
            ?"
            label="Pagado"
          >
            <Switch
              checkedChildren="Sí"
              unCheckedChildren="No"
              style={{ width: 80 }}
              className=" bg-red-500 shadow-lg"
            />
          </Form.Item>
        </div>
        <Form.Item
          className="col-span-2"
          name="descripcion"
          label="Descripción de la Encomienda"
        >
          <Input.TextArea autoSize={{ minRows: 1, maxRows: 2 }} />
        </Form.Item>
        {facturaUI === true ? (
          <Space className="col-span-2 flex gap-4">
            <Form.Item
              name="razonSocial"
              label="Razón Social"
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
              />
            </Form.Item>
          </Space>
        ) : null}

        <div className="col-span-4 flex items-end justify-end gap-3">
          <Button
            htmlType="submit"
            type="primary"
            loading={isLoadingCreateEncomienda || isLoadingUpdateEncomienda}
          >
            {encomiendaIdToEdit ? "Guardar Cambios" : "Registrar Encomienda"}
          </Button>
          <Button htmlType="reset" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </Form>
    </div>
  );
}
