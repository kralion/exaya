import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { Button, DatePicker, DatePickerProps, Form, Select } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

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
  const [dateViaje, setDateViaje] = useState<string | string[]>();
  const updateViajeMutation = api.viajes.updateViajeById.useMutation();
  const handleSetEditViajeValues = useCallback(() => {
    if (singleViaje) {
      console.log(singleViaje);
      form.setFieldsValue({
        rutaId: singleViaje?.response?.rutaId,
        busId: singleViaje?.response?.busId,
        // salida: salidaForEdit,
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
          openNotification({
            message: "Operación Exitosa",
            description: response.message,
            type: "success",
            placement: "topRight",
          });
        },
        onError: (error) => {
          openNotification({
            message: "Error",
            description: error.message,
            type: "error",
            placement: "topRight",
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
    createViajeMutation.mutate(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        salida: new Date(values.salida),
        estado: "DISPONIBLE",
      },
      {
        onSuccess: (response) => {
          openNotification({
            message: "Operación Exitosa",
            description: response.message,
            type: "success",
            placement: "topRight",
          });
          void refetch();
        },
        onError: (error) => {
          openNotification({
            message: "Error",
            description: error.message,
            type: "error",
            placement: "topRight",
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
      <div className="flex gap-2">
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
        <Form.Item
          name="tarifas"
          className="w-full"
          rules={[{ required: true, message: "Requerido" }]}
        >
          <Select mode="multiple" placeholder="Tarifas">
            {tarifasGenerales.map((tarifa) => (
              <Select.Option key={tarifa} value={tarifa}>
                {tarifa}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

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
    </Form>
  );
}
