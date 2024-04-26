import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { Button, DatePicker, DatePickerProps, Form, Select, Space } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useMessageContext } from "@/context/MessageContext";
import moment from "moment-timezone";

const layout = {
  labelCol: { span: 5 },
};

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
  setIdToEdit: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [form] = Form.useForm();
  const { openNotification } = useNotification();
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
  const handleSetEditViajeValues = useCallback(() => {
    if (singleViaje) {
      console.log(singleViaje);
      form.setFieldsValue({
        rutaId: singleViaje?.response?.rutaId,
        busId: singleViaje?.response?.busId,
        // salida: moment(singleViaje?.response?.salida),
        conductores: singleViaje?.response?.conductores.map(
          (conductor: { id: string }) => conductor.id
        ),
        tarifas: singleViaje?.response?.tarifas,
      });
    }
  }, [singleViaje, form]);

  function handleEditViaje(values: TViaje) {
    updateViajeMutation.mutate(
      {
        ...values,
        id: idToEdit,
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
      }
    );
  }

  useEffect(() => {
    if (idToEdit) {
      handleSetEditViajeValues();
    }
  }, [idToEdit, handleSetEditViajeValues]);

  const onFinish = (values: TViaje) => {
    const salidaDate = new Date(values.salida);
    const salidaDateInUTC = new Date(
      salidaDate.getUTCFullYear(),
      salidaDate.getUTCMonth(),
      salidaDate.getUTCDate(),
      salidaDate.getUTCHours() - 5,
      salidaDate.getUTCMinutes(),
      salidaDate.getUTCSeconds()
    );

    createViajeMutation.mutate(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        salida: salidaDateInUTC,
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
  };

  return (
    <Form {...layout} form={form} name="viaje-form" onFinish={onFinish}>
      <Space className="w-full items-start justify-between">
        <Space direction="vertical" className="gap-0">
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
                style={{ width: 200 }}
                showTime
                placeholder="Fecha de Salida"
                format="YYYY-MM-DD HH:mm"
                minuteStep={15}
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
                  width: 430,
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
                      {conductor.nombres}
                      {conductor.apellidos.slice(
                        conductor.apellidos.indexOf(" ")
                      )}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
          </Space>
        </Space>
        <Form.Item>
          <div className="flex justify-end gap-2">
            <Button
              disabled={createViajeMutation.isLoading}
              htmlType="submit"
              type="primary"
            >
              Crear Viaje
            </Button>

            <Button
              htmlType="button"
              onClick={() => {
                form.resetFields();
                // setIdToEdit("");
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
