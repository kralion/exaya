import { Checkbox, Form, Input } from "antd";
type TContact = {
  nombres: string;
  apellidos: string;
  empresa: string;
  email: string;
  mensaje: string;
  notificaciones: boolean;
};

const onFinish = (values: TContact) => {
  console.log("Success:", values);
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
      autoComplete="off"
    >
      <div className="flex gap-2  ">
        <Form.Item
          name="nombres"
          rules={[{ required: false, message: "Please input your username!" }]}
        >
          <h3 className="mb-2 dark:text-white">Nombres</h3>
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="apellidos"
          rules={[{ required: false, message: "Please input your username!" }]}
        >
          <h3 className="mb-2 dark:text-white">Apellidos</h3>
          <Input size="large" />
        </Form.Item>
      </div>
      <Form.Item
        name="empresa"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <h3 className="mb-2 dark:text-white">Nombre de la Empresa</h3>
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <h3 className="mb-2 dark:text-white">Email</h3>
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="mensaje"
        rules={[{ required: false, message: "Please input your username!" }]}
      >
        <h3 className="mb-2 dark:text-white">Mensaje</h3>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="notificaciones" valuePropName="checked">
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
