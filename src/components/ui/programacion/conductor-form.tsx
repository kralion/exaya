import type { z } from "zod";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { conductorSchema } from "@/schemas";
import { useMessageContext } from "@/context/MessageContext";
import { api, type AppTRPCClientError, type RouterOutputs } from "@/utils/api";
import {
  Button,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import type { UploadProps } from "antd";
import { useEffect, useState } from "react";
import { uploadFileToCloudinary } from "@/utils/cloudinary";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const { Title } = Typography;
type Props = {
  activator: string;
  conductorIdToEdit: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};
export function ConductorForm({
  activator,
  conductorIdToEdit,
  setIsModalOpen,
  isModalOpen,
}: Props) {
  const [source, setSource] = useState<string | undefined>();
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const { openMessage } = useMessageContext();
  const utils = api.useUtils();
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
    setConductorDNI("");
    setSource(undefined);
  };
  const [form] = Form.useForm();
  const [conductorDNI, setConductorDNI] = useState<string>("");
  const createConductorMutation = api.conductores.createConductor.useMutation();
  const updateConductorMutation = api.conductores.updateConductor.useMutation();
  const { data: conductorSingle } = api.conductores.getConductorById.useQuery({
    id: conductorIdToEdit,
  });
  const { data: reniecResponse, error: errorValidacionDNI } =
    api.clientes.validateDni.useQuery(
      {
        dni: conductorDNI,
      },
      {
        enabled: conductorDNI?.length === 8,
      }
    );
  function handleUpdateConductor(values: z.infer<typeof conductorSchema>) {
    if (!reniecResponse?.data) {
      return openMessage({
        content: "Verique el DNI del conductor",
        duration: 3,
        type: "error",
      });
    }
    const apellidosConductor = `${reniecResponse.data.apellidoPaterno} ${reniecResponse.data.apellidoMaterno}`;

    updateConductorMutation.mutate(
      {
        ...values,
        foto: source,
        id: conductorIdToEdit,
        nombres: reniecResponse.data.nombres,
        apellidos: apellidosConductor,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (
          response: RouterOutputs["conductores"]["updateConductor"]
        ) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
          await utils.conductores.getAllConductores.invalidate();
          form.resetFields();
          setConductorDNI("");
          setSource(undefined);
          setIsModalOpen(false);
        },
        onError: (error: AppTRPCClientError) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
      }
    );
  }

  function handleCreateConductor(values: z.infer<typeof conductorSchema>) {
    if (!reniecResponse?.data) {
      return openMessage({
        content: "Verique el DNI del conductor",
        duration: 3,
        type: "error",
      });
    }
    const apellidosConductor = `${reniecResponse?.data?.apellidoPaterno} ${reniecResponse?.data?.apellidoMaterno}`;

    createConductorMutation.mutate(
      {
        ...values,
        foto: source,
        nombres: reniecResponse.data.nombres,
        apellidos: apellidosConductor,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (
          response: RouterOutputs["conductores"]["createConductor"]
        ) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });

          await utils.conductores.getAllConductores.invalidate();
          form.resetFields();
          setConductorDNI("");
          setSource(undefined);
        },
        onError: (error: AppTRPCClientError) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
      }
    );
  }

  function onFinish(values: z.infer<typeof conductorSchema>) {
    if (conductorIdToEdit) {
      handleUpdateConductor(values);
    } else {
      handleCreateConductor(values);
    }
  }

  useEffect(() => {
    if (conductorSingle && conductorIdToEdit) {
      form.setFieldsValue({
        conductorDni: conductorSingle?.response?.conductorDni,
        telefono: conductorSingle?.response?.telefono,
        numeroLicencia: conductorSingle?.response?.numeroLicencia,
        claseLicencia: conductorSingle?.response?.claseLicencia,
        nivel: conductorSingle?.response?.claseLicencia,
        disponibilidad: conductorSingle?.response?.disponibilidad,
      });
      setSource(conductorSingle.response?.foto ?? undefined);
    }
  }, [form, conductorIdToEdit, conductorSingle]);

  const handleBeforeUpload: UploadProps["beforeUpload"] = async (file) => {
    try {
      setUploadingPhoto(true);
      const url = await uploadFileToCloudinary(file);
      setSource(url);
    } catch (error) {
      console.error(error);
      openMessage({
        content:
          error instanceof Error ? error.message : "Error al subir la imagen",
        type: "error",
        duration: 3,
      });
    } finally {
      setUploadingPhoto(false);
    }
    return false;
  };

  return (
    <>
      <Button
        icon={<AiOutlinePlusCircle size={15} />}
        type="primary"
        onClick={() => setIsModalOpen(true)}
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
          form={form}
          layout="vertical"
          name="register-driver"
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const dni = event.target.value;
                setConductorDNI(dni);
              }}
              type="number"
              maxLength={8}
              value={conductorDNI}
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
            />
          </Form.Item>
          <Form.Item
            name="numeroLicencia"
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
            name="claseLicencia"
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
              <Upload
                accept="image/*"
                showUploadList={false}
                beforeUpload={handleBeforeUpload}
              >
                <Button
                  disabled={source !== undefined}
                  loading={uploadingPhoto}
                >
                  Cargar Imagen
                </Button>
              </Upload>
              {source ? (
                <img
                  width={100}
                  height={100}
                  src={source}
                  alt="Imagen"
                  className="border-rounded mt-2 rounded-lg border border-dashed"
                />
              ) : null}
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
              <Radio value={true}>Sí</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Space className="col-span-2 mt-10 flex justify-end">
            <Button
              htmlType="submit"
              loading={
                createConductorMutation.isLoading ||
                updateConductorMutation.isLoading
              }
              type="primary"
            >
              {conductorIdToEdit ? "Guardar Cambios" : "Registrar"}
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
