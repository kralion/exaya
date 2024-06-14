import TravelTicketPrint from "@/components/travel-ticket";
import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import {
  Button,
  Divider,
  Form,
  Image,
  Input,
  Modal,
  Popconfirm,
  Radio,
  Select,
  Space,
  Steps,
  Typography,
} from "antd";
import { useSession } from "next-auth/react";
import { Concert_One } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { FaSquare } from "react-icons/fa";
import type { z } from "zod";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { boletoSchema } from "@/schemas";
import { useReactToPrint } from "react-to-print";
const concertOne = Concert_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const { Title, Text } = Typography;
type BoletoEstado = "DISPONIBLE" | "RESERVADO" | "PAGADO";

export const RegistrarPasajeModal = ({ viajeId }: { viajeId: string }) => {
  const [open, setOpen] = useState(false);
  const [print, setPrint] = useState(false);
  const { openMessage } = useMessageContext();
  const [pasajeroDNI, setPasajeroDNI] = useState<string>("");
  const [openRegister, setOpenRegister] = useState(false);
  const [form] = Form.useForm();
  const [codigoCounter, setCodigoCounter] = useState<number>(0);
  const [selectedSeat, setSelectedSeat] = useState<number>(1);
  const { data: viaje, isLoading: isLoadingViaje } =
    api.viajes.getViajeById.useQuery({
      id: viajeId,
    });

  const { data: session } = useSession();
  const { data: sede, refetch: refetchSede } = api.sedes.getSedeById.useQuery({
    id: session?.user.sedeId ?? "",
  });
  const { data: boletosVendidos, refetch: refetchBoletosVendidos } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "PAGADO",
      viajeId,
    });

  const [boletoStatus, setBoletoStatus] = useState<BoletoEstado>("DISPONIBLE");
  const { data: boletosReservados, refetch: refetchBoletosReservados } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "RESERVADO",
      viajeId,
    });
  const { mutateAsync: createBoletoMutation, isLoading } =
    api.boletos.createBoleto.useMutation();
  const { mutateAsync: incrementBoletoCounter } =
    api.sedes.incrementBoletosCounterBySedeId.useMutation();
  const { mutateAsync: decreaseBoletoCounter } =
    api.sedes.decreaseContadorBoletosBySedeId.useMutation();
  const selectedBoleto = viaje?.response?.boletos.find(
    (boleto) => boleto.asiento === selectedSeat
  );
  const { data: boletosViaje, refetch: refetchBoletosViaje } =
    api.boletos.getBoletosByViaje.useQuery({
      viajeId,
    });

  const { data: boletoSingle } = api.boletos.getBoletosById.useQuery({
    id: selectedBoleto?.id as string,
  });

  const {
    mutateAsync: updateBoletoMutation,
    isLoading: isLoadingUpdateBoleto,
  } = api.boletos.updateBoletoById.useMutation();

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
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    mutateAsync: deleteBoletoMutation,
    isLoading: isLoadingDeleteBoleto,
  } = api.boletos.deleteBoletosById.useMutation();

  async function deleteBoleto(id: string) {
    await deleteBoletoMutation(
      { id },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });

          await refetchBoletosViaje();
          await refetchBoletosReservados();
          await refetchBoletosVendidos();
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
    await decreaseBoletoCounter({ id: sede?.response?.id ?? "" });
  }

  const printDocument = useReactToPrint({
    documentTitle: `Boleto de Viaje - Asiento ${selectedBoleto?.asiento ?? ""}`,
    content: () => ref.current,
    pageStyle: "@media print { .page-break { page-break-before: always; } }",
  });

  const handlePrint = () => {
    setPrint(true);
    printDocument();
  };

  async function createBoleto(values: z.infer<typeof boletoSchema>) {
    await incrementBoletoCounter({ id: sede?.response?.id ?? "" });
    await refetchSede();
    const codigoOperacion = `${sede?.response?.serieBoleto || "B001"}-${
      sede?.response?.contadorBoletos || 0
    }`;
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
        codigo: codigoOperacion,
        pasajeroDni: values.pasajeroDni.toString(),
        asiento: selectedSeat,
        estado: boletoStatus,
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
    form.resetFields();
    setPasajeroDNI("");
    setOpenRegister(false);
  }

  async function updateBoleto(values: z.infer<typeof boletoSchema>) {
    const codigoOperacion = `${sede?.response?.serieBoleto || "B001"}-${
      sede?.response?.contadorBoletos || 0
    }`;

    const apellidosCliente = `${reniecResponse?.data?.apellidoPaterno ?? ""} ${
      reniecResponse?.data?.apellidoMaterno ?? ""
    }`;
    if (!apellidosCliente) {
      return null;
    }
    await updateBoletoMutation(
      {
        ...values,
        id: selectedBoleto?.id as string,
        usuarioId: session?.user?.id as string,
        codigo: codigoOperacion,
        pasajeroDni: values.pasajeroDni.toString(),
        asiento: selectedSeat,
        estado: boletoStatus,
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
  }

  async function onFinish(values: z.infer<typeof boletoSchema>) {
    if (selectedBoleto) {
      await updateBoleto(values);
    } else {
      await createBoleto(values);
    }
    await refetchBoletosViaje();
    await refetchBoletosReservados();
    await refetchBoletosVendidos();
    setOpenRegister(false);
    form.resetFields();
    setPasajeroDNI("");
  }

  useEffect(() => {
    if (selectedBoleto?.id !== "") {
      form.setFieldsValue({
        pasajeroDni: boletoSingle?.response?.pasajeroDni,
        precio: boletoSingle?.response?.precio,
        estado: boletoSingle?.response?.estado,
        destino: boletoSingle?.response?.destino,
      });
    }
  }, [selectedBoleto?.id, form, boletoSingle?.response]);
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
                          : "fill-white stroke-slate-500 dark:fill-white/70 dark:stroke-zinc-400"
                      }
                      d="M7.38,15a1,1,0,0,1,.9.55A2.61,2.61,0,0,0,10.62,17h2.94a2.61,2.61,0,0,0,2.34-1.45,1,1,0,0,1,.9-.55h1.62L19,8.68a1,1,0,0,0-.55-1L17.06,7l-.81-3.24a1,1,0,0,0-1-.76H8.72a1,1,0,0,0-1,.76L6.94,7l-1.39.69a1,1,0,0,0-.55,1L5.58,15Z"
                    ></path>

                    <path
                      className={
                        boletosViaje?.response?.some(
                          (boleto) =>
                            boleto.asiento === seatNumber &&
                            sede?.response?.agencia === "Huanta"
                        )
                          ? "fill-purple-200 stroke-purple-600"
                          : boletosViaje?.response?.some(
                              (boleto) =>
                                boleto.asiento === seatNumber &&
                                sede?.response?.agencia === "Ayacucho"
                            )
                          ? "fill-cyan-200 stroke-cyan-600"
                          : boletosViaje?.response?.some(
                              (boleto) =>
                                boleto.asiento === seatNumber &&
                                sede?.response?.agencia === "Huancayo"
                            )
                          ? "fill-rose-200 stroke-rose-600"
                          : "fill-zinc-200 stroke-zinc-600"
                      }
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
              <Steps
                direction="vertical"
                className="mt-4"
                size="small"
                items={[
                  {
                    title: "Bus Cama",
                    status: `${
                      (viaje?.response?.bus.asientos ?? 0) > 40
                        ? "finish"
                        : "error"
                    }`,
                    description: "Indicador para asercion de bus cama",
                  },
                ]}
              />
              <Space direction="horizontal" className="ml-3 flex gap-4">
                <Text
                  className="font-normal"
                  rootClassName="flex gap-1 items-center"
                  type="success"
                >
                  <FaSquare className="rounded-md text-green-500" size={15} />
                  Vendidos: {boletosVendidos?.response?.length}
                </Text>
                <Text
                  className="font-normal"
                  rootClassName="flex gap-1 items-center"
                  type="warning"
                >
                  <FaSquare className="rounded-md text-yellow-500" size={15} />
                  Reservados: {boletosReservados?.response?.length}
                </Text>
              </Space>
              <Space direction="vertical" className="ml-3 mt-10">
                <Text
                  className="font-normal"
                  rootClassName="flex gap-1 items-center"
                >
                  <FaSquare className="rounded-md text-purple-500" size={15} />
                  Agencia Huanta
                </Text>
                <Text
                  className="font-normal"
                  rootClassName="flex gap-1 items-center"
                >
                  <FaSquare className="rounded-md text-cyan-500" size={15} />
                  Agencia Ayacucho
                </Text>
                <Text
                  className="font-normal"
                  rootClassName="flex gap-1 items-center"
                >
                  <FaSquare className="rounded-md text-rose-500" size={15} />
                  Agencia Huancayo
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
              <h3>
                Asiento <span className="ml-2 font-mono">{selectedSeat}</span>
              </h3>

              {selectedBoleto?.estado === "PAGADO" ? (
                <Space className="mr-8">
                  <Button type="primary" onClick={handlePrint}>
                    Imprimir
                  </Button>
                  <Popconfirm
                    okButtonProps={{
                      danger: true,
                    }}
                    title="Estás segur@ de eliminar este Boleto?"
                    okText="Sí"
                    cancelText="No"
                    onConfirm={
                      selectedBoleto
                        ? async () => {
                            await deleteBoleto(selectedBoleto?.id);
                            setOpenRegister(false);
                          }
                        : () => setOpenRegister(false)
                    }
                  >
                    <Button
                      loading={isLoadingDeleteBoleto}
                      danger
                      type="primary"
                    >
                      Eliminar
                    </Button>
                  </Popconfirm>
                </Space>
              ) : null}
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
        width={selectedBoleto?.estado === "PAGADO" ? 600 : 370}
        footer={null}
      >
        {selectedBoleto?.estado === "PAGADO" ? (
          <TravelTicketPrint id={selectedBoleto?.id} ref={ref} />
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
              label="DNI"
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

            <Space>
              <Form.Item
                name="destino"
                label="Destino"
                rules={[{ required: true, message: "Requerido" }]}
              >
                <Select style={{ width: 120 }}>
                  <Select.Option value="Huanta">Huanta</Select.Option>
                  <Select.Option value="Ayacucho">Ayacucho</Select.Option>
                  <Select.Option value="Izquchaca">Izquchaca</Select.Option>
                  <Select.Option value="Mayocc">Mayocc</Select.Option>
                  <Select.Option value="Anco">Anco</Select.Option>
                  <Select.Option value="Huancayo">Huancayo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="precio"
                label="Precio"
                rules={[{ required: true, message: "Requerido" }]}
              >
                <Select
                  style={{ width: 80 }}
                  loading={isLoadingViaje}
                  allowClear
                >
                  {viaje?.response?.tarifas.map(
                    (tarifa: number, index: number) => (
                      <Select.Option key={index} value={tarifa}>
                        {tarifa}
                      </Select.Option>
                    )
                  )}
                </Select>
              </Form.Item>
              <Form.Item name="estado" label="Operación">
                <Select
                  style={{ width: 100 }}
                  value={boletoStatus}
                  onChange={(value) => {
                    setBoletoStatus(value as BoletoEstado);
                  }}
                >
                  <Select.Option value="PAGADO">Venta</Select.Option>
                  <Select.Option value="RESERVADO">Reserva</Select.Option>
                </Select>
              </Form.Item>
            </Space>
            <Form.Item name="metodoPago">
              <Radio.Group>
                <Radio value="Efectivo">Efectivo</Radio>
                <Radio value="Yape">Yape</Radio>
                <Radio value="IzyPay">IzyPay</Radio>
              </Radio.Group>
            </Form.Item>

            <Space className="flex justify-end">
              <Button
                htmlType="submit"
                type="primary"
                loading={isLoading || isLoadingUpdateBoleto}
                disabled={reniecResponse?.status === "error"}
              >
                {selectedBoleto ? "Vender" : "Registrar"}
              </Button>
              {selectedBoleto && (
                <Button
                  loading={isLoadingDeleteBoleto}
                  onClick={
                    selectedBoleto
                      ? async () => {
                          await deleteBoleto(selectedBoleto?.id);
                          setOpenRegister(false);
                        }
                      : () => setOpenRegister(false)
                  }
                  danger
                  type="primary"
                >
                  Eliminar
                </Button>
              )}
            </Space>
          </Form>
        )}
      </Modal>
    </div>
  );
};
