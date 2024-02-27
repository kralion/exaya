import PassengerAsset from "@/assets/passenger.png";
import { useNotification } from "@/context/NotificationContext";
import type { IBoleto } from "@/interfaces";
import { FaSquare } from "react-icons/fa";
import { api } from "@/utils/api";
import "animate.css";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import { Concert_One } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { LuDelete, LuPrinter } from "react-icons/lu";
const concertOne = Concert_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const { Title, Text } = Typography;

const { Option } = Select;

const seats = Array.from({ length: 40 }, (_, i) => i + 1);
type ViajeDetailsProps = {
  viajeBusPlaca: string;
  viajeId: string;
};

export const RegistrarPasajeModal = ({
  viajeId,
  viajeBusPlaca,
}: ViajeDetailsProps) => {
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [form] = Form.useForm();
  const [selectedSeat, setSelectedSeat] = useState<number>(1);
  const INITIAL_SOLDS_SEATS = [12, 13, 15, 27, 35, 1, 3, 27];
  const BOOKED_SEATS = [4, 5, 6, 9, 11, 16, 38];

  const [soldSeats, setSoldSeats] = useState<number[]>(INITIAL_SOLDS_SEATS);
  const [bookedSeats, setBookedSeats] = useState<number[]>(BOOKED_SEATS);
  const { openNotification } = useNotification();
  const [queryEnabled, setQueryEnabled] = useState(false);

  const { data: informacionCliente } = api.clientes.validateDni.useQuery(
    {
      dni: form.getFieldValue("dni") as string,
    },
    {
      enabled: queryEnabled,
    }
  );

  let lastCodigoNumber = 0; // This should be stored persistently

  function generateNextCodigo() {
    lastCodigoNumber += 1;
    const numberString = String(lastCodigoNumber).padStart(5, "0");
    return `B003-${numberString}`;
  }
  const { isLoading, mutate: boletoMutation } =
    api.boletos.createBoletos.useMutation();
  const onFinish = (values: IBoleto) => {
    const codigo = generateNextCodigo();
    const boletoDataValidated = {
      nombre: informacionCliente?.data?.nombres,
      apellidoPaterno: informacionCliente?.data?.apellidoPaterno,
      apellidoMaterno: informacionCliente?.data?.apellidoMaterno,
      dni: informacionCliente?.data?.dni,
      ...values,
      viajeId: viajeId,
      codigo: codigo,
      asiento: selectedSeat,
    };
    boletoMutation(boletoDataValidated);
    alert(
      JSON.stringify({
        ...boletoDataValidated,
        asiento: selectedSeat,
      })
    );
    openNotification({
      placement: "topRight",
      message: "Operacion Exitosa",
      description: "Boleto registrado correctamente",
      type: "success",
    });
    setSoldSeats([...soldSeats, values.asiento]);
    form.resetFields();
    setOpenRegister(false);
  };

  const handlePrintTicket = () => {
    openNotification({
      placement: "topRight",
      message: "Operacion Exitosa",
      description: "Redireccionando a Impresion",
      type: "success",
    });
  };

  const [disabledPrint, setDisabledPrint] = useState(true);

  const handleSeatClick = (seatNumber: number) => {
    setSelectedSeat(seatNumber);
    setOpenRegister(true);
  };

  const handleSeatBooking = () => {
    setDisabledPrint(false);
    alert("Asiento reservado");
  };

  return (
    <div>
      <Typography onClick={() => setOpen(true)}>Registrar</Typography>
      <Modal
        title={
          <div>
            <div className="flex gap-4">
              <Title level={4}>Distribución de Asientos</Title>
              <span>
                <Tag color="blue" className="px-3">
                  {viajeBusPlaca}
                </Tag>
              </span>
            </div>
            <Space direction="horizontal" className="flex gap-3">
              <Text
                className="font-normal"
                rootClassName="flex gap-1 items-center"
                type="success"
              >
                <FaSquare className="text-green-500" size={15} />
                Vendido
              </Text>
              <Text
                className="font-normal"
                rootClassName="flex gap-1 items-center"
                type="warning"
              >
                <FaSquare className="text-yellow-500" size={15} />
                Reservado
              </Text>
              <Text
                className="font-normal"
                rootClassName="flex gap-1 items-center"
                type="secondary"
              >
                <FaSquare size={15} />
                Disponible
              </Text>
            </Space>
            <Divider className="mb-4" />
          </div>
        }
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={900}
      >
        <div>
          <div className="flex items-center gap-4 ">
            <div className=" flex w-[330px] flex-wrap">
              {seats.map((seatNumber, index) => (
                <div
                  key={seatNumber}
                  className={`transform cursor-pointer transition-all duration-100 hover:scale-105 active:scale-125 ${
                    (index % 4 === 1 || index % 4 === 3) &&
                    index !== seats.length - 1
                      ? "mr-11"
                      : "mr-1"
                  }`}
                >
                  <svg
                    key={seatNumber}
                    onClick={() => handleSeatClick(seatNumber)}
                    width="50"
                    height="50"
                    viewBox="0 0 24 22"
                  >
                    <path
                      className={
                        soldSeats.includes(seatNumber)
                          ? "fill-green-300 stroke-green-600"
                          : bookedSeats.includes(seatNumber)
                          ? "fill-yellow-300 stroke-yellow-600"
                          : "fill-white stroke-slate-500"
                      }
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
                      className={`text-[7px] font-bold  ${concertOne.className}`}
                    >
                      {seatNumber}
                    </text>
                  </svg>
                </div>
              ))}
            </div>

            <Image
              src="https://img.freepik.com/free-vector/modern-city-bus-realistic-advertising-template-side-view-front-rear-white-background-isolated-vector-illustration_1284-19734.jpg?size=626&ext=jpg&ga=GA1.1.1405311743.1707842042&semt=sph"
              width={500}
              height={500}
              alt="bus-preview"
              className="rounded-xl"
            />
          </div>
          <Divider className="my-4" />
          <Space direction="horizontal" className="flex gap-3">
            <Text type="secondary">Vendidos: {soldSeats.length} de 40</Text>
            <Text type="secondary">Reservados: {bookedSeats.length} de 40</Text>
          </Space>
        </div>
      </Modal>
      <Modal
        title={
          <Title className="text-left" level={4}>
            <div className="flex justify-between pr-5">
              <h3>Registro de Boleto</h3>
              <div>
                {selectedSeat !== null && soldSeats.includes(selectedSeat) ? (
                  <Tag color="green-inverse" className="px-3 py-1">
                    Vendido
                  </Tag>
                ) : selectedSeat !== null &&
                  bookedSeats.includes(selectedSeat) ? (
                  <Tag color="yellow-inverse" className="px-3 py-1 text-black">
                    Reservado
                  </Tag>
                ) : (
                  ""
                )}
                <Tag className="px-3 py-1">Asiento {selectedSeat}</Tag>
              </div>
            </div>
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
          <Form.Item
            name="dni"
            label="DNI"
            tooltip="DNI del pasajero, esta información es validada con la RENIEC "
            rules={[{ required: true }]}
            validateStatus={
              form.getFieldValue("dni") === ""
                ? ""
                : informacionCliente?.status === "error"
                ? "error"
                : informacionCliente?.status === "success"
                ? "success"
                : "validating"
            }
            help={
              form.getFieldValue("dni") ===
              "" ? null : informacionCliente?.status === "error" ? (
                "El DNI no existe"
              ) : informacionCliente?.status === "success" ? (
                <p className="text-green-500">
                  {informacionCliente?.data?.nombres}{" "}
                  {informacionCliente?.data?.apellidoPaterno}{" "}
                  {informacionCliente?.data?.apellidoMaterno}
                </p>
              ) : (
                "Ingrese el los 8 digitos del DNI"
              )
            }
          >
            <InputNumber
              onChange={(value: string | null) => {
                const dni = String(value);
                form.setFieldValue("dni", dni);
                setQueryEnabled(dni.length === 8);
              }}
              type="number"
              className="w-full"
              controls={false}
            />
          </Form.Item>

          <Space direction="horizontal" className="flex gap-5">
            <Form.Item
              name="precio"
              label="Precio"
              style={{
                width: 215,
              }}
              rules={[{ required: true, message: "Selecciona el precio" }]}
            >
              <Select placeholder="40" allowClear>
                <Option value="30">30</Option>
                <Option value="45">45</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="telefono"
              label="Telefono"
              tooltip="Telefono del pasajero para contactarlo "
              rules={[{ required: true, message: "Ingresa el teléfono" }]}
            >
              <InputNumber
                style={{
                  width: 215,
                }}
                type="number"
                controls={false}
              />
            </Form.Item>
          </Space>
          <Form.Item
            tooltip="Describe los equipajes que lleva el pasajero"
            name="equipajes"
            label="Equipajes"
          >
            <Input.TextArea placeholder="Una bolsa roja, una mochila negra, 2 cajas de carton ..." />
          </Form.Item>
          <div className="flex justify-center">
            <Image
              src={PassengerAsset}
              alt="logo"
              height={70}
              className="  drop-shadow-xl "
              width={250}
            />
          </div>

          <Form.Item>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-3">
                <Button
                  htmlType="submit"
                  loading={isLoading}
                  disabled={
                    selectedSeat === null ||
                    soldSeats.includes(selectedSeat) ||
                    bookedSeats.includes(selectedSeat) ||
                    informacionCliente?.status === "error"
                  }
                >
                  Registrar
                </Button>

                <Button
                  type="default"
                  htmlType="button"
                  onClick={handleSeatBooking}
                >
                  Reservar
                </Button>
              </div>
              <div className=" flex gap-2">
                <Button
                  className="rounded-full"
                  icon={<LuDelete className=" p-0.5 text-red-500" size={25} />}
                  type="text"
                  htmlType="button"
                  onClick={() => {
                    form.resetFields();
                  }}
                />

                <Button
                  disabled={disabledPrint}
                  className="rounded-full bg-green-200 "
                  icon={
                    <LuPrinter
                      className={
                        disabledPrint
                          ? "text-gray-500"
                          : "rounded-full p-0.5  text-green-500"
                      }
                      size={25}
                    />
                  }
                  title="Imprimir"
                  type="text"
                  onClick={handlePrintTicket}
                />
              </div>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
