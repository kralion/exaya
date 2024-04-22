import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { Button, DatePicker, Form, Select } from "antd";
import { useEffect } from "react";
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

const tarifasGenerales = [25, 30, 35, 40, 45, 50, 55, 60, 65];

export function ViajesForm() {
  const [form] = Form.useForm();
  const { openNotification } = useNotification();
  const createViajeMutation = api.viajes.createViaje.useMutation();
  const { data: session } = useSession();
  const {
    data: rutas,
    isFetching: isFetchingRutas,
    isLoading: isLoadingRutas,
  } = api.rutas.getAllRutas.useQuery();
  const {
    data: bus,
    isFetching: isFetchingBus,
    isLoading: isLoadingBus,
  } = api.buses.getAllBuses.useQuery();
  const getAllViajesQuery = api.viajes.getAllViajes.useQuery();

  useEffect(() => {
    async function fetchData() {
      if (createViajeMutation.isSuccess) {
        await getAllViajesQuery.refetch();
      }
    }
    void fetchData();
  }, [createViajeMutation.isSuccess, getAllViajesQuery]);
  const onFinish = (values: TViaje) => {
    const salidaDate = new Date(values.salida);
    salidaDate.setHours(salidaDate.getHours() - 5);
    const salidaISO = salidaDate.toISOString();
    createViajeMutation.mutate(
      {
        ...values,
        usuarioId: session?.user?.id as string,
        estado: "DISPONIBLE",
        salida: new Date(salidaISO),
      },
      {
        onSuccess: (response) => {
          openNotification({
            message: "Operación Exitosa",
            description: response.message,
            type: "success",
            placement: "topRight",
          });

          // TODO: Add refetch query
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

    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="viaje-form"
      onFinish={onFinish}
      className="flex justify-between"
    >
      <div>
        <div className="flex gap-2">
          <Form.Item
            name="rutaId"
            rules={[{ required: true, message: "Requerido" }]}
          >
            <Select
              style={{ width: 300 }}
              placeholder="Ruta"
              allowClear
              loading={isLoadingRutas === true || isFetchingRutas === true}
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
              loading={isLoadingBus === true || isFetchingBus === true}
              style={{ width: 120 }}
              placeholder="BXG-01K"
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
            <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={15} />
          </Form.Item>
        </div>
        <Form.Item
          name="tarifas"
          rules={[{ required: true, message: "Requerido" }]}
        >
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Tarifas"
          >
            {tarifasGenerales.map((tarifa) => (
              <Select.Option key={tarifa} value={tarifa}>
                {tarifa}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item>
        <div className="flex gap-2">
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
            }}
          >
            Cancelar
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
