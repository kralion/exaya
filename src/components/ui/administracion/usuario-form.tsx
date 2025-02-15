import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
import type { CascaderProps } from "antd/lib/cascader";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsPassport, BsTelephone } from "react-icons/bs";
import { HiOutlineUpload } from "react-icons/hi";
import type { z } from "zod";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { usuarioSchema } from "@/schemas";

type Props = {
  activator: string;
  usuarioIdToEdit: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};
const { Title, Text } = Typography;

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

export function UsuarioForm({
  activator,
  usuarioIdToEdit,
  setIsModalOpen,
  isModalOpen,
}: Props) {
  const { openMessage } = useMessageContext();
  const [usuarioDni, setUsuarioDni] = useState<string>("");
  const [source, setSource] = useState<string | undefined>();
  const [form] = Form.useForm();
  const { data: reniecResponse, error: errorValidacionDNI } =
    api.clientes.validateDni.useQuery(
      {
        dni: form.getFieldValue("usuarioDni") as string,
      },
      {
        enabled: usuarioDni?.length === 8,
      }
    );
  const utils = api.useUtils();
  const createUsuarioMutation = api.usuarios.createUser.useMutation();
  const usuarioDisableMutation = api.usuarios.disableUser.useMutation();

  const updateUserMutation = api.usuarios.updateUser.useMutation();
  const { data: sedes, isLoading: isLoadingSedes } =
    api.sedes.getAllSedes.useQuery();
  const { data: usuarioSingle, refetch } = api.usuarios.getUsuarioById.useQuery(
    {
      id: usuarioIdToEdit,
    }
  );

  const handleCancel = () => {
    setIsModalOpen(false);
    setSource(undefined);
    setUsuarioDni("");
    form.resetFields();
  };

  const handleDisableUser = (id: string) => {
    usuarioDisableMutation.mutate(
      { id },

      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
        onSettled: () => {
          void refetch();
        },
      }
    );
  };

  function handleUpdateUser(values: z.infer<typeof usuarioSchema>) {
    if (!usuarioSingle?.response) return;

    updateUserMutation.mutate(
      {
        ...usuarioSingle.response,
        ...values,
        password: values.password || usuarioSingle.response.password,
        foto: source ?? usuarioSingle.response.foto,
        id: usuarioSingle.response.id,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (response) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
          handleCancel();
          await utils.usuarios.getAllUsuarios.invalidate();
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
      }
    );
  }

  function handleCreateUser(values: z.infer<typeof usuarioSchema>) {
    if (reniecResponse?.data === undefined) {
      return openMessage({
        content: "El DNI no existe en la base de datos de la RENIEC",
        duration: 3,
        type: "error",
      });
    }
    const apellidosConductor = `${reniecResponse.data.apellidoPaterno} ${reniecResponse.data.apellidoMaterno}`;
    createUsuarioMutation.mutate(
      {
        ...values,
        foto: source,
        nombres: reniecResponse.data.nombres,
        apellidos: apellidosConductor,
      },

      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (response) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
          handleCancel();
          await utils.usuarios.getAllUsuarios.invalidate();
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
      }
    );
  }

  function onFinish(values: z.infer<typeof usuarioSchema>) {
    if (usuarioIdToEdit) {
      handleUpdateUser(values);
    } else {
      handleCreateUser(values);
    }
  }

  useEffect(() => {
    if (usuarioSingle?.response && usuarioIdToEdit) {
      form.setFieldsValue({
        usuarioDni: usuarioSingle.response.usuarioDni,
        telefono: usuarioSingle.response.telefono,
        username: usuarioSingle.response.username,
        isDeleted: usuarioSingle.response.isDeleted,
        rol: usuarioSingle.response.rol,
        sedeId: usuarioSingle.response.sedeId,
        nombres: usuarioSingle.response.nombres,
        apellidos: usuarioSingle.response.apellidos,
      });
      setSource(usuarioSingle.response.foto);
      setUsuarioDni(usuarioSingle.response.usuarioDni);
    }
  }, [usuarioSingle, usuarioIdToEdit, form]);

  return (
    <>
      <Button
        type="primary"
        icon={<AiOutlinePlusCircle size={15} />}
        onClick={() => setIsModalOpen(true)}
      >
        {activator}
      </Button>
      <Modal
        centered
        title={
          <p className="mb-7">
            <Title level={3}>Agregar Usuario</Title>
            <Text className=" font-light ">
              Formulario con la informacion del Usuario
            </Text>
          </p>
        }
        open={isModalOpen}
        onOk={handleCancel}
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
              {
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                message: "Solo valores numéricos",
              },
            ]}
            validateStatus={
              errorValidacionDNI
                ? "error"
                : reniecResponse
                ? "success"
                : "validating"
            }
            help={
              <p>
                {reniecResponse?.data?.nombres}{" "}
                {reniecResponse?.data?.apellidoPaterno}{" "}
                {reniecResponse?.data?.apellidoMaterno}
              </p>
            }
          >
            <Input
              type="number"
              maxLength={8}
              addonBefore={<BsPassport />}
              placeholder="12345678"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const dni = event.target.value;
                setUsuarioDni(dni);
              }}
              value={usuarioDni}
            />
          </Form.Item>

          <Form.Item
            name="telefono"
            label="N° Celular"
            rules={[
              { required: true, message: "Ingresa el N° Celular" },
              {
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                message: "Solo valores numéricos",
              },
            ]}
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
                message: "Requerido",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="exaya-user" type="text" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              {
                required: !usuarioIdToEdit,
                message: "Requerido",
              },
            ]}
          >
            <Input.Password
              placeholder={
                usuarioIdToEdit
                  ? "Dejar vacío para mantener la contraseña actual"
                  : "*********"
              }
              type="password"
            />
          </Form.Item>

          <Form.Item
            name="rol"
            label="Rol"
            rules={[
              {
                required: true,
                message: "Selecciona",
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
            name="sedeId"
            tooltip="Sede donde va a trabajar el usuario"
            label="Agencia"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select loading={isLoadingSedes} placeholder="Huancayo">
              {sedes?.map((sede) => (
                <Select.Option key={sede.id} value={sede.id}>
                  {sede.agencia}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="isDeleted" label="Deshabilitar Usuario">
            <Switch
              checkedChildren="Sí"
              unCheckedChildren="No"
              style={{ width: 80 }}
              onChange={(checked) => {
                form.setFieldValue("isDeleted", checked);
              }}
            />
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
                        mini_upload_count: "{{num}} archivo(s) subido(s)",
                        mini_title_processing: "Procesando...",
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
                      icon={<HiOutlineUpload />}
                      // disabled={source !== undefined}
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
                  className="border-rounded mt-2 rounded-lg border border-dashed"
                  height="100"
                  src={source}
                  sizes="50vw"
                  alt="Imagen"
                />
              )}
            </div>
          </Form.Item>

          <Space className="col-span-2 mt-10 flex  justify-end">
            {usuarioIdToEdit && (
              <Button danger onClick={() => handleDisableUser(usuarioIdToEdit)}>
                Deshabilitar
              </Button>
            )}

            <Button
              loading={
                createUsuarioMutation.isLoading || updateUserMutation.isLoading
              }
              htmlType="submit"
              type="primary"
            >
              {usuarioIdToEdit ? "Guardar" : "Registrar"}
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
