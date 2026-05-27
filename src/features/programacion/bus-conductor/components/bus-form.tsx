import { useMessageContext } from "@/context/MessageContext";
import { api, type AppTRPCClientError, type RouterOutputs } from "@/utils/api";
import { Button, Form, Input, Modal, Space, Typography, Upload } from "antd";
import type { UploadProps } from "antd";
import { useState } from "react";
import { uploadFileToCloudinary } from "@/utils/cloudinary";
import { PlusCircle, CreditCard } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { busSchema } from "@/schemas";
import type { z } from "zod";

type Props = {
  activator: string;
};
const { Title } = Typography;

export function BusForm({ activator }: Props) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openMessage } = useMessageContext();
  const utils = api.useUtils();
  const [source, setSource] = useState();
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const { mutate: createBusMutation, isLoading } =
    api.buses.createBus.useMutation();
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setSource(undefined);
  };

  function onFinish(values: z.infer) {
    createBusMutation(
      {
        ...values,
        asientos: Number(values.asientos),
        foto: source,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (response: RouterOutputs["buses"]["createBus"]) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
          form.resetFields();
          setSource(undefined);
          setIsModalOpen(false);
          await utils.buses.getAllBuses.invalidate();
        },
        onError: (error: AppTRPCClientError) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
      }
    );
  }

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
        icon={<PlusCircle size={15} />}
        type="primary"
        loading={isLoading}
        onClick={() => setIsModalOpen(true)}
      >
        {activator}
      </Button>
      <Modal
        width={350}
        centered
        title={
          <p className="mb-7">
            <Title level={3}>Agregar Bus</Title>
            <Typography.Text className=" font-light ">
              Rellene los campos para registrar un nuevo bus
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
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="asientos"
            label="N° de Asientos"
            rules={[
              {
                required: true,
                message: "Ingresa la cantidad de asientos",
              },
              {
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                message: "Solo valores numéricos",
              },
            ]}
          >
            <Input type="number" placeholder="45" maxLength={2} />
          </Form.Item>

          <Form.Item
            name="placa"
            label="Placa de Rodaje"
            rules={[
              {
                required: true,
                message: "Ingresa la placa del bus",
                whitespace: true,
              },
            ]}
          >
            <Input
              addonBefore={<CreditCard title="Placa" />}
              placeholder="LXC-48C"
            />
          </Form.Item>
          <Form.Item
            name="modelo"
            label="Modelo"
            rules={[
              {
                message: "Ingresa el modelo del bus",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Scania Turismo Grant" />
          </Form.Item>
          <Form.Item label="Foto del Bus">
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
          <Space className="mt-10 flex justify-end">
            <Button loading={isLoading} htmlType="submit" type="primary">
              Registrar
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
