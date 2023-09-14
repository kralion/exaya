import type { IEncomienda } from "@/interfaces";
import { PhoneOutlined } from "@ant-design/icons";
import type { CascaderProps, DatePickerProps } from "antd";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import styles from "./frame.module.css";

const { Option } = Select;

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
import { Title } from "@mantine/core";

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

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="PEN">S/.</Option>
        <Option value="USD">$</Option>
      </Select>
    </Form.Item>
  );
  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onVoucherTypeChange = (value: string) => {
    switch (value) {
      case "Huancayo":
        form.setFieldsValue({ ruta: "Ay" });
        break;
      case "Ayacucho":
        form.setFieldsValue({ ruta: "Hyo" });
        break;
      default:
    }
  };

  return (
    <div className="space-y-7">
      <Title order={5}>Registrar Encomienda</Title>

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
          name="nombreRemitente"
          label="Nombre del Remitente"
          tooltip="Persona que va a enviar la encomienda"
          rules={[
            {
              required: true,
              message: "Ingresa el nombre del remitente",
              whitespace: true,
            },
          ]}
          validateStatus="validating"
          help="La informacion está siendo validada..."
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="nombreReceptor"
          label="Nombre del Receptor"
          tooltip="Persona que va a recibir la encomienda"
          rules={[
            {
              required: true,
              message: "Ingresa el nombre del receptor",
              whitespace: true,
            },
          ]}
          validateStatus="validating"
          help="La informacion está siendo validada..."
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="telefonoRemitente"
          label="Telf. Remitente"
          rules={[{ required: true, message: "Verifica este campo" }]}
        >
          <InputNumber
            type="number"
            controls={false}
            maxLength={9}
            addonBefore={<PhoneOutlined title="N° celular" />}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="telefonoReceptor"
          label="Telf. Receptor"
          rules={[
            {
              required: true,
              message: "Verifica este campo",
            },
          ]}
        >
          <InputNumber
            controls={false}
            maxLength={9}
            type="number"
            addonBefore={<PhoneOutlined title="N° celular" />}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="origen"
          label="Origen"
          rules={[
            { type: "array", required: true, message: "Selecciona el Origen" },
          ]}
        >
          <Select
            onChange={onVoucherTypeChange}
            placeholder="Selecciona el Origen "
          >
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
          rules={[
            { type: "array", required: true, message: "Selecciona el Destino" },
          ]}
        >
          <Select
            onChange={onVoucherTypeChange}
            placeholder="Selecciona el Destino "
          >
            {terminales?.map((terminal, index) => (
              <Option key={index} value={terminal.value}>
                {terminal.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="precio"
          label="Precio"
          rules={[{ required: true, message: "Precio de la encomienda" }]}
        >
          <InputNumber
            type="number"
            controls={false}
            addonAfter={suffixSelector}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="fechaEnvio"
          label="Fecha de Envío"
          tooltip="Fecha en la que se va a cargar al compartimento de encomiendas"
          rules={[{ required: true, message: "Selecciona la fecha" }]}
        >
          <DatePicker
            className="w-full min-w-[230px]"
            onChange={onDateChange}
          />
        </Form.Item>

        <div className="flex gap-3.5">
          <Form.Item
            name="comprobante"
            label="Comprobante"
            rules={[
              {
                required: true,
                message: "Boleto o Factura",
              },
            ]}
          >
            <Select
              style={{ width: 120 }}
              onChange={onVoucherTypeChange}
              placeholder="Selecciona"
            >
              <Option value="boleto">Boleto</Option>
              <Option value="factura">Factura</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="pago"
            label="Pagado"
            className="w-full min-w-[100px]"
            rules={[
              {
                required: true,
                message: "Pagado o Por pagar",
              },
            ]}
          >
            <Select onChange={onVoucherTypeChange} placeholder="Selecciona">
              <Option value="boleto">Pagado</Option>
              <Option value="factura">Por Pagar</Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          name="contenido"
          label="Contenido de la encomienda"
          rules={[{ required: true, message: "Que contiene la encomienda" }]}
        >
          <Input maxLength={50} />
        </Form.Item>

        <Form.Item
          name="descripcion"
          label="Descripción de la encomienda"
          className="col-span-2 mb-10"
          rules={[{ message: "Describe a la encomienda" }]}
        >
          <Input.TextArea
            placeholder="Descripcion de la encomienda para diferenciarla..."
            autoSize={{ minRows: 1, maxRows: 2 }}
            maxLength={150}
          />
        </Form.Item>
        <div></div>
        <div></div>
        <button type="submit" className={styles.basicButton}>
          Registrar
        </button>

        <Button danger htmlType="reset" onClick={() => form.resetFields()}>
          Cancelar
        </Button>
      </Form>
    </div>
  );
}
