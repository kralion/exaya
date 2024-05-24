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
  type SelectProps,
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

interface SerieBoletoType {
  value:
    | "AG001"
    | "AG002"
    | "AG003"
    | "AG004"
    | "AG005"
    | "AG006"
    | "AG007"
    | "AG008"
    | "AG009"
    | "AG010";
  label: string;
}

interface SerieEncomiendaType {
  value:
    | "EAG001"
    | "EAG002"
    | "EAG003"
    | "EAG004"
    | "EAG005"
    | "EAG006"
    | "EAG007"
    | "EAG008"
    | "EAG009"
    | "EAG010";
  label: string;
}

const seriesEncomienda: SelectProps<SerieEncomiendaType>["options"] = [
  {
    value: "EAG001",
    label: "EAG001",
  },
  {
    value: "EAG002",
    label: "EAG002",
  },
  {
    value: "EAG003",
    label: "EAG003",
  },
  {
    value: "EAG004",
    label: "EAG004",
  },
  {
    value: "EAG005",
    label: "EAG005",
  },
  {
    value: "EAG006",
    label: "EAG006",
  },
  {
    value: "EAG007",
    label: "EAG007",
  },
  {
    value: "EAG008",
    label: "EAG008",
  },
  {
    value: "EAG009",
    label: "EAG009",
  },
  {
    value: "EAG010",
    label: "EAG010",
  },
];

const seriesBoleto: SelectProps<SerieBoletoType>["options"] = [
  {
    value: "AG001",
    label: "AG001",
  },
  {
    value: "AG002",
    label: "AG002",
  },
  {
    value: "AG003",
    label: "AG003",
  },
  {
    value: "AG004",
    label: "AG004",
  },
  {
    value: "AG005",
    label: "AG005",
  },
  {
    value: "AG006",
    label: "AG006",
  },
  {
    value: "AG007",
    label: "AG007",
  },
  {
    value: "AG008",
    label: "AG008",
  },
  {
    value: "AG009",
    label: "AG009",
  },
  {
    value: "AG010",
    label: "AG010",
  },
];

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
  const [queryEnabled, setQueryEnabled] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const [form] = Form.useForm();
  const { data: reniecResponse, error: errorValidacionDNI } =
    api.clientes.validateDni.useQuery(
      {
        dni: form.getFieldValue("usuarioDni") as string,
      },
      {
        enabled: queryEnabled,
      }
    );
  const createUsuarioMutation = api.usuarios.createUser.useMutation();
  const updateUserMutation = api.usuarios.updateUser.useMutation();
  const { data: rutas, isLoading } = api.rutas.getAllRutas.useQuery();
  const { data: usuarioSingle } = api.usuarios.getUsuarioById.useQuery({
    id: usuarioIdToEdit,
  });
  const uniqueCiudadOrigen = rutas
    ? rutas
        .map((ruta) => ruta.ciudadOrigen)
        .filter((value, index, self) => self.indexOf(value) === index)
    : [];
  const handleCancel = () => {
    setIsModalOpen(false);
    setSource(undefined);
    form.resetFields();
  };

  function handleUpdateUser(values: z.infer<typeof usuarioSchema>) {
    if (reniecResponse?.data === undefined) {
      return openMessage({
        content: "El DNI no existe en la base de datos de la RENIEC",
        duration: 3,
        type: "error",
      });
    }
    const apellidosConductor = `${reniecResponse.data.apellidoPaterno} ${reniecResponse.data.apellidoMaterno}`;
    if (usuarioSingle?.response) {
      updateUserMutation.mutate(
        {
          ...values,
          foto: source,
          id: usuarioSingle.response.id,
          nombres: reniecResponse.data.nombres,
          apellidos: apellidosConductor,
        },
        {
          onSuccess: (response) => {
            openMessage({
              content: response.message,
              duration: 3,
              type: "success",
            });
          },
          onError: (error) => {
            openMessage({
              content: error.message,
              duration: 3,
              type: "error",
            });
          },
          onSettled: () => {
            handleCancel();
          },
        }
      );
    }
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
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
        onSettled: () => {
          handleCancel();
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
        serieBoleto: usuarioSingle.response.serieBoleto,
        serieEncomienda: usuarioSingle.response.serieEncomienda,
        sedeDelegacion: usuarioSingle.response.sedeDelegacion,
      });
      setSource(usuarioSingle.response.foto);
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
            ]}
            validateStatus={
              errorValidacionDNI
                ? "error"
                : reniecResponse
                ? "success"
                : "validating"
            }
            help={
              form.getFieldValue("usuarioDni") ===
              "" ? null : reniecResponse?.status === "error" ? (
                "El DNI no existe"
              ) : reniecResponse?.status === "success" ? (
                <p>
                  {reniecResponse.data?.nombres}{" "}
                  {reniecResponse.data?.apellidoPaterno}{" "}
                  {reniecResponse.data?.apellidoMaterno}
                </p>
              ) : (
                "Ingrese los 8 dígitos del DNI"
              )
            }
          >
            <Input
              type="number"
              maxLength={8}
              addonBefore={<BsPassport />}
              placeholder="12345678"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const dni = event.target.value;
                form.setFieldValue("usuarioDni", dni);
                setQueryEnabled(dni.length === 8);
              }}
            />
          </Form.Item>

          <Form.Item
            name="telefono"
            label="N° Celular"
            rules={[{ required: true, message: "Verifica" }]}
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
                required: true,
                message: "Requerido",
              },
            ]}
          >
            <Input.Password placeholder="*********" type="password" />
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
            name="serieBoleto"
            label="Serie de Boletos"
            rules={[
              {
                required: true,
                message: "Requerido",
              },
            ]}
          >
            <Select options={seriesBoleto} />
          </Form.Item>
          <Form.Item
            name="serieEncomienda"
            label="Serie de Encomiendas"
            rules={[
              {
                required: true,
                message: "Requerido",
              },
            ]}
          >
            <Select options={seriesEncomienda} />
          </Form.Item>

          <Form.Item
            name="sedeDelegacion"
            tooltip="Sede donde va a trabajar el usuario"
            label="Agencia"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select loading={isLoading} placeholder="Huancayo">
              {uniqueCiudadOrigen?.map((ciudad: string) => (
                <Select.Option key={ciudad} value={ciudad}>
                  {ciudad}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="isDeleted"
            tooltip="El usuario está habilitado ?"
            label="Habilitado"
          >
            <Switch
              checkedChildren="Sí"
              unCheckedChildren="No"
              style={{ width: 80 }}
              className=" bg-red-500 shadow-lg"
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
                      disabled={source !== undefined}
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

          <Space className="mt-10 flex items-center justify-end">
            <Button
              loading={
                createUsuarioMutation.isLoading || updateUserMutation.isLoading
              }
              htmlType="submit"
              type="primary"
            >
              {usuarioIdToEdit ? "Guardar Cambios" : "Registrar"}
            </Button>

            <Button danger htmlType="reset" onClick={handleCancel}>
              Cancelar
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
