import Bus1Preview from "@/assets/images/bus-1-preview.jpg";
import { useNotification } from "@/context/NotificationContext";
import { viajesDiarios } from "@/data";
import type { IBoleto } from "@/interfaces";
import { Title } from "@mantine/core";
import "animate.css";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import PassengerAsset from "@/assets/images/passenger.png";
import { Concert_One } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { LuDelete, LuPrinter } from "react-icons/lu";
import style from "./frame.module.css";
const concertOne = Concert_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const { Option } = Select;

const seats = Array.from({ length: 50 }, (_, i) => i + 1);

export const RegistrarPasajeModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [form] = Form.useForm();

  const onPriceChange = (value: string) => {
    alert(`El precio es ${value}`);
  };

  const onFinish = (values: IBoleto) => {
    try {
      form.getFieldsValue.length > 0
        ? (setDisabledPrint(false), console.log(values.id))
        : setDisabledPrint(true);
    } catch (error) {}
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleSeatClick = (seatNumber: number) => {
    setOpenRegister(true);
  };

  const [disabledPrint, setDisabledPrint] = useState(true);
  const destinosUnicos = [
    ...new Set(viajesDiarios.map((viaje) => viaje.destino)),
  ];
  const origenesUnicos = [
    ...new Set(viajesDiarios.map((viaje) => viaje.origen)),
  ];
  const { openNotification } = useNotification();

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
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <div className="flex items-start justify-between  ">
          <div className="grid grid-flow-row grid-cols-4 rounded-lg border-2 border-zinc-200 p-5 ">
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
            Registro de Boleto
            <hr className="mt-2 " />
          </Title>
        }
        centered
        open={openRegister}
        onCancel={() => setOpenRegister(false)}
        width={500}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          className="mt-7"
          onFinish={onFinish}
          style={{ width: 450 }}
        >
          <Space direction="horizontal" className="flex gap-5">
            <Form.Item
              style={{
                width: 315,
              }}
              name="dni"
              label="DNI"
              tooltip="DNI del pasajero, esta información es validada con la RENIEC "
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
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Input placeholder="1-45" type="number" />
            </Form.Item>
          </Space>
          <Space direction="horizontal" className="flex gap-5">
            <Form.Item
              name="origen"
              style={{
                width: 215,
              }}
              label="Origen"
              rules={[{ required: true, message: "Selecciona" }]}
            >
              <Select placeholder="Huancayo" allowClear>
                {origenesUnicos.map((origen) => (
                  <Option key={origen} value={origen}>
                    {origen}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="destino"
              style={{
                width: 215,
              }}
              label="Destino"
              rules={[{ required: true, message: "Selecciona" }]}
            >
              <Select placeholder="Huancayo" allowClear>
                {destinosUnicos.map((destino) => (
                  <Option key={destino} value={destino}>
                    {destino}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Space>

          <Form.Item
            name="precio"
            label="Precio"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <Select placeholder="40" onChange={onPriceChange} allowClear>
              <Option value="30">30</Option>
              <Option value="45">45</Option>
            </Select>
          </Form.Item>
          <Form.Item
            tooltip="Describe los equipajes que lleva el pasajero"
            name="equipajes"
            label="Equipajes"
          >
            <Input.TextArea
              autoSize
              placeholder="Una bolsa roja, una mochila negra, 2 cajas de carton ..."
            />
          </Form.Item>
          <Image
            src={PassengerAsset}
            alt="logo"
            height={50}
            className=" drop-shadow-xl"
            width={150}
          />
          <Form.Item>
            <div className="mt-5 flex items-center justify-between">
              <button
                style={{
                  width: 150,
                }}
                className={style.button}
                type="submit"
              >
                Registrar
              </button>
              <div className=" flex gap-2">
                <Button
                  icon={<LuDelete className="text-red-500" size={25} />}
                  type="text"
                  htmlType="button"
                  onClick={onReset}
                />

                <Button
                  disabled={disabledPrint}
                  icon={
                    <LuPrinter
                      className={
                        disabledPrint ? "text-gray-500" : "text-green-500"
                      }
                      size={25}
                    />
                  }
                  title="Imprimir"
                  type="text"
                  onClick={() =>
                    openNotification({
                      placement: "topRight",
                      message: "Operacion Exitosa",
                      description: "Redireccionando a Impresion",
                      type: "success",
                    })
                  }
                />
              </div>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
