import type { CascaderProps, DatePickerProps } from "antd";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import React from "react";
import { PhoneOutlined } from "@ant-design/icons";
import type { Encomienda } from "@/interfaces/interfaces";

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const destinos: CascaderProps<DataNodeType>["options"] = [
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

  const onFinish = (values: Encomienda) => {
    handleAddEncomienda(values);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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

  return (
    <Form
      {...formItemLayout}
      form={form}
      layout="vertical"
      name="register"
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
      initialValues={{ prefix: "+51" }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
      className="grid grid-flow-row grid-cols-2 gap-x-7"
    >
      <Form.Item
        name="nombreRemitente"
        label="Nombre del Remitente"
        tooltip="Persona que va a enviar la encomienda"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
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
            message: "Please input your nickname!",
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
        label="Remitente"
        rules={[{ required: true, message: "Verifica este campo" }]}
      >
        <InputNumber
          controls={false}
          maxLength={9}
          addonBefore={<PhoneOutlined title="N° celular" />}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        name="telefonoReceptor"
        label="Receptor"
        rules={[{ required: true, message: "Verifica este campo" }]}
      >
        <InputNumber
          controls={false}
          maxLength={9}
          addonBefore={<PhoneOutlined title="N° celular" />}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        name="destino"
        label="Destino"
        rules={[
          { type: "array", required: true, message: "Selecciona el Destino" },
        ]}
      >
        <Cascader options={destinos} />
      </Form.Item>

      <Form.Item
        name="precio"
        label="Precio"
        rules={[
          { required: true, message: "Insertar el precio de la encomienda" },
        ]}
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
        help="Calculando espacio para esa fecha..."
      >
        <DatePicker style={{ width: 254 }} onChange={onDateChange} />
      </Form.Item>

      <Form.Item
        name="contenido"
        label="Contenido de la encomienda"
        rules={[{ required: true, message: "Que contiene la encomienda" }]}
      >
        <Input maxLength={30} />
      </Form.Item>
      <Form.Item name="password" label="Clave de Envío" hasFeedback>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="descripcion"
        label="Descripción de la encomienda"
        rules={[{ required: true, message: "Describe a la encomiendas" }]}
      >
        <Input.TextArea
          placeholder="Descripcion de la encomienda para diferenciarla..."
          showCount
          maxLength={100}
        />
      </Form.Item>
      <Button style={{ width: "100%" }} type="primary" htmlType="submit">
        Registrar
      </Button>
      <Button
        style={{ width: "100%" }}
        danger
        htmlType="reset"
        onClick={() => form.resetFields()}
      >
        Cancelar
      </Button>
    </Form>
  );
}