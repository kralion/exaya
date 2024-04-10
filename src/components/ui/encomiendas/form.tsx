import type { CascaderProps, DatePickerProps } from "antd";
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
import styles from "./frame.module.css";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { encomiendaSchema } from "@/schemas";
import { api } from "@/utils/api";
import { useState } from "react";
import type { z } from "zod";

const { Option } = Select;
const { Title } = Typography;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const terminales: CascaderProps<DataNodeType>["options"] = [
  {
    value: "huancayo",
    label: "Jr.Angaraes 123 - Huancayo",
  },
  {
    value: "ayacucho",
    label: "Terminal Terrestre - Ayacucho",
  },
];

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
  const [senderQueryEnabled, setSenderQueryEnabled] = useState(false);
  const [receiverQueryEnabled, setReceiverQueryEnabled] = useState(false);

  const { data: receptorInformacion } = api.clientes.validateDni.useQuery(
    {
      dni: form.getFieldValue("dniDestinatario") as string,
    },
    {
      enabled: receiverQueryEnabled,
    }
  );
  const { data: remitenteInformacion } = api.clientes.validateDni.useQuery(
    {
      dni: form.getFieldValue("dniRemitente") as string,
    },
    {
      enabled: senderQueryEnabled,
    }
  );

  const onFinish = (values: z.infer<typeof encomiendaSchema>) => {
    console.log(JSON.stringify(values, null, 2));
    form.resetFields();
  };

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="space-y-7">
      <Title level={5}>Registrar Encomienda</Title>

      <Form
        {...formItemLayout}
        form={form}
        layout="vertical"
        name="register"
        onFinish={onFinish}
        initialValues={{ prefix: "+51" }}
        scrollToFirstError
        className="grid grid-flow-row grid-cols-4 gap-x-3.5 gap-y-7"
      >
        <Form.Item
          name="dniRemitente"
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
            form.getFieldValue("dniRemitente") === ""
              ? ""
              : remitenteInformacion?.status === "error"
              ? "error"
              : remitenteInformacion?.status === "success"
              ? "success"
              : "validating"
          }
          help={
            form.getFieldValue("dniRemitente") === "" ? (
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
              form.setFieldValue("dniRemitente", dni);
              setReceiverQueryEnabled(dni.length === 8);
            }}
            type="number"
            className="w-full"
            controls={false}
          />
        </Form.Item>

        <Form.Item
          name="dniDestinatario"
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
            form.getFieldValue("dniDestinatario") === ""
              ? ""
              : receptorInformacion?.status === "error"
              ? "error"
              : receptorInformacion?.status === "success"
              ? "success"
              : "validating"
          }
          help={
            form.getFieldValue("dniDestinatario") === "" ? (
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
              form.setFieldValue("dniDestinatario", dni);
              setSenderQueryEnabled(dni.length === 8);
            }}
            type="number"
            className="w-full"
            controls={false}
          />
        </Form.Item>

        <Form.Item
          name="origen"
          label="Origen"
          rules={[{ type: "array", required: true, message: "Selecciona" }]}
        >
          <Select placeholder="Jr.Angaraes 123 - Huancayo">
            {terminales?.map((terminal, index) => (
              <Option key={index} value={terminal.value}>
                {terminal.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="destino"
          label="Destino"
          rules={[{ type: "array", required: true, message: "Selecciona" }]}
        >
          <Select placeholder="Jr.Angaraes 123 - Huancayo ">
            {terminales?.map((terminal, index) => (
              <Option key={index} value={terminal.value}>
                {terminal.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <div className="flex gap-3.5">
          <Form.Item
            name="precio"
            label="Precio"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <InputNumber
              type="number"
              controls={false}
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
              placeholder="18/10/2023"
              onChange={onDateChange}
            />
          </Form.Item>
        </div>

        <div className="flex gap-3.5">
          <Form.Item
            name="comprobante"
            label="Comprobante"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select style={{ width: 120 }} placeholder="Boleto">
              <Option value="boleto">Boleto</Option>
              <Option value="factura">Factura</Option>
            </Select>
          </Form.Item>
          <Form.Item name="estado" label="Estado">
            <Switch
              checkedChildren="Pagado"
              unCheckedChildren="Por Pagar"
              className=" bg-red-500 shadow-lg"
              onChange={(checked) =>
                form.setFieldsValue({
                  estado: checked ? "Pagado" : "Por Pagar",
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
            name="viaje"
            tooltip="En qué viaje se llevara la encomienda"
            label="Viaje"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select style={{ width: 120 }} placeholder="AYHYO-1">
              <Option value="ayhyo-1">AYHYO-1</Option>
              <Option value="hyoay-2">HYOAY-2</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="col-span-4 flex items-end justify-end gap-3">
          <button type="submit" className={styles.basicButton}>
            Registrar
          </button>

          <Button htmlType="reset" onClick={() => form.resetFields()}>
            Cancelar
          </Button>
        </div>
      </Form>
    </div>
  );
}
