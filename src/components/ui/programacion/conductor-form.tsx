import { useNotification } from "@/context/NotificationContext";
import type { z } from "zod";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { conductorSchema } from "@/schemas";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { api } from "@/utils/api";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { useMessageContext } from "@/context/MessageContext";

type Props = {
  activator: string;
};
const { Title } = Typography;

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

export function ConductorForm({ activator }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const { openMessage } = useMessageContext();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setConductorDNI("");
    setSource(undefined);
  };
  const [form] = Form.useForm();
  const { openNotification } = useNotification();
  const [conductorDNI, setConductorDNI] = useState<string>("");
  const createConductorMutation = api.conductores.createConductor.useMutation();
  const { data: reniecResponse, error: errorValidacionDNI } =
    api.clientes.validateDni.useQuery(
      {
        dni: conductorDNI,
      },
      {
        enabled: conductorDNI.length === 8,
      }
    );

  const onFinish = (values: z.infer<typeof conductorSchema>) => {
    const apellidosConductor = `${
      reniecResponse?.data?.apellidoPaterno ?? ""
    } ${reniecResponse?.data?.apellidoMaterno ?? ""}`;
    createConductorMutation.mutate(
      {
        ...values,
        foto: source,
        nombres: reniecResponse?.data?.nombres ?? "No registrado",
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
          form.resetFields();
        },
      }
    );
    setConductorDNI("");
    setSource(undefined);
  };

  return (
    <>
      <Button
        icon={<AiOutlinePlusCircle size={15} />}
        type="primary"
        onClick={showModal}
      >
        {activator}
      </Button>
      <Modal
        centered
        title={
          <p className="mb-7">
            <Title level={3}>Agregar Conductor</Title>
            <Typography.Text className=" font-light ">
              Rellene los campos para registrar un nuevo conductor
            </Typography.Text>
          </p>
        }
        open={isModalOpen}
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
            name="conductorDni"
            label="DNI"
            tooltip="DNI del conductor, esta información es validada con la RENIEC "
            rules={[
              { required: true },
              { min: 8, message: "El DNI debe tener 8 dígitos" },
              { max: 8, message: "El DNI debe tener 8 dígitos" },
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
            <InputNumber
              onChange={(value: string | null) => {
                const dni = JSON.stringify(value);
                setConductorDNI(dni);
              }}
              type="text"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            name="telefono"
            label="N° Celular"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Input
              type="number"
              maxLength={9}
              placeholder="987654321"
              addonBefore={<BsTelephone title="N° celular" />}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="licencia_conducir"
            label="Numero Licencia"
            rules={[
              {
                required: true,
                message: "Requerido",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="LC15ASF45" />
          </Form.Item>

          <Form.Item
            name="nivel"
            label="Clase Licencia"
            rules={[
              {
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select placeholder="A II-B">
              <Select.Option value="AII-A">AII-A</Select.Option>
              <Select.Option value="AII-B">AII-B</Select.Option>
              <Select.Option value="AIII-B">AIII-B</Select.Option>
              <Select.Option value="AIII-C">AIII-C</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Foto del Conductor">
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
                        mini_title_processing: "Procesando...",
                        mini_upload_count: "{{num}} archivo(s) subido(s)",
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

          <Form.Item
            name="disponibilidad"
            label="Disponibilidad"
            tooltip="Esta opción permite habilitar o deshabilitar al conductor"
            rules={[
              { required: true, message: "Disponibilidad del conductor" },
            ]}
          >
            <Radio.Group>
              <Radio value={false}>No</Radio>
              <Radio value={true}>Sí</Radio>
            </Radio.Group>
          </Form.Item>
          <Space className="col-span-2 mt-10 justify-end">
            <Button htmlType="submit" type="primary">
              Registrar
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
