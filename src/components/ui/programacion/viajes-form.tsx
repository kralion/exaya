import { useMessageContext } from "@/context/MessageContext";
import { viajeSchema } from "@/schemas";
import { api } from "@/utils/api";
import { Button, DatePicker, Form, Select, Space } from "antd";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { z } from "zod";

type TViaje = {
  ciudadOrigen: string;
  ciudadDestino: string;
  placaBus: string;
  salida: Date;
  busId: string;
  rutaId: string;
  tarifas: number[];
  estado: "DISPONIBLE" | "CANCELADO" | "LLENO";
};

const tarifasGenerales = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100];

export function ViajesForm({
  idToEdit,
  setIdToEdit,
}: {
  idToEdit: string;
  setIdToEdit: (id: string) => void;
}) {
  const [form] = Form.useForm();
  const { data: conductoresRegistrados, isLoading: isLoadingConductores } =
    api.conductores.getAllConductores.useQuery();
  const createViajeMutation = api.viajes.createViaje.useMutation();
  const { data: session } = useSession();
  const { data: rutas, isLoading: isLoadingRutas } =
    api.rutas.getAllRutas.useQuery();
  const { data: bus, isLoading: isLoadingBus } =
    api.buses.getAllBuses.useQuery();
  const { refetch } = api.viajes.getAllViajes.useQuery();
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
  function handleCreateViaje(values: z.infer<typeof viajeSchema>) {
    createViajeMutation.mutate(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        salida: new Date(dayjs(values.salida).format("YYYY-MM-DD HH:mm:ss")),
        estado: "DISPONIBLE",
      },
      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
          void refetch();
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
      handleCreateViaje(values);
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
    <Form form={form} name="viaje-form" onFinish={onFinish}>
      <Space className="w-full items-start justify-between">
        <div className="-space-y-2">
          <Space className="gap-4">
            <Form.Item
              name="rutaId"
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Select
                style={{ width: 300 }}
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
                loading={isLoadingBus}
                style={{ width: 140 }}
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
                style={{ width: 250 }}
                showTime
                use12Hours
                minuteStep={15}
                showNow={false}
                placeholder="Fecha de Salida"
                format="YYYY-MM-DD HH:mm"
              />
            </Form.Item>
          </Space>
          <Space className="gap-4">
            <Form.Item
              name="tarifas"
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Select
                style={{
                  width: 225,
                }}
                mode="multiple"
                placeholder="Tarifas"
              >
                {tarifasGenerales.map((tarifa) => (
                  <Select.Option key={tarifa} value={tarifa}>
                    {tarifa}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="conductores"
              rules={[{ required: true, message: "Requerido" }]}
            >
              <Select
                mode="multiple"
                style={{
                  width: 480,
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
                      {conductor.nombres} {conductor.apellidos}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
          </Space>
        </div>
        <Form.Item>
          <div className="flex justify-end gap-2">
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
              onClick={() => {
                form.resetFields();
                setIdToEdit("");
              }}
            >
              Cancelar
            </Button>
          </div>
        </Form.Item>
      </Space>
    </Form>
  );
}
