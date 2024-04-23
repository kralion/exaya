import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
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
import { FaSquare } from "react-icons/fa";
import type { z } from "zod";
import { useSession } from "next-auth/react";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { boletoSchema } from "@/schemas";
const concertOne = Concert_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const { Title, Text } = Typography;

const { Option } = Select;

export const RegistrarPasajeModal = ({ viajeId }: { viajeId: string }) => {
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [form] = Form.useForm();
  const [selectedSeat, setSelectedSeat] = useState<number>(1);
  const { data: viaje } = api.viajes.getViajeById.useQuery({
    id: viajeId,
  });
  const { data: session } = useSession();
  const { openNotification } = useNotification();
  const [queryEnabled, setQueryEnabled] = useState(false);
  const { data: boletosVendidos, refetch: refetchBoletosVendidos } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "PAGADO",
      viajeId,
    });
  const { data: boletosReservados } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "RESERVADO",
      viajeId,
    });
  const { mutateAsync: createBoletoMutation, isLoading } =
    api.boletos.createBoleto.useMutation();
  const { data: reniecResponse, error: errorValidacionDNI } =
    api.clientes.validateDni.useQuery(
      {
        dni: form.getFieldValue("pasajeroDni") as string,
      },
      {
        enabled: queryEnabled,
      }
    );
  const seats = Array.from(
    { length: viaje?.response?.bus.asientos || 40 },
    (_, i) => i + 1
  );

  async function onFinish(values: z.infer<typeof boletoSchema>) {
    const apellidosCliente = `${reniecResponse?.data?.apellidoPaterno ?? ""} ${
      reniecResponse?.data?.apellidoMaterno ?? ""
    }`;

    if (!apellidosCliente) {
      return null;
    }
    await createBoletoMutation(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        serie: session?.user.serieBoleto,
        telefonoCliente: values.telefonoCliente.toString(),
        pasajeroDni: values.pasajeroDni.toString(),
        asiento: selectedSeat,
        estado: "PAGADO",
        viajeId,
        pasajeroNombres: reniecResponse?.data?.nombres,
        pasajeroApellidos: apellidosCliente,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (response) => {
          openNotification({
            message: "Boleto Registrado",
            description: response.message,
            type: "success",
            placement: "topRight",
          });
          await refetchBoletosVendidos();
        },
        onError: (error) => {
          openNotification({
            message: "Error en la Operación",
            description: error.message,
            type: "error",
            placement: "topRight",
          });
        },
      }
    );
    form.resetFields();
    setOpenRegister(false);
  }

  const handleSeatClick = (seatNumber: number) => {
    setSelectedSeat(seatNumber);
    setOpenRegister(true);
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
                  {viaje?.response?.bus.placa}
                </Tag>
              </span>
            </div>
            <Space direction="horizontal" className="flex gap-4">
              <Text
                className="font-normal"
                rootClassName="flex gap-1 items-center"
                type="success"
              >
                <FaSquare className="rounded-md text-green-500" size={15} />
                Vendido
              </Text>
              <Text
                className="font-normal"
                rootClassName="flex gap-1 items-center"
                type="warning"
              >
                <FaSquare className="rounded-md text-yellow-500" size={15} />
                Reservado
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
                        boletosReservados?.response?.some(
                          (boleto) => boleto.asiento === seatNumber
                        )
                          ? "fill-yellow-300 stroke-yellow-600"
                          : boletosVendidos?.response?.some(
                              (boleto) => boleto.asiento === seatNumber
                            )
                          ? "fill-green-300 stroke-green-600"
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
            <Text type="secondary">
              Vendidos: {boletosVendidos?.response?.length} de{" "}
              {viaje?.response?.bus.asientos}
            </Text>
            <Text type="secondary">
              Reservados: {boletosReservados?.response?.length} de{" "}
              {viaje?.response?.bus.asientos}
            </Text>
          </Space>
        </div>
      </Modal>
      <Modal
        title={
          <Title className="text-left" level={4}>
            <div className="flex items-center gap-4 pr-5">
              <h3>Registro de Boleto</h3>
              <div>
                <svg
                  key={selectedSeat}
                  width="40"
                  height="40"
                  viewBox="0 2 24 22"
                >
                  <path
                    className={
                      boletosReservados?.response?.some(
                        (boleto) => boleto.asiento === selectedSeat
                      )
                        ? "fill-yellow-300 stroke-yellow-600"
                        : boletosVendidos?.response?.some(
                            (boleto) => boleto.asiento === selectedSeat
                          )
                        ? "fill-green-300 stroke-green-600"
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
                    {selectedSeat}
                  </text>
                </svg>
              </div>
            </div>
            <hr className="mt-2 " />
          </Title>
        }
        centered
        open={openRegister}
        onCancel={() => {
          setOpenRegister(false);
          form.resetFields();
        }}
        width={550}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          name="registrar-pasaje"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onFinish={onFinish}
          style={{ width: 500 }}
        >
          <Space>
            <Form.Item
              name="pasajeroDni"
              label="DNI"
              tooltip="DNI del pasajero, esta información es validada con la RENIEC "
              rules={[{ required: true }]}
              validateStatus={
                errorValidacionDNI
                  ? "error"
                  : reniecResponse
                  ? "success"
                  : "validating"
              }
              help={
                form.getFieldValue("pasajeroDni") ===
                "" ? null : reniecResponse?.status === "error" ? (
                  "El DNI no existe"
                ) : reniecResponse?.status === "success" ? (
                  <p className="text-green-500">
                    {reniecResponse.data?.nombres}{" "}
                    {reniecResponse.data?.apellidoPaterno}{" "}
                    {reniecResponse.data?.apellidoMaterno}
                  </p>
                ) : (
                  ""
                )
              }
            >
              <InputNumber
                onChange={(value: string | null) => {
                  const dni = JSON.stringify(value);
                  form.setFieldValue("pasajeroDni", dni);
                  setQueryEnabled(dni.length === 8);
                }}
                style={{
                  width: 310,
                }}
                type="number"
                maxLength={8}
                className="w-full"
                controls={false}
              />
            </Form.Item>
            <Form.Item
              name="telefonoCliente"
              label="Teléfono"
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Input
                style={{
                  width: 110,
                }}
                maxLength={9}
                type="number"
              />
            </Form.Item>
            <Form.Item
              name="precio"
              label="Precio"
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Select placeholder="40" allowClear>
                {viaje?.response?.tarifas.map(
                  (tarifa: number, index: number) => (
                    <Option key={index} value={tarifa}>
                      {tarifa}
                    </Option>
                  )
                )}
              </Select>
            </Form.Item>
          </Space>
          <Form.Item name="equipaje" label="Equipaje">
            <Input.TextArea placeholder="Una bolsa roja, una mochila negra, 2 cajas de carton ..." />
          </Form.Item>
          <Space className="flex justify-end">
            <Button
              onClick={() => {
                setOpenRegister(false);
                form.resetFields();
              }}
              danger
              type="text"
            >
              Cancelar
            </Button>
            <Button type="default">Reservar</Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "#52c41a",
              }}
              className="duration-75 hover:opacity-80 active:opacity-100"
            >
              Imprimir
            </Button>

            <Button
              htmlType="submit"
              type="primary"
              loading={isLoading}
              disabled={
                reniecResponse?.status === "error" ||
                boletosReservados?.response?.some(
                  (boleto) => boleto.asiento === selectedSeat
                ) ||
                boletosVendidos?.response?.some(
                  (boleto) => boleto.asiento === selectedSeat
                )
              }
            >
              Registrar
            </Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
};
