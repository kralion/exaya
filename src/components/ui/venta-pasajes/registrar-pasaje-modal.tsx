import React, { useState } from "react";
import { Modal, Tag, Typography } from "antd";
import style from "./frame.module.css";
import { Concert_One } from "next/font/google";
import Image from "next/image";
import { Title } from "@mantine/core";
import { DownloadOutlined } from "@ant-design/icons";
import type { IBoleto } from "@/interfaces";
import { viajesDiarios } from "@/data";
import Bus1Preview from "@/assets/images/bus-1-preview.jpg";
import "animate.css";
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

  const onFinish = (values: IBoleto) => {
    console.log(`El precio es ${values.precio}`);
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleSeatClick = (seatNumber: number) => {
    setOpenRegister(true);
  };
  const destinosUnicos = [
    ...new Set(viajesDiarios.map((viaje) => viaje.destino)),
  ];
  const origenesUnicos = [
    ...new Set(viajesDiarios.map((viaje) => viaje.origen)),
  ];

  return (
    <div>
      <Typography onClick={() => setOpen(true)}>Registrar</Typography>
      <Modal
        title={
          <div className="mb-7 flex justify-between  ">
            <p>
              <Title className="mb-3.5 flex flex-col" order={4}>
                Asientos del Bus
              </Title>
              <p className="flex gap-11  ">
                <Tag className="text-[10px] text-gray-500">
                  Margen Izquierdo
                </Tag>
                <Tag className="text-[10px] text-gray-500">Margen Derecho</Tag>
              </p>
            </p>
            <Title className="pr-10 text-center" order={5}>
              Vista previa del Bus
            </Title>
          </div>
        }
        className=""
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <div className="flex items-start justify-between  ">
          <div className="grid grid-flow-row grid-cols-4 rounded-lg border-2 border-zinc-200 bg-gradient-to-t from-zinc-400 to-zinc-100 p-5 ">
            <div className="col-span-4 flex justify-center gap-16 rounded-md border-2 border-slate-300 py-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/2072/2072317.png"
                width={50}
                height={50}
                title="Margen Izquierda"
                className="animate__animated animate__delay-1s animate__flip"
                alt="lateral"
              />
              <Image
                src="https://cdn-icons-png.flaticon.com/128/4981/4981785.png"
                width={50}
                height={50}
                title="Margen Derecha"
                className="animate__animated animate__flip animate__delay-1s"
                alt="lateral"
              />
            </div>

            {seats.map((seatNumber) => (
              <svg
                key={seatNumber}
                className="my-2 transform cursor-pointer  transition-all duration-100 hover:scale-105 active:scale-125 "
                onClick={() => handleSeatClick(seatNumber)}
                width="50"
                height="50"
                viewBox="0 0 24 22"
              >
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

          <Image
            src={Bus1Preview}
            width={700}
            height={500}
            alt="bus-preview"
            className="rounded-xl"
          />
        </div>
      </Modal>
      <Modal
        title={
          <Title className="text-left" order={4}>
            Registro de Pasajeros
            <hr className="mt-2 " />
          </Title>
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
          className="mt-10 "
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
            <Input placeholder="1-45" type="number" />
          </Form.Item>
          <Form.Item name="origen" label="Origen" rules={[{ required: true }]}>
            <Select placeholder="Donde va a subir el pasajero" allowClear>
              {origenesUnicos.map((origen) => (
                <Option key={origen} value={origen}>
                  {origen}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="destino"
            label="Destino"
            rules={[{ required: true }]}
          >
            <Select placeholder="Donde va a bajar el pasajero" allowClear>
              {destinosUnicos.map((destino) => (
                <Option key={destino} value={destino}>
                  {destino}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="nombres"
            label="Nombres"
            rules={[{ required: true }]}
          >
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
            <div className="mt-5 flex justify-between">
              <Button htmlType="button" onClick={onReset}>
                Limpiar
              </Button>
              <button
                style={{
                  width: 150,
                }}
                className={style.button}
                type="submit"
              >
                Registrar
              </button>
              <ImprimirNotification
                printerButton={
                  <Tag
                    color="green"
                    icon={<DownloadOutlined />}
                    className="flex h-8 cursor-pointer items-center  justify-center  hover:opacity-80 "
                    title="Se va a imprimir automaticamente"
                  >
                    Imprimir
                  </Tag>
                }
              />
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
