import { usuarios } from "@/data";
import { CloudUploadOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import type { CascaderProps } from "antd/lib/cascader";
import { useState } from "react";
import styles from "./frame.module.css";
type Props = {
  activator: string;
};

interface RolNodeType {
  value: number;
  label: string;
  children?: RolNodeType[];
}

interface DocumentsStatusNodeType {
  value: string;
  label: string;
  children?: DocumentsStatusNodeType[];
}

const rolesSistema: CascaderProps<RolNodeType>["options"] = [
  {
    value: 0,
    label: "Administrador",
  },
  {
    value: 1,
    label: "Supervisor",
  },
  {
    value: 2,
    label: "Usuario",
  },
];
const sedesDisponibles: CascaderProps<DocumentsStatusNodeType>["options"] = [
  {
    value: "Lima",
    label: "Lima",
  },
  {
    value: "Huancayo",
    label: "Huancayo",
  },
  {
    value: "Ayacucho",
    label: "Ayacucho",
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

import { Title } from "@mantine/core";
import style from "./frame.module.css";
import { useNotification } from "@/context/NotificationContext";
import { BsTelephone } from "react-icons/bs";
export function UsuarioForm({ activator }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuariosRegistrados, setUsuariosRegistrados] = useState(usuarios);
  const [profilePicList, setProfilePicList] = useState([]);
  const [value, setValue] = useState(1);
  const { openNotification } = useNotification();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();
  const handleAddUser = (user: any) => {
    setUsuariosRegistrados([...usuariosRegistrados, user]);
  };

  const onFinish = (values: any) => {
    handleAddUser(values);
    form.resetFields();
    openNotification({
      message: "Usuario Registrado",
      description: "El usuario se registró correctamente",
      type: "success",
      placement: "topRight",
    });
  };
  const onFinishFailed = () => {
    console.log("Falló el registro");
  };
  const profilePicFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleProfilePicFileChange = (newProfilePicFileList) => {
    setProfilePicList(newProfilePicFileList);
  };

  return (
    <>
      <button className={style.basicButton} onClick={showModal}>
        {activator}
      </button>
      <Modal
        centered
        title={
          <p className="mb-7">
            <Title order={3}>Agregar Usuario</Title>
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
            name="dni"
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
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Ingresa el correo electronico",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="hugo.egoavil@gmail.com" />
          </Form.Item>

          <Form.Item
            name="rolesSistema"
            label="Rol"
            rules={[
              {
                required: true,
                message: "Selecciona el Rol del Usuario",
              },
            ]}
          >
            <Select placeholder="Administrador">
              {rolesSistema?.map((rol) => (
                <Select.Option key={rol.value} value={rol.value}>
                  {rol.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Foto Usuario"
            name="foto_perfil"
            getValueFromEvent={profilePicFile}
            valuePropName="fileList"
            rules={[
              {
                required: true,
                message: "Sube una foto de perfil",
              },
            ]}
          >
            <Upload
              action="/upload.do"
              listType="picture-circle"
              fileList={profilePicList}
              beforeUpload={() => false}
              showUploadList={{
                showRemoveIcon: true,
                showPreviewIcon: false,
              }}
              onChange={({ fileList: newProfilePicFileList }) =>
                handleProfilePicFileChange(newProfilePicFileList)
              }
            >
              {profilePicList.length === 0 && (
                <div>
                  <CloudUploadOutlined />
                  <br />
                  <span className="ml-2">Subir foto</span>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            name="sede"
            label="Sede Delegación"
            rules={[
              {
                required: true,
                message: "Seleeciona la sede de trabajo",
              },
            ]}
          >
            <Select placeholder="Huancayo">
              {sedesDisponibles?.map((sede) => (
                <Select.Option key={sede.value} value={sede.value}>
                  {sede.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div></div>
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
