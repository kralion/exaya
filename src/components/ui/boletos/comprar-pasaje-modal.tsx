import { api } from "@/utils/api";
import {
  Button,
  Divider,
  Form,
  Image,
  Input,
  Modal,
  Result,
  Space,
  Typography,
  message,
} from "antd";
import { customAlphabet } from "nanoid";
import { Concert_One } from "next/font/google";
import React, { useState } from "react";
import { FaSquare } from "react-icons/fa";
import type { z } from "zod";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { boletoSchema } from "@/schemas";
import { createWhatsappMessage } from "@/utils/whatsapp";
import { useMessageContext } from "@/context/MessageContext";
const concertOne = Concert_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const { Title, Text } = Typography;

export const ComprarPasajeModal = ({ viajeId }: { viajeId: string }) => {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [pasajeroDNI, setPasajeroDNI] = useState<string>("");
  const [openRegister, setOpenRegister] = useState(false);
  const { openMessage } = useMessageContext();
  const [form] = Form.useForm();
  const [selectedSeat, setSelectedSeat] = useState<number>(1);
  const { data: viaje } = api.viajes.getViajeById.useQuery({
    id: viajeId,
  });

  const { data: boletosVendidos, refetch: refetchBoletosVendidos } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "PAGADO",
      viajeId,
    });

  const { data: boletosReservados, refetch: refetchBoletosReservados } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "RESERVADO",
      viajeId,
    });
  const { mutateAsync: createBoletoMutation, isLoading } =
    api.boletos.createBoleto.useMutation();
  const selectedBoleto = viaje?.response?.boletos.find(
    (boleto) => boleto.asiento === selectedSeat
  );

  const { data: reniecResponse, error: errorValidacionDNI } =
    api.clientes.validateDni.useQuery(
      {
        dni: pasajeroDNI,
      },
      {
        enabled: pasajeroDNI?.length === 8,
      }
    );
  const seats = Array.from(
    { length: viaje?.response?.bus.asientos || 40 },
    (_, i) => i + 1
  );

  const warning = async () => {
    await messageApi.open({
      type: "warning",
      content: "Este asiento está reservado",
    });
  };

  async function onFinish(values: z.infer<typeof boletoSchema>) {
    const n = 1000;
    const nanoid = customAlphabet("0123456789", Math.ceil(Math.log10(n + 1)));

    let num;
    do {
      num = parseInt(nanoid(), 10);
    } while (num > n);
    const apellidosCliente = `${reniecResponse?.data?.apellidoPaterno ?? ""} ${
      reniecResponse?.data?.apellidoMaterno ?? ""
    }`;

    if (!apellidosCliente) {
      return null;
    }
    try {
      await createBoletoMutation(
        {
          ...values,
          estado: "RESERVADO",
          precio: viaje?.response?.tarifas[0] ?? 20,
          metodoPago: "Tarjeta",
          destino: viaje?.response?.ruta.ciudadDestino ?? "",
          usuarioId: "clxq3f0i70001fn9x87gx9wj3",
          codigo: `B005-000${num.toString().padStart(3, "0")}`,
          pasajeroDni: values.pasajeroDni.toString(),
          asiento: selectedSeat,
          viajeId,
          pasajeroNombres: reniecResponse?.data?.nombres,
          pasajeroApellidos: apellidosCliente,
        },
        {
          onSuccess: (response) => {
            openMessage({
              content: response.message,
              type: "success",
              duration: 3,
            });
            form.resetFields();
            setPasajeroDNI("");
            setOpenRegister(false);
          },
          onError: (error) => {
            openMessage({
              content: error.message,
              type: "error",
              duration: 3,
            });
          },
        }
      );
      const url = createWhatsappMessage({
        origin: viaje?.response?.ruta.ciudadOrigen ?? "",
        destination: viaje?.response?.ruta.ciudadDestino ?? "",
        date: viaje?.response?.salida
          ? new Date(viaje.response.salida)
          : new Date(),
        dni: values.pasajeroDni.toString(),
        seatNumber: selectedSeat,
      });
      window.open(url, "_blank");
    } catch (error) {
      console.log("INTERNAL ERROR", error);
    }

    await refetchBoletosReservados();
    await refetchBoletosVendidos();
  }

  const handleSeatClick = (seatNumber: number) => {
    setSelectedSeat(seatNumber);
    if (
      boletosReservados?.response?.some(
        (boleto) => boleto.asiento === seatNumber
      )
    ) {
      return warning();
    }
    setOpenRegister(true);
  };

  return (
    <div className="hidden lg:block">
      {contextHolder}
      <Button type="primary" onClick={() => setOpen(true)}>
        Ver Asientos
      </Button>
      <Modal
        title={
          <div>
            <Title level={4}>Distribución de Asientos</Title>
            <Divider className="mt-0" />
          </div>
        }
        centered
        open={open}
        onCancel={() => {
          setPasajeroDNI("");
          setOpen(false);
        }}
        footer={null}
        width={660}
      >
        <div>
          <Space className=" items-start gap-4">
            <div className=" flex w-[300px] flex-wrap">
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
                    onClick={() => void handleSeatClick(seatNumber)}
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
                          : "fill-white stroke-slate-500 dark:fill-white/50 dark:stroke-zinc-400"
                      }
                      d="M7.38,15a1,1,0,0,1,.9.55A2.61,2.61,0,0,0,10.62,17h2.94a2.61,2.61,0,0,0,2.34-1.45,1,1,0,0,1,.9-.55h1.62L19,8.68a1,1,0,0,0-.55-1L17.06,7l-.81-3.24a1,1,0,0,0-1-.76H8.72a1,1,0,0,0-1,.76L6.94,7l-1.39.69a1,1,0,0,0-.55,1L5.58,15Z"
                    ></path>

                    <path
                      className="fill-sky-200 stroke-sky-600"
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
            <Space direction="vertical" className="gap-4 py-2">
              <Image
                fallback="data:image/png;base64,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"
                src={viaje?.response?.bus.foto}
                style={{
                  borderRadius: 10,
                }}
                alt="bus"
                width={300}
              />

              <Space direction="horizontal" className="ml-3 flex gap-4">
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
                <Text
                  className="font-normal"
                  rootClassName="flex gap-1 items-center"
                >
                  <FaSquare className="rounded-md text-slate-400" size={15} />
                  Disponible
                </Text>
              </Space>
            </Space>
          </Space>
        </div>
      </Modal>
      <Modal
        title={
          <Title className="text-left" level={4}>
            <div className="flex items-start gap-20">
              <h3>Asiento {` ${selectedSeat}`}</h3>
            </div>
          </Title>
        }
        centered
        open={openRegister}
        onCancel={() => {
          setOpenRegister(false);
          form.resetFields();
          setPasajeroDNI("");
        }}
        width={selectedBoleto?.estado === "PAGADO" ? 500 : 370}
        footer={null}
      >
        {selectedBoleto?.estado === "PAGADO" ? (
          <Result
            status="error"
            title="Asiento Ocupado"
            subTitle="El asiento seleccionado está ocupado, por favor elija otro."
          />
        ) : (
          <Form
            layout="vertical"
            form={form}
            name="registrar-pasaje"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onFinish={onFinish}
            style={{ width: 320 }}
          >
            <Form.Item
              name="pasajeroDni"
              label="DNI Pasajero"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el DNI del pasajero",
                },
                {
                  pattern: /^[0-9]+(\.[0-9]+)?$/,
                  message: "Solo valores numéricos",
                },
              ]}
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
                  <p>
                    {reniecResponse.data?.nombres}{" "}
                    {reniecResponse.data?.apellidoPaterno}{" "}
                    {reniecResponse.data?.apellidoMaterno}
                  </p>
                ) : (
                  ""
                )
              }
            >
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const dni = event.target.value;
                  setPasajeroDNI(dni);
                }}
                style={{
                  width: 320,
                }}
                value={pasajeroDNI}
                type="number"
                maxLength={8}
                className="w-full"
              />
            </Form.Item>
            <Space className="flex justify-end">
              <Button
                type="primary"
                loading={isLoading}
                disabled={reniecResponse?.status === "error"}
                htmlType="submit"
              >
                Comprar
              </Button>
            </Space>
          </Form>
        )}
      </Modal>
    </div>
  );
};
