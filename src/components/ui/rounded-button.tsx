import { Button } from "antd";
import { FieldTimeOutlined } from "@ant-design/icons";
import React from "react";
import "animate.css";

export function RoundedButton({ horaSalida }: { horaSalida: string }) {
  return (
    <Button
      onClick={() => alert(`Estadisticas de las ${horaSalida}`)}
      value={horaSalida}
      icon={<FieldTimeOutlined />}
      shape="round"
      type="dashed"
      style={{ width: 100 }}
      className="animate__animated animate__lightSpeedInRight flex items-center justify-between"
    >
      {horaSalida}
    </Button>
  );
}
