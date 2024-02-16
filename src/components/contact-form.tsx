import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  nombres: string;
  apellidos: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
  accept: boolean;
};

export default function ContactForm() {
  return (
    <Form
      name="contact"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 20 }}
      layout="vertical"
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="flex gap-2 ">
        <Form.Item<FieldType>
          label="Nombres"
          name="nombres"
          rules={[{ required: false, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Apellidos"
          name="apellidos"
          rules={[{ required: false, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>
      </div>
      <Form.Item<FieldType>
        label="Nombre de la Empresa"
        name="empresa"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Teléfono"
        name="telefono"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Mensaje"
        name="mensaje"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item<FieldType> name="accept" valuePropName="checked">
        <Checkbox className="space-x-2">
          Me gustaría recebir correos sobre las nuevas actualizaciones de Exaya.
          Entiendo los{" "}
          <a href="#" className="text-blue-500">
            Términos y Condiciones
          </a>{" "}
          y la <a href="#">Política de Privacidad</a>.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <button
          className="w-full rounded-lg bg-primary   py-2 text-white  active:opacity-80 "
          type="submit"
        >
          Enviar Mensaje
        </button>
      </Form.Item>
    </Form>
  );
}
