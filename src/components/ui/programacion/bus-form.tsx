import { useConductorContext } from "@/context/ConductorContext";
import type { IConductor } from "@/interfaces";
import { UploadOutlined } from "@ant-design/icons";
import { Title } from "@mantine/core";
import { Button, Form, Input, Modal, Space, Typography, Upload } from "antd";
import { useState } from "react";
import { TbLicense } from "react-icons/tb";
import { default as style, default as styles } from "./frame.module.css";
import { useNotification } from "@/context/NotificationContext";
type Props = {
  activator: string;
};

export function BusForm({ activator }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [busPicList, setBusPicList] = useState([]);

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
  const { handleAddConductor } = useConductorContext();

  const { openNotification } = useNotification();

  const onFinish = (values: IConductor) => {
    handleAddConductor(values);
    form.resetFields();
    setIsModalOpen(false);
    openNotification({
      message: "Conductor registrado",
      description: "El conductor ha sido registrado exitosamente",
      type: "success",
      placement: "topRight",
    });
  };
  const onFinishFailed = () => {
    console.log("Falló el registro");
  };
  const busPicFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleBusPicFileChange = (newBusPicFileList) => {
    setBusPicList(newBusPicFileList);
  };

  return (
    <>
      <button className={style.basicButton} onClick={showModal}>
        {activator}
      </button>
      <Modal
        width={350}
        centered
        title={
          <p className="mb-7">
            <Title order={3}>Agregar Bus</Title>
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
            label="Asientos"
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
                required: true,
                message: "Ingresa el modelo del bus",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Scania Turismo Grant" />
          </Form.Item>

          <Form.Item
            label="Foto del Bus"
            name="foto_perfil"
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
              onChange={({ fileList: newBusPicFileList }) =>
                handleBusPicFileChange(newBusPicFileList)
              }
            >
              {busPicList.length === 0 && (
                <div>
                  <UploadOutlined />
                  <br />
                  <span className="ml-2">Subir foto</span>
                </div>
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
