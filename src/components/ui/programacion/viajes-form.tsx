import { useMessageContext } from "@/context/MessageContext";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { viajeSchema } from "@/schemas";
import { api } from "@/utils/api";
import {
  Button,
  DatePicker,
  Drawer,
  Flex,
  Form,
  Input,
  Select,
  Space,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import type { z } from "zod";
const { Title, Text } = Typography;

export function ViajesForm({
  idToEdit,
  setIdToEdit,
}: {
  idToEdit: string;
  setIdToEdit: (id: string) => void;
}) {
  const [form] = Form.useForm();
  const utils = api.useUtils();
  const [openRegister, setOpenRegister] = useState(false);
  const { data: conductoresRegistrados, isLoading: isLoadingConductores } =
    api.conductores.getAllConductores.useQuery();
  const createViajeMutation = api.viajes.createViaje.useMutation();
  const { data: session } = useSession();
  const { data: rutas, isLoading: isLoadingRutas } =
    api.rutas.getAllRutas.useQuery();
  const { data: bus, isLoading: isLoadingBus } =
    api.buses.getAllBuses.useQuery();
  const { data: singleViaje } = api.viajes.getViajeById.useQuery({
    id: idToEdit,
  });
  const { openMessage } = useMessageContext();
  const updateViajeMutation = api.viajes.updateViajeById.useMutation();

  function handleEditViaje(values: z.infer<typeof viajeSchema>) {
    updateViajeMutation.mutate(
      {
        ...values,
        id: idToEdit,
        salida: new Date(dayjs(values.salida).format("YYYY-MM-DD HH:mm:ss")),
        usuarioId: session?.user?.id as string,
        estado: "DISPONIBLE",
        tarifas: [
          values.tarifaGeneral,
          values.tarifaGeneral - 5,
          values.tarifaGeneral - 8,
        ],
      },
      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
        onSettled: () => {
          form.resetFields();
        },
      }
    );
  }
  function createViaje(values: z.infer<typeof viajeSchema>) {
    createViajeMutation.mutate(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        salida: new Date(dayjs(values.salida).format("YYYY-MM-DD HH:mm:ss")),
        estado: "DISPONIBLE",

        tarifas: [
          values.tarifaGeneral,
          values.tarifaGeneral - 5,
          values.tarifaGeneral - 8,
        ],
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async (response) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
          await utils.viajes.getAllViajes.invalidate();
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
        onSettled: () => {
          form.resetFields();
        },
      }
    );
  }
  const onFinish = (values: z.infer<typeof viajeSchema>) => {
    if (idToEdit) {
      handleEditViaje(values);
    } else {
      createViaje(values);
    }
    form.resetFields();
  };
  useEffect(() => {
    if (idToEdit && singleViaje?.response) {
      form.setFieldsValue({
        rutaId: singleViaje?.response?.rutaId,
        busId: singleViaje?.response?.busId,
        salida: dayjs(singleViaje?.response?.salida),
        conductores: singleViaje?.response?.conductores.map(
          (conductor) => conductor.id
        ),
        tarifas: singleViaje?.response?.tarifas,
      });
    }
  }, [singleViaje, form, idToEdit]);

  return (
    <>
      <Button
        type="primary"
        onClick={() => setOpenRegister(true)}
        className="lg:hidden"
      >
        Crear Viaje
      </Button>
      <Drawer
        className=" rounded-t-3xl lg:hidden"
        placement="bottom"
        closeIcon={null}
        title={null}
        height="75vh"
        onClose={() => {
          setOpenRegister(false);
          form.resetFields();
        }}
        open={openRegister}
      >
        <div className="absolute left-40 right-40 top-2 z-10 h-2 w-16 rounded-full bg-gray-300" />
        <div className=" mb-6 mt-2 flex flex-col">
          <Title level={2}>Nuevo Viaje</Title>
          <Text className=" font-light ">
            Ingrese los datos del viaje a crear
          </Text>
        </div>

        <Form form={form} name="viaje-form-mobile" onFinish={onFinish}>
          <Form.Item
            name="rutaId"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Select
              size="large"
              placeholder="Ruta"
              allowClear
              loading={isLoadingRutas}
            >
              {rutas?.map(
                (ruta: {
                  id: string;
                  ciudadOrigen: string;
                  ciudadDestino: string;
                }) => (
                  <Select.Option key={ruta.id} value={ruta.id}>
                    {ruta.ciudadOrigen} - {ruta.ciudadDestino}
                  </Select.Option>
                )
              )}
            </Select>
          </Form.Item>

          <Form.Item
            name="busId"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Select
              size="large"
              loading={isLoadingBus}
              placeholder="Bus"
              allowClear
            >
              {bus?.map((bus: { id: string; placa: string }) => (
                <Select.Option key={bus.id} value={bus.id}>
                  {bus.placa}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Requerido" }]}
            name="salida"
          >
            <DatePicker
              size="large"
              showTime
              use12Hours
              className="w-full"
              minuteStep={15}
              showNow={false}
              placeholder="Embarque"
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>

          <Form.Item
            name="tarifaGeneral"
            rules={[
              {
                required: true,
                message: "Requerido",
              },
            ]}
          >
            <Input
              size="large"
              addonBefore="S/."
              type="number"
              placeholder="Tarifa"
              maxLength={2}
              onChange={(e) => {
                form.setFieldsValue({
                  tarifaGeneral: parseInt(e.target.value),
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="conductores"
            rules={[
              { required: true, message: "Requerido para el manifiesto" },
            ]}
          >
            <Select
              size="large"
              mode="multiple"
              loading={isLoadingConductores}
              placeholder="Conductores"
            >
              {conductoresRegistrados?.map(
                (conductor: {
                  id: string;
                  nombres: string;
                  apellidos: string;
                }) => (
                  <Select.Option key={conductor.id} value={conductor.id}>
                    {conductor.nombres.split(" ")[0]}{" "}
                    {conductor.apellidos.split(" ")[0]}
                  </Select.Option>
                )
              )}
            </Select>
          </Form.Item>

          <Form.Item>
            <Flex gap={8} justify="end">
              <Button
                disabled={
                  createViajeMutation.isLoading || updateViajeMutation.isLoading
                }
                loading={
                  createViajeMutation.isLoading || updateViajeMutation.isLoading
                }
                htmlType="submit"
                type="primary"
              >
                {idToEdit ? "Guardar Cambios" : "Crear Viaje"}
              </Button>

              <Button
                htmlType="button"
                danger
                onClick={() => {
                  form.resetFields();
                  setIdToEdit("");
                  setOpenRegister(false);
                }}
              >
                Cancelar
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Drawer>
      <Form
        form={form}
        name="viaje-form"
        className="hidden w-full lg:block"
        onFinish={onFinish}
      >
        <Space className="flex items-start gap-16">
          <div>
            <div className="flex gap-4">
              <Form.Item
                name="rutaId"
                rules={[{ required: true, message: "Requerido" }]}
              >
                <Select
                  placeholder="Ruta"
                  style={{ width: 220 }}
                  allowClear
                  loading={isLoadingRutas}
                >
                  {rutas?.map(
                    (ruta: {
                      id: string;
                      ciudadOrigen: string;
                      ciudadDestino: string;
                    }) => (
                      <Select.Option key={ruta.id} value={ruta.id}>
                        {ruta.ciudadOrigen} - {ruta.ciudadDestino}
                      </Select.Option>
                    )
                  )}
                </Select>
              </Form.Item>

              <Form.Item
                name="busId"
                rules={[{ required: true, message: "Requerido" }]}
              >
                <Select
                  loading={isLoadingBus}
                  style={{ width: 120 }}
                  placeholder="Bus"
                  allowClear
                >
                  {bus?.map((bus: { id: string; placa: string }) => (
                    <Select.Option key={bus.id} value={bus.id}>
                      {bus.placa}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: "Requerido" }]}
                name="salida"
              >
                <DatePicker
                  className="w-full lg:w-[175px]"
                  showTime
                  use12Hours
                  style={{ width: 210 }}
                  minuteStep={15}
                  showNow={false}
                  placeholder="Embarque"
                  format="YYYY-MM-DD HH:mm"
                />
              </Form.Item>
            </div>
            <div className="flex gap-4">
              <Form.Item
                name="tarifaGeneral"
                rules={[
                  {
                    required: true,
                    message: "Requerido",
                  },
                ]}
              >
                <Input
                  addonBefore="S/."
                  type="number"
                  placeholder="Tarifa"
                  maxLength={2}
                  onChange={(e) => {
                    form.setFieldsValue({
                      tarifaGeneral: parseInt(e.target.value),
                    });
                  }}
                />
              </Form.Item>
              <Form.Item
                name="conductores"
                rules={[
                  { required: true, message: "Requerido para el manifiesto" },
                ]}
              >
                <Select
                  mode="multiple"
                  style={{
                    width: 350,
                  }}
                  loading={isLoadingConductores}
                  placeholder="Conductores"
                >
                  {conductoresRegistrados?.map(
                    (conductor: {
                      id: string;
                      nombres: string;
                      apellidos: string;
                    }) => (
                      <Select.Option key={conductor.id} value={conductor.id}>
                        {conductor.nombres.split(" ")[0]}{" "}
                        {conductor.apellidos.split(" ")[0]}
                      </Select.Option>
                    )
                  )}
                </Select>
              </Form.Item>
            </div>
          </div>
          <Space>
            <Button
              disabled={
                createViajeMutation.isLoading || updateViajeMutation.isLoading
              }
              loading={
                createViajeMutation.isLoading || updateViajeMutation.isLoading
              }
              htmlType="submit"
              type="primary"
            >
              {idToEdit ? "Guardar Cambios" : "Crear Viaje"}
            </Button>

            <Button
              htmlType="button"
              danger
              onClick={() => {
                form.resetFields();
                setIdToEdit("");
              }}
            >
              Cancelar
            </Button>
          </Space>
        </Space>
      </Form>
    </>
  );
}
