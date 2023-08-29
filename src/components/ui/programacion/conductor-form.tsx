import { PhoneOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Space,
  Typography,
  Upload,
} from "antd";
import type { CascaderProps } from "antd/lib/cascader";
import type { RadioChangeEvent } from "antd/lib/radio";
import { useState } from "react";
import styles from "./frame.module.css";
type Props = {
  activator: string;
};

interface LicenseNodeType {
  value: number;
  label: string;
  children?: LicenseNodeType[];
}
interface DocumentsNodeType {
  value: string;
  label: string;
  children?: DocumentsNodeType[];
}

const tiposLicencia: CascaderProps<LicenseNodeType>["options"] = [
  {
    value: 0,
    label: "A II-A",
  },
  {
    value: 1,
    label: "A II-B",
  },
  {
    value: 2,
    label: "A II-C",
  },
];
const estadosDocumentarios: CascaderProps<DocumentsNodeType>["options"] = [
  {
    value: "Documentos Actualizados",
    label: "Documentos Actualizados",
  },
  {
    value: "En Trámite",
    label: "En Trámite",
  },
  {
    value: "Rechazado",
    label: "Rechazado",
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

import { useConductorContext } from "@/context/ConductorContext";
import type { IConductor } from "@/interfaces";
import { Title } from "@mantine/core";
import style from "./frame.module.css";
export function ConductoresForm({ activator }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePicList, setProfilePicList] = useState([]);
  const [busPicList, setBusPicList] = useState([]);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    alert("radio checked", e.target.value);
    setValue(e.target.value);
  };
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

  const onFinish = (values: IConductor) => {
    handleAddConductor(values);
    form.resetFields();
  };
  const onFinishFailed = () => {
    console.log("Falló el registro");
  };
  const profilePicFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const busPicFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const handleProfilePicFileChange = (newProfilePicFileList) => {
    setProfilePicList(newProfilePicFileList);
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
        title={
          <p className="mb-7">
            <Title order={3}>Agregar Conductor</Title>
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
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
          scrollToFirstError
          className="grid grid-flow-row grid-cols-2 gap-x-3.5 "
        >
          <Form.Item
            name="dni"
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
            <Input type="number" placeholder="12345678" />
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
            validateStatus="validating"
            help="Este campo será validado ..."
          >
            <Input placeholder="Roberto Quiroz" />
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
            validateStatus="validating"
            help="Este campo será validado ..."
          >
            <Input placeholder="Quiroz" />
          </Form.Item>

          <Form.Item
            name="telefono"
            label="N° Celular"
            rules={[{ required: true, message: "Verifica este campo" }]}
          >
            <InputNumber
              controls={false}
              maxLength={9}
              addonBefore={<PhoneOutlined title="N° celular" />}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="licencia_conducir"
            label="Licencia"
            rules={[
              {
                required: true,
                message: "Ingresa la licencia del conductor",
                whitespace: true,
              },
            ]}
            validateStatus="validating"
            help="Este campo será validado ..."
          >
            <Input placeholder="LC15ASF45" />
          </Form.Item>

          <Form.Item
            name="nivel"
            label="Nivel de Licencia"
            rules={[
              {
                type: "array",
                required: true,
                message: "Selecciona el Tipo de Licencia",
              },
            ]}
          >
            <Cascader placeholder="A II-B" options={tiposLicencia} />
          </Form.Item>

          <div className="flex">
            <Form.Item
              label="Foto de Perfil"
              name="foto_perfil"
              getValueFromEvent={profilePicFile}
              valuePropName="fileList"
            >
              <Upload
                action="/upload.do"
                listType="picture-card"
                fileList={profilePicList}
                beforeUpload={() => false}
                showUploadList={{
                  showRemoveIcon: true,
                  showPreviewIcon: false,
                }}
                onChange={({ fileList: newProfilePicFileList }) =>
                  handleProfilePicFileChange(newProfilePicFileList)
                }
              >
                {profilePicList.length === 0 && (
                  <div>
                    <UploadOutlined />
                    <br />
                    <span className="ml-2">Subir foto</span>
                  </div>
                )}
              </Upload>
            </Form.Item>
            <Form.Item
              label="Foto del Bus"
              name="foto_bus"
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
          </div>
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
              <Cascader
                placeholder="Documentos Actualizados"
                options={estadosDocumentarios}
              />
            </Form.Item>
            <Form.Item
              name="disponibilidad"
              label="Disponibilidad"
              tooltip="Esta opción permite habilitar o deshabilitar al conductor"
              rules={[
                { required: true, message: "Disponibilidad del conductor" },
              ]}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={false}>No</Radio>
                <Radio value={true}>Sí</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Space className="mt-10">
            <button className={styles.basicButton} type="submit">
              Registrar
            </button>

            <Button danger htmlType="reset" onClick={() => form.resetFields()}>
              Cancelar
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
}