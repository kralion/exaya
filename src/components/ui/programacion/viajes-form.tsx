import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import type { DatePickerProps } from "antd";
import { Button, DatePicker, Form, Select, TimePicker } from "antd";
import style from "./frame.module.css";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports

const format = "HH:mm";

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
  fechaSalida: DatePickerProps["value"];
  horaSalida: DatePickerProps["value"];
  tarifas: number[];
  estado: "DISPONIBLE" | "CANCELADO" | "LLENO";
};

const tarifasGenerales = [25, 30, 35, 40, 45, 50, 55, 60, 65];

export function ViajesForm() {
  const [form] = Form.useForm();
  const { openNotification } = useNotification();
  const createViajeMutation = api.viajes.createViaje.useMutation();
  const onFinish = (values: TViaje) => {
    createViajeMutation.mutate(
      {
        ...values,
        estado: "DISPONIBLE",
        salida: new Date(
          `${values.fechaSalida?.format("YYYY-MM-DD") ?? "2024-11-12"} ${
            values.horaSalida?.format("HH:mm") ?? "20:30"
          }`
        ),
      },
      {
        onSuccess: (response) => {
          openNotification({
            message: "Viaje registrado",
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

    form.resetFields();
  };
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

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      className="flex justify-between"
    >
      <div>
        <div className="flex gap-2">
          <Form.Item
            name="rutaId"
            rules={[{ required: true, message: "Selecciona" }]}
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
            rules={[{ required: true, message: "Selecciona" }]}
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
            name="fechaSalida"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <DatePicker style={{ width: 120 }} placeholder="Fecha" />
          </Form.Item>
          <Form.Item
            name="horaSalida"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <TimePicker
              style={{ width: 90 }}
              minuteStep={15}
              format={format}
              placeholder="Hora"
              showNow={false}
            />
          </Form.Item>
        </div>
        <Form.Item
          name="tarifas"
          rules={[{ required: true, message: "Selecciona" }]}
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
          <button
            disabled={createViajeMutation.isLoading}
            type="submit"
            className={style.basicButton}
          >
            Crear Viaje
          </button>

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
