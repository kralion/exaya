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
  const [queryEnabled, setQueryEnabled] = useState(false);

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
  const { openNotification } = useNotification();
  const createConductorMutation = api.conductores.createConductor.useMutation();
  const { data: reniecResponse, error: errorValidacionDNI } =
    api.clientes.validateDni.useQuery(
      {
        dni: form.getFieldValue("conductorDni") as string,
      },
      {
        enabled: queryEnabled,
      }
    );

  const onFinish = (values: z.infer<typeof conductorSchema>) => {
    const apellidosConductor = `${
      reniecResponse?.data?.apellidoPaterno ?? ""
    } ${reniecResponse?.data?.apellidoMaterno ?? ""}`;
    createConductorMutation.mutate({
      ...values,
      foto: source,
      nombres: reniecResponse?.data?.nombres ?? "No registrado",
      apellidos: apellidosConductor,
    });
    setIsModalOpen(false);
    openNotification({
      message: "Conductor registrado",
      description: "El conductor ha sido registrado exitosamente",
      type: "success",
      placement: "topRight",
    });
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {activator}
        <AiOutlinePlusCircle size={15} />
      </Button>
      <Modal
        centered
        title={
          <p className="mb-7">
            <Title level={3}>Agregar Conductor</Title>
            <Typography.Text className=" font-light text-slate-600">
              Formulario con la informacion del conductor
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
                form.setFieldValue("pasajeroDni", dni);
                setQueryEnabled(dni.length === 8);
              }}
              type="text"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            name="telefono"
            label="N° Celular"
            rules={[{ required: true, message: "Verifica este campo" }]}
          >
            <InputNumber
              controls={false}
              type="number"
              placeholder="987654321"
              maxLength={9}
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
                message: "Ingresa la licencia del conductor",
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
                type: "array",
                required: true,
                message: "Selecciona",
              },
            ]}
          >
            <Select placeholder="A II-B">
              <Select.Option value="A II-A">A II-A</Select.Option>
              <Select.Option value="A II-B">A II-B</Select.Option>
              <Select.Option value="A II-C">A II-C</Select.Option>
              <Select.Option value="A II-A">A III-A</Select.Option>
              <Select.Option value="A II-B">A III-B</Select.Option>
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
                      disabled={createConductorMutation.isLoading && !source}
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

          <div>
            <Form.Item
              name="estado_documentario"
              label="Estad Documentario"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Seleeciona el estado documentario",
                },
              ]}
            >
              <Select placeholder="Seleccione el estado documentario">
                <Select.Option value="Actualizados">Actualizados</Select.Option>
                <Select.Option value="EnTramite">En Trámite</Select.Option>
                <Select.Option value="Vencidos">Vencidos</Select.Option>
              </Select>
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
          </div>
          <Space className="mt-10">
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
