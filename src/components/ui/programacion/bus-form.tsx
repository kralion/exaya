import { useNotification } from "@/context/NotificationContext";
import type { IBus } from "@/interfaces";
import { api } from "@/utils/api";
import { Button, Form, Input, Modal, Space, Typography, Upload } from "antd";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbLicense } from "react-icons/tb";
import styles from "./frame.module.css";
import { IoCloudUploadOutline } from "react-icons/io5";

type Props = {
  activator: string;
};
const { Title } = Typography;
export function BusForm({ activator }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const busCreateMutation = api.buses.createBus.useMutation();

  const onFinish = (values: IBus) => {
    console.log("Received values of form: ", values);
    const asientosParsedToNumber = parseInt(values.asientos.toString());
    const busPlaca =
      "https://img.freepik.com/premium-psd/isolated-realistic-matte-white-city-bus-car-from-left-front-angle-view_16145-3234.jpg?size=626&ext=jpg";
    busCreateMutation.mutate({
      asientos: asientosParsedToNumber,
      placa: values.placa,
      modelo: values.modelo,
      foto: [busPlaca],
    });
    form.resetFields();
    setIsModalOpen(false);
    openNotification({
      message: "Conductor registrado",
      description: "El bus ha sido registrado exitosamente",
      type: "success",
      placement: "topRight",
    });
  };
  const onFinishFailed = () => {
    openNotification({
      message: "Error",
      description: "Ocurrió algún error al registrar el bus",
      type: "error",
      placement: "topRight",
    });
  };
  // const busPicFile = (e: { fileList: any }) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //   return e && e.fileList;
  // };

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

          {/* TODO: Modify the component for well functioning */}

          {/* <Form.Item
            label="Foto del Bus"
            name="foto"
            getValueFromEvent={busPicFile}
            valuePropName="fileList"
          >
            <Upload
              action="/upload.do"
              listType="picture-card"
              fileList={busPicList}
              beforeUpload={() => false}
              showUploadList={{
                showRemoveIcon: true,
                showPreviewIcon: false,
              }}
            >
              {busPicList.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-1">
                  <IoCloudUploadOutline size={30} />
                  <span>Subir foto</span>
                </div>
              )}
            </Upload>
          </Form.Item> */}

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
