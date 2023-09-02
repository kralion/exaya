import { viajesDiarios } from "@/data";
import type { IViaje } from "@/interfaces";
import { CheckCircleOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";
import {
  Button,
  DatePicker,
  Form,
  Select,
  TimePicker,
  notification,
} from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import React, { useMemo } from "react";
import style from "./frame.module.css";
import PriceSelector from "./price-selector";

const Context = React.createContext({ name: "Default" });
const { Option } = Select;
const format = "HH:mm";
const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const onTimeChange = (time: any, timeString: any) => {
  console.log(time, timeString);
};

const layout = {
  labelCol: { span: 5 },
};

type Props = {
  handleAddViaje: (viaje: IViaje) => void;
};

export function ViajesForm({ handleAddViaje }: Props) {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      type: "success",
      message: "Operacion exitosa",
      description: (
        <Context.Consumer>
          {({ name }) =>
            "El viaje ha sido creado exitosamente y lo puede visualizar en la tabla"
          }
        </Context.Consumer>
      ),
      placement,
      duration: 1,
      icon: <CheckCircleOutlined className="text-green-500" />,
    });
  };

  const contextValue = useMemo(() => ({ name: "" }), []);
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
    openNotification("topRight");
    handleAddViaje(values);
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };
  const destinosUnicos = [
    ...new Set(viajesDiarios.map((viaje) => viaje.destino)),
  ];
  const origenesUnicos = [
    ...new Set(viajesDiarios.map((viaje) => viaje.origen)),
  ];

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
            rules={[{ required: true, message: "* Requerido" }]}
          >
            <Select
              style={{ width: 120 }}
              placeholder="Origen"
              onChange={onOrigenChange}
              allowClear
            >
              {origenesUnicos.map((origen) => (
                <Option key={origen} value={origen}>
                  {origen}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="destino"
            rules={[{ required: true, message: "* Requerido" }]}
          >
            <Select
              style={{ width: 120 }}
              placeholder="Destino"
              onChange={onDestinoChange}
              allowClear
            >
              {destinosUnicos.map((destino) => (
                <Option key={destino} value={destino}>
                  {destino}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="bus"
            rules={[{ required: true, message: "* Requerido" }]}
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
            rules={[{ required: true, message: "* Requerido" }]}
          >
            <DatePicker
              style={{ width: 120 }}
              placeholder="Fecha"
              onChange={onDateChange}
            />
          </Form.Item>
          <Form.Item
            name="hora"
            rules={[{ required: true, message: "* Requerido" }]}
          >
            <TimePicker
              use12Hours={true}
              style={{ width: 90 }}
              minuteStep={15}
              format={format}
              onChange={onTimeChange}
              placeholder="Hora "
            />
          </Form.Item>
        </div>
        <Form.Item
          name="precio"
          rules={[{ required: true, message: "* Requerido" }]}
        >
          <PriceSelector />
        </Form.Item>
      </div>

      <Form.Item>
        <div className="flex gap-2">
          <Context.Provider value={contextValue}>
            {contextHolder}

            <button className={style.basicButton}>Crear Viaje</button>
          </Context.Provider>
          <Button htmlType="button" onClick={onReset}>
            Cancelar
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
