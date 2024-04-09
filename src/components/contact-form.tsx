import { Checkbox, Form, Input } from "antd";

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
      <div className="flex gap-2  ">
        <Form.Item<FieldType>
          name="nombres"
          rules={[{ required: false, message: "Please input your username!" }]}
        >
          <h3 className="mb-2 dark:text-white">Nombres</h3>
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          name="apellidos"
          rules={[{ required: false, message: "Please input your username!" }]}
        >
          <h3 className="mb-2 dark:text-white">Apellidos</h3>
          <Input size="large" />
        </Form.Item>
      </div>
      <Form.Item<FieldType>
        name="empresa"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <h3 className="mb-2 dark:text-white">Nombre de la Empresa</h3>
        <Input size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        name="email"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <h3 className="mb-2 dark:text-white">Email</h3>
        <Input size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        name="telefono"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <h3 className="mb-2 dark:text-white">Teléfono</h3>
        <Input size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        name="mensaje"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <h3 className="mb-2 dark:text-white">Mensaje</h3>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item<FieldType> name="accept" valuePropName="checked">
        <Checkbox className="space-x-2">
          <span className="dark:text-white">
            Me gustaría recebir correos sobre las nuevas actualizaciones de
            Exaya.
          </span>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <button
          className="w-full rounded-lg bg-primary py-2   text-white hover:opacity-80  active:opacity-80 "
          type="submit"
        >
          Enviar Mensaje
        </button>
      </Form.Item>
    </Form>
  );
}
