import { useNotification } from "@/context/NotificationContext";
import { viajesDiarios } from "@/data";
import type { IRuta, IViaje } from "@/interfaces";
import type { DatePickerProps } from "antd";
import { Button, DatePicker, Form, Select, TimePicker } from "antd";
import React from "react";
import style from "./frame.module.css";
import PriceSelector from "./price-selector";
import { api } from "@/utils/api";

const { Option } = Select;
const format = "HH:mm";
const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const layout = {
  labelCol: { span: 5 },
};

type Props = {
  handleAddViaje: (viaje: IViaje) => void;
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

  const onFinish = (values: IViaje) => {
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
    isFetching,
    isLoading,
  } = api.rutas.getAllRutas.useQuery();
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
            name="origen"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <Select
              style={{ width: 120 }}
              placeholder="Origen"
              onChange={onOrigenChange}
              allowClear
              loading={isLoading === true || isFetching === true}
            >
              <Option key={rutas?.id} value={rutas?.ciudadOrigen}>
                {rutas?.ciudadOrigen}
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="destino"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <Select
              style={{ width: 120 }}
              placeholder="Destino"
              onChange={onDestinoChange}
              allowClear
              loading={isLoading === true || isFetching === true}
            >
              <Option key={rutas?.id} value={rutas?.ciudadDestino}>
                {rutas?.ciudadDestino}
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="bus"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <Select style={{ width: 120 }} placeholder="Bus" allowClear>
              {viajesDiarios.map((viaje) => (
                <Option key={viaje.key} value={viaje.placaBus}>
                  {viaje.placaBus}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="fecha"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <DatePicker
              style={{ width: 120 }}
              placeholder="Fecha"
              onChange={onDateChange}
            />
          </Form.Item>
          <Form.Item
            name="hora"
            rules={[{ required: true, message: "Selecciona" }]}
          >
            <TimePicker
              use12Hours={true}
              style={{ width: 90 }}
              minuteStep={15}
              format={format}
              placeholder="Hora "
            />
          </Form.Item>
        </div>
        <Form.Item
          name="precio"
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
