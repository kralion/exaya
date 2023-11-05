import { useNotification } from "@/context/NotificationContext";
import type { viajeValuesSchema } from "@/interfaces";
import type { DatePickerProps } from "antd";
import { Button, DatePicker, Form, Select, TimePicker } from "antd";
import React from "react";
import style from "./frame.module.css";
import PriceSelector from "./price-selector";
import { api } from "@/utils/api";
import type { TypeOf } from "zod";

const { Option } = Select;
const format = "HH:mm";
const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const layout = {
  labelCol: { span: 5 },
};

type Props = {
  handleAddViaje: (viaje: TypeOf<typeof viajeValuesSchema>) => void;
};

export function ViajesForm({ handleAddViaje }: Props) {
  const [form] = Form.useForm();
  const { openNotification } = useNotification();

  const onOrigenChange = (value: string) => {
    switch (value) {
      case "Huancayo":
        form.setFieldsValue({ ruta: "Ay" });
        break;
      case "Ayacucho":
        form.setFieldsValue({ ruta: "Hyo" });
        break;
      default:
    }
  };
  const onDestinoChange = (value: string) => {
    switch (value) {
      case "Ayacucho":
        form.setFieldsValue({ ruta: "Ay" });
        break;
      case "Huancayo":
        form.setFieldsValue({ ruta: "Hyo" });
        break;
      default:
    }
  };

  const postViaje = api.viajes.createViaje.useMutation();
  const onFinish = (values: TypeOf<typeof viajeValuesSchema>) => {
    //TODO: Modificar el formato de los datos para que la mutacion los acepte
    postViaje.mutate(values);
    alert(JSON.stringify(values.busId));
    handleAddViaje(values);
    openNotification({
      message: "Viaje creado",
      description: "El viaje se ha creado satisfactoriamente",
      placement: "topRight",
      type: "success",
    });
    form.resetFields();
  };

  const onReset = () => {
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

  const handleChange = (value: number) => {
    console.log(`selected ${value.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    })}
  }`);
  };

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
            name="ciudadOrigen"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <Select
              style={{ width: 120 }}
              placeholder="Origen"
              onChange={onOrigenChange}
              allowClear
              loading={isLoadingRutas === true || isFetchingRutas === true}
            >
              {rutas?.map((ruta) => (
                <Option key={ruta.id}>{ruta.ciudadOrigen}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="ciudadDestino"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <Select
              style={{ width: 120 }}
              placeholder="Destino"
              onChange={onDestinoChange}
              allowClear
              loading={isLoadingRutas === true || isFetchingRutas === true}
            >
              {rutas?.map((ruta) => (
                <Option key={ruta.id}>{ruta.ciudadDestino}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="placaBus"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <Select
              loading={isLoadingBus === true || isFetchingBus === true}
              style={{ width: 120 }}
              placeholder="Bus"
              allowClear
            >
              {bus?.map((bus) => (
                <Option key={bus.id}>{bus.placa}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="fechaSalida"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <DatePicker
              style={{ width: 120 }}
              placeholder="Fecha"
              onChange={onDateChange}
            />
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
        {/* //TODO: Agregar el selector de tarifas y capturas los valores que se van seleccionando */}
        <Form.Item
          name="tarifas"
          rules={[{ required: true, message: "Selecciona" }]}
        >
          <PriceSelector handleChange={handleChange} />
        </Form.Item>
      </div>

      <Form.Item>
        <div className="flex gap-2">
          <button type="submit" className={style.basicButton}>
            Crear Viaje
          </button>

          <Button htmlType="button" onClick={onReset}>
            Cancelar
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
