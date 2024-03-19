import { IoCloudUploadOutline } from "react-icons/io5";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Typography,
  Upload,
  message,
} from "antd";
import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { BsTelephone } from "react-icons/bs";
import style from "./frame.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import type { UploadProps } from "antd/lib";
import { ImSpinner3 } from "react-icons/im";
import Image from "next/image";
import type { CascaderProps } from "antd/lib/cascader";
import { useState } from "react";
import styles from "./frame.module.css";

type Props = {
  activator: string;
};
const { Title } = Typography;

interface RolNodeType {
  value: "ADMIN" | "GUEST" | "USER";
  label: string;
  children?: RolNodeType[];
}

const rolesSistema: CascaderProps<RolNodeType>["options"] = [
  {
    value: "ADMIN",
    label: "Administrador",
  },
  {
    value: "GUEST",
    label: "Invitado",
  },
  {
    value: "USER",
    label: "Usuario",
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

type TUsuarioForm = {
  username: string;
  nombres: string;
  apellidos: string;
  password: string;
  usuarioDni: string;
  rol: "ADMIN" | "GUEST" | "USER";
  sedeDelegacion: string;
  foto: string | null;
  telefono: string;
};

export function UsuarioForm({ activator }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as File, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      className=" flex flex-col items-center justify-center"
      type="button"
    >
      {loading ? (
        <ImSpinner3 className="animate-spin" size={20} />
      ) : (
        <IoCloudUploadOutline size={20} />
      )}
      <div style={{ marginTop: 8 }}>{loading ? "Cargando" : "Subir Foto"}</div>
    </button>
  );
  const getBase64 = (img: File, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };
  const beforeUpload = async (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      await message.error("La imagen debe ser de tipo JPG o PNG");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      await message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const usuarioMutation = api.usuarios.createUser.useMutation();
    usuarioMutation.mutate(values as TUsuarioForm);
    form.resetFields();
    openNotification({
      message: "Operación Existosa",
      description: "El usuario se registró correctamente",
      type: "success",
      placement: "topRight",
    });
  };
  const onFinishFailed = () => {
    openNotification({
      message: "Error al Registrar",
      description: "El usuario no se registró correctamente",
      type: "error",
      placement: "topRight",
    });
  };
  const {
    data: rutas,
    isLoading,
    isFetching,
  } = api.rutas.getAllRutas.useQuery();
  const uniqueCiudadOrigen = rutas
    ? rutas
        .map((ruta) => ruta.ciudadOrigen)
        .filter((value, index, self) => self.indexOf(value) === index)
    : [];
  return (
    <>
      <button className={style.basicButton} onClick={showModal}>
        <AiOutlinePlusCircle size={15} />
        {activator}
      </button>
      <Modal
        centered
        title={
          <p className="mb-7">
            <Title level={3}>Agregar Usuario</Title>
            <Typography.Text className=" font-light text-slate-600">
              Formulario con la informacion del Usuario
            </Typography.Text>
          </p>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...formItemLayout}
          form={form}
          layout="vertical"
          name="register"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
          scrollToFirstError
          className="grid grid-flow-row grid-cols-2 gap-x-3.5 "
        >
          <Form.Item
            name="usuarioDni"
            label="DNI"
            rules={[
              {
                required: true,
                message: "Ingresa el DNI del conductor",
                whitespace: true,
              },
            ]}
            validateStatus="validating"
            help="Este campo será validado ..."
          >
            <Input type="number" placeholder="12345678" />
          </Form.Item>
          <Form.Item
            name="nombres"
            label="Nombres"
            rules={[
              {
                required: true,
                message: "Ingresa los nombres del conductor",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Roberto" />
          </Form.Item>

          <Form.Item
            name="apellidos"
            label="Apellidos"
            rules={[
              {
                required: true,
                message: "Ingresa los apellidos del conductor",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Quiroz" />
          </Form.Item>

          <Form.Item
            name="telefono"
            label="N° Celular"
            rules={[{ required: true, message: "Verifica este campo" }]}
          >
            <InputNumber
              type="number"
              controls={false}
              placeholder="987654321"
              maxLength={9}
              addonBefore={<BsTelephone title="N° celular" />}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="username"
            label="Usuario"
            rules={[
              {
                required: true,
                message: "Ingresa el nombre de usuario",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="hugo-egoavil" type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Escriba la contraseña",
              },
            ]}
          >
            <Input.Password type="password" />
          </Form.Item>

          <Form.Item
            name="rol"
            label="Rol"
            rules={[
              {
                required: true,
                message: "Selecciona el Rol",
              },
            ]}
          >
            <Select placeholder="ADMIN">
              {rolesSistema?.map((rol) => (
                <Select.Option key={rol.value} value={rol.value}>
                  {rol.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Foto del Usuario" name="foto">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <Image src={imageUrl} alt="avatar" width={100} height={100} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            name="sedeDelegacion"
            tooltip="Sede donde va a trabajar el usuario"
            label="Sede Delegación"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select loading={isLoading || isFetching} placeholder="Huancayo">
              {uniqueCiudadOrigen?.map((ciudad: string) => (
                <Select.Option key={ciudad} value={ciudad}>
                  {ciudad}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Space className="flex justify-end">
            <button type="submit" className={styles.basicButton}>
              Registrar
            </button>

            <Button danger htmlType="reset" onClick={handleCancel}>
              Cancelar
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
