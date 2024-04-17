import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { Button, Form, Input, Modal, Select, Space, Typography } from "antd";
import type { CascaderProps } from "antd/lib/cascader";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsPassport, BsTelephone } from "react-icons/bs";
import type { z } from "zod";
import { default as style, default as styles } from "./frame.module.css";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { usuarioSchema } from "@/schemas";

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

export function UsuarioForm({ activator }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openNotification } = useNotification();
  const [source, setSource] = useState<string | undefined>();
  const [form] = Form.useForm();
  const createUsuarioMutation = api.usuarios.createUser.useMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSource(undefined);
  };

  function onFinish(values: z.infer<typeof usuarioSchema>) {
    createUsuarioMutation.mutate(
      {
        ...values,
        foto: source,
      },

      {
        onSuccess: (response) => {
          form.resetFields();
          openNotification({
            message: "Operacion Exitosa",
            description: response.message,
            type: "success",
            placement: "topRight",
          });
        },
        onError: (error) => {
          openNotification({
            message: "Falló la operación",
            description: error.message,
            type: "error",
            placement: "topRight",
          });
        },
      }
    );
    setSource(undefined);
  }
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
            <Input
              type="number"
              maxLength={8}
              addonBefore={<BsPassport />}
              placeholder="12345678"
            />
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
            <Input
              type="number"
              placeholder="987654321"
              maxLength={9}
              addonBefore={<BsTelephone />}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="username"
            label="Usuario"
            tooltip="Usuario para acceso al sistema"
            rules={[
              {
                required: true,
                message: "Ingresa el nombre de usuario",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="hugo-egoavil" type="text" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
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

          <Form.Item label="Foto del Usuario">
            <div>
              <CldUploadWidget
                uploadPreset="ml_default"
                options={{
                  folder: "exaya",
                  maxImageFileSize: 5000000,
                  sources: ["local", "url", "camera"],
                  language: "es",
                  text: {
                    es: {
                      or: "o",
                      menu: {
                        files: "Mis Archivos",
                        web: "Desde una URL",
                        camera: "Cámara",
                      },
                      selection_counter: {
                        selected: "Seleccionado",
                      },
                      queue: {
                        done: "Listo",
                        statuses: {
                          uploading: "Subiendo...",
                          error: "Error",
                          timeout: "Tiempo de espera agotado",
                          uploaded: "Subido",
                          aborted: "Abortado",
                          processing: "Procesando...",
                        },
                      },
                      local: {
                        browse: "Buscar",
                        dd_title_single: "Arrastra y suelta un archivo aquí",
                        dd_title_multi: "Arrastra y suelta archivos aquí",
                        drop_title_single: "Arrastra y suelta un archivo aquí",
                        drop_title_multiple: "Arrastra y suelta archivos aquí",
                      },
                    },
                  },

                  autoMinimize: true,
                }}
                onSuccess={(result) => {
                  if (
                    typeof result?.info === "object" &&
                    "secure_url" in result.info
                  ) {
                    setSource(result.info.secure_url);
                  }
                }}
              >
                {({ open }) => {
                  function handleOnClick() {
                    setSource(undefined);
                    open();
                  }
                  return (
                    <Button
                      disabled={createUsuarioMutation.isLoading && !source}
                      onClick={handleOnClick}
                    >
                      Cargar Imagen
                    </Button>
                  );
                }}
              </CldUploadWidget>
              {source && (
                <CldImage
                  width="100"
                  className="mt-2 rounded-lg"
                  height="100"
                  src={source}
                  sizes="50vw"
                  alt="Imagen"
                />
              )}
            </div>
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
