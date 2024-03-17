import { useNotification } from "@/context/NotificationContext";
import type { IBus } from "@/interfaces";
import { api } from "@/utils/api";
import type { UploadProps } from "antd";
import {
  Button,
  Form,
  Input,
  Modal,
  Space,
  Typography,
  Upload,
  message,
} from "antd";
import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ImSpinner3 } from "react-icons/im";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TbLicense } from "react-icons/tb";

import styles from "./frame.module.css";

type Props = {
  activator: string;
};
const { Title } = Typography;

export function BusForm({ activator }: Props) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const busCreateMutation = api.buses.createBus.useMutation();
  const showModal = () => {
    setIsModalOpen(true);
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

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

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
  const onFinish = async (values: IBus) => {
    await fetch("/api/image", {
      method: "POST",
      body: JSON.stringify(values.foto),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    //TODO: Validate this mutation before sending to the DB

    // busCreateMutation.mutate({
    //   asientos: parseInt(values.asientos.toString()),
    //   placa: values.placa,
    //   modelo: values.modelo,
    //   foto: [
    //     "https://img.freepik.com/premium-psd/isolated-realistic-matte-white-city-bus-car-from-left-front-angle-view_16145-3234.jpg?size=626&ext=jpg",
    //   ],
    // });
    form.resetFields();
    openNotification({
      message: "Conductor registrado",
      description: "El bus ha sido registrado exitosamente",
      type: "success",
      placement: "topRight",
    });
    setIsModalOpen(false);
  };
  const onFinishFailed = () => {
    openNotification({
      message: "Error",
      description: "Ocurrió algún error al registrar el bus",
      type: "error",
      placement: "topRight",
    });
  };

  return (
    <>
      <button className={styles.basicButton} onClick={showModal}>
        {activator}
        <AiOutlinePlusCircle size={15} />
      </button>
      <Modal
        width={350}
        centered
        title={
          <p className="mb-7">
            <Title level={3}>Agregar Bus</Title>
            <Typography.Text className=" font-light text-slate-600">
              Formulario con la informacion del bus
            </Typography.Text>
          </p>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          name="register"
          onFinishFailed={onFinishFailed}
          onFinish={busCreateMutation.isLoading ? undefined : onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="asientos"
            label="N° de Asientos"
            rules={[
              {
                required: true,
                message: "Ingresa la cantidad de asientos",
                whitespace: true,
              },
            ]}
          >
            <Input type="number" placeholder="45" />
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
            validateStatus="validating"
            help="Este campo será validado ..."
          >
            <Input
              addonBefore={<TbLicense title="Placa" />}
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
          <Form.Item label="Foto del Bus" name="foto">
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

          <Space className="mt-10">
            <button className={styles.basicButton} type="submit">
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
