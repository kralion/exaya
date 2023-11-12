import type { IEncomienda } from "@/interfaces";
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

import { useEncomiendasContext } from "@/context/EncomiendasContext";

export function EncomiendasForm() {
  const [form] = Form.useForm();
  const { handleAddEncomienda } = useEncomiendasContext();

  const onFinish = (values: IEncomienda) => {
    handleAddEncomienda(values);
    form.resetFields();
  };
  const onFinishFailed = () => {
    console.log("Falló el registro de la encomienda");
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
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        initialValues={{ prefix: "+51" }}
        scrollToFirstError
        className="grid grid-flow-row grid-cols-4 gap-x-3.5"
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
          validateStatus="validating"
          help="Validando..."
        >
          <Input placeholder="12345678" />
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
          validateStatus="validating"
          help="Validando..."
        >
          <Input placeholder="12345678" />
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
            rules={[{ required: true, message: "Precio" }]}
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
