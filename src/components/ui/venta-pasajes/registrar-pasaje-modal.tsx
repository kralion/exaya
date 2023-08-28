import React, { useState } from "react";
import { Modal } from "antd";
import style from "./frame.module.css";
import { Concert_One } from "next/font/google";
import Image from "next/image";
import busPreview from "@/assets/bus-preview.png";
import { Title } from "@mantine/core";
import { SnippetsOutlined } from "@ant-design/icons";

const concertOne = Concert_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
import { Button, Form, Input, Select } from "antd";
import ImprimirNotification from "../notification";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const seats = Array.from({ length: 50 }, (_, i) => i + 1);

export const RegistrarPasajeModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [form] = Form.useForm();

  const onPriceChange = (value: string) => {
    alert(`El precio es ${value}`);
  };

  const onFinish = (values: any) => {
    alert(`El precio es ${values.precio}, para ${values.nombre}`);
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleSeatClick = (seatNumber: number) => {
    setOpenRegister(true);
  };

  return (
    <div>
      <button className={style.button} onClick={() => setOpen(true)}>
        <span className="px-3.5"> Registrar</span>
      </button>
      <Modal
        title="Registro de Asientos"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <div className="flex items-start justify-center  gap-7">
          <div className=" mt-10 grid w-1/3 grid-flow-row grid-cols-4 ">
            {seats.map((seatNumber) => (
              <svg
                key={seatNumber}
                className="my-2 transform cursor-pointer  transition-all duration-100 hover:scale-105 active:scale-125 "
                onClick={() => handleSeatClick(seatNumber)}
                width="50"
                height="50"
                viewBox="0 0 24 22"
              >
                {/* Inserta el SVG del asiento aquí */}
                <path
                  className="fill-slate-100 stroke-black "
                  d="M7.38,15a1,1,0,0,1,.9.55A2.61,2.61,0,0,0,10.62,17h2.94a2.61,2.61,0,0,0,2.34-1.45,1,1,0,0,1,.9-.55h1.62L19,8.68a1,1,0,0,0-.55-1L17.06,7l-.81-3.24a1,1,0,0,0-1-.76H8.72a1,1,0,0,0-1,.76L6.94,7l-1.39.69a1,1,0,0,0-.55,1L5.58,15Z"
                ></path>
                <path
                  className="fill-amber-200 stroke-amber-600"
                  d="M16.8,15H19a1,1,0,0,1,1,1.16l-.53,3.17a2,2,0,0,1-2,1.67h-11a2,2,0,0,1-2-1.67L4,16.16A1,1,0,0,1,5,15H7.38a1,1,0,0,1,.9.55h0A2.61,2.61,0,0,0,10.62,17h2.94a2.61,2.61,0,0,0,2.34-1.45h0A1,1,0,0,1,16.8,15Z"
                ></path>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="6"
                  className={`text-[8px] font-bold text-red-500 dark:text-white  ${concertOne.className}`}
                >
                  {seatNumber}
                </text>
              </svg>
            ))}
          </div>
          <div className="space-y-3.5">
            <Title className="text-center text-slate-400" order={5}>
              Vista previa del Bus
            </Title>
            <Image
              src={busPreview}
              width={500}
              height={500}
              alt="bus-preview"
            />
            <Title className="text-center text-slate-400" order={5}>
              Parte Delantera
            </Title>
            <Image src="" width={500} height={500} alt="front-preview-bus" />
          </div>
        </div>
      </Modal>
      <Modal
        title={
          <div className="flex items-center gap-4">
            <Title className="text-left" order={4}>
              Registro de Pasajeros
            </Title>
            <ImprimirNotification
              printerButton={<SnippetsOutlined className="animate-bounce" />}
            />
          </div>
        }
        centered
        open={openRegister}
        onCancel={() => setOpenRegister(false)}
        width={700}
        footer={null}
      >
        <Form
          {...layout}
          form={form}
          className="mt-10"
          name="control-hooks"
          onFinish={onFinish}
          style={{ width: 500 }}
        >
          <Form.Item
            name="dni"
            label="DNI"
            rules={[
              { required: true },
              { min: 8, message: "El DNI debe tener 8 dígitos" },
              { max: 8, message: "El DNI debe tener 8 dígitos" },
            ]}
            validateStatus="validating"
            help="La informacion está siendo validada..."
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="asiento"
            label="Asiento"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="origen" label="Origen" rules={[{ required: true }]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="destino"
            label="Destino"
            rules={[{ required: true }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item name="nombres" label="Nombre" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="apellidos"
            label="Apellidos"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="precio" label="Precio" rules={[{ required: true }]}>
            <Select
              placeholder="Selecciona un precio"
              onChange={onPriceChange}
              allowClear
            >
              <Option value="30">30</Option>
              <Option value="45">45</Option>
              <Option value="otro">Otro</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.precio !== currentValues.precio
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("precio") === "otro" ? (
                <Form.Item
                  name="precioCustomizado"
                  label="Precio Customizado"
                  rules={[{ required: true }]}
                >
                  <Input type="number" />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <div className="mt-10 flex justify-between">
              <Button className="w-40" htmlType="button" onClick={onReset}>
                Limpiar
              </Button>
              <button
                style={{
                  width: 160,
                }}
                className={style.button}
                type="submit"
              >
                Registrar
              </button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
7;
