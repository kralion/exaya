import TravelTicketPrint from "@/components/travel-ticket";
import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Steps,
  Switch,
  Tag,
  Typography,
  Image,
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
  const { openMessage } = useMessageContext();
  const [pasajeroDNI, setPasajeroDNI] = useState<string>("");
  const [openRegister, setOpenRegister] = useState(false);
  const [form] = Form.useForm();
  const [selectedSeat, setSelectedSeat] = useState<number>(1);
  const { data: viaje, isLoading: isLoadingViaje } =
    api.viajes.getViajeById.useQuery({
      id: viajeId,
    });

  const { data: session } = useSession();
  const utils = api.useUtils();
  const [queryEnabled, setQueryEnabled] = useState(false);
  const { data: boletosVendidos } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "PAGADO",
      viajeId,
    });

  const [boletoStatus, setBoletoStatus] = useState<BoletoEstado>("DISPONIBLE");
  const { data: boletosReservados } =
    api.boletos.getBoletosByStatusAndViajeId.useQuery({
      status: "RESERVADO",
      viajeId,
    });
  const { mutateAsync: createBoletoMutation, isLoading } =
    api.boletos.createBoleto.useMutation();
  const selectedBoleto = viaje?.response?.boletos.find(
    (boleto) => boleto.asiento === selectedSeat
  );

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
        enabled: queryEnabled,
      }
    );
  const seats = Array.from(
    { length: viaje?.response?.bus.asientos || 40 },
    (_, i) => i + 1
  );
  const ref = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    documentTitle: `Boleto de Viaje - Asiento ${selectedBoleto?.asiento ?? ""}`,
    content: () => ref.current,
    pageStyle: "@media print { .page-break { page-break-before: always; } }",
  });
  async function createBoleto(values: z.infer<typeof boletoSchema>) {
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
        serie: session?.user.serieBoleto ?? "AG001",
        telefonoCliente: values.telefonoCliente.toString(),
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
        serie: session?.user.serieBoleto ?? "AG001",
        telefonoCliente: values.telefonoCliente.toString(),
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
    await utils.boletos.getAllBoletos.invalidate();
  }

  useEffect(() => {
    if (selectedBoleto?.id !== "") {
      form.setFieldsValue({
        pasajeroDni: boletoSingle?.response?.pasajeroDni,
        telefonoCliente: boletoSingle?.response?.telefonoCliente,
        precio: boletoSingle?.response?.precio,
        equipaje: boletoSingle?.response?.equipaje,
        estado: boletoSingle?.response?.estado,
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
            <Space className="items-center gap-4">
              <Title level={4}>Distribución de Asientos</Title>
            </Space>
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
        onCancel={() => {
          setPasajeroDNI("");
          setOpen(false);
        }}
        footer={null}
        width={710}
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
                          : "fill-white stroke-slate-500 dark:fill-white/50 dark:stroke-zinc-500"
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
            <Space direction="vertical" className="gap-4 py-2">
              <Image src={viaje?.response?.bus.foto} alt="bus" width={300} />
              <Steps
                direction="vertical"
                className="mt-4"
                size="small"
                items={[
                  {
                    title: "Modelo del Bus",
                    status: "finish",
                    description: viaje?.response?.bus.modelo,
                  },
                  {
                    title: "Bus Cama",
                    status: `${
                      (viaje?.response?.bus.asientos ?? 0) > 40
                        ? "finish"
                        : "error"
                    }`,
                    description: "Indicador para asercion de bus cama",
                  },
                  {
                    title: "Experiencia en General",
                    status: `${
                      viaje?.response?.conductores.some(
                        (conductor: { claseLicencia: string }) =>
                          conductor.claseLicencia === "A-IIIB"
                      )
                        ? `finish`
                        : `error`
                    }`,
                    description: "Conductores con licencia AIII-C",
                  },
                ]}
              />
            </Space>
          </Space>
          <Divider className="my-4" />
          <Space direction="horizontal" className="flex gap-3">
            <Text type="secondary">
              Vendidos: {boletosVendidos?.response?.length}
            </Text>
            <Text type="secondary">
              Reservados: {boletosReservados?.response?.length}
            </Text>
          </Space>
        </div>
      </Modal>
      <Modal
        title={
          <Title className="text-left" level={4}>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <h3>Asiento</h3>
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
                          : "fill-white stroke-slate-500 dark:fill-white/50 dark:stroke-zinc-500"
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
                      className={`text-[8px] font-bold  ${concertOne.className}`}
                    >
                      {selectedSeat}
                    </text>
                  </svg>
                </div>
              </div>
              {selectedBoleto?.estado === "PAGADO" ? (
                <Button type="primary" onClick={handlePrint}>
                  Imprimir
                </Button>
              ) : null}
            </div>
            <hr className="mt-2 " />
          </Title>
        }
        centered
        closeIcon={null}
        open={openRegister}
        onCancel={() => {
          setOpenRegister(false);
          form.resetFields();
          setPasajeroDNI("");
        }}
        width={selectedBoleto?.estado === "PAGADO" ? 600 : 450}
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
            style={{ width: 400 }}
          >
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
                  setQueryEnabled(dni.length === 8);
                  setPasajeroDNI(dni);
                }}
                style={{
                  width: 390,
                }}
                type="number"
                maxLength={8}
                className="w-full"
              />
            </Form.Item>
            <Space>
              <Form.Item
                name="telefonoCliente"
                label="Teléfono"
                rules={[{ required: true, message: "Requerido" }]}
              >
                <Input
                  style={{
                    width: 210,
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
              <Form.Item
                name="estado"
                tooltip="Reservar el boleto?"
                label="Reservar"
              >
                <Switch
                  checkedChildren="Sí"
                  unCheckedChildren="No"
                  style={{ width: 80 }}
                  className=" bg-red-500 shadow-lg"
                  defaultValue={boletoStatus === "PAGADO"}
                  onChange={(checked) => {
                    setBoletoStatus(
                      checked
                        ? ("RESERVADO" as BoletoEstado)
                        : ("PAGADO" as BoletoEstado)
                    );
                  }}
                />
              </Form.Item>
            </Space>
            <Form.Item name="equipaje" label="Equipaje">
              <Input.TextArea placeholder="Una bolsa roja, una mochila negra, 2 cajas de carton ..." />
            </Form.Item>
            <Space className="flex justify-end">
              <Button
                htmlType="submit"
                type="primary"
                loading={isLoading || isLoadingUpdateBoleto}
                disabled={reniecResponse?.status === "error"}
              >
                {selectedBoleto ? "Actualizar" : "Registrar"}
              </Button>
              <Button
                onClick={() => {
                  setOpenRegister(false);
                  setPasajeroDNI("");
                  form.resetFields();
                }}
                danger
                type="text"
              >
                Cancelar
              </Button>
            </Space>
          </Form>
        )}
      </Modal>
    </div>
  );
};
