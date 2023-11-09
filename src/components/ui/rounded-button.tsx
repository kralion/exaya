import { Button } from "antd";
import React from "react";
import "animate.css";
import { MdTimelapse } from "react-icons/md";

export function RoundedButton({ horaSalida }: { horaSalida: string }) {
  return (
    <Button
      onClick={() => alert(`Estadisticas de las ${horaSalida}`)}
      value={horaSalida}
      icon={<MdTimelapse className="animate-spin" />}
      shape="round"
      type="dashed"
      style={{ width: 100 }}
      className="animate__animated animate__lightSpeedInRight animate__delay-1s flex items-center justify-between"
    >
      {horaSalida}
    </Button>
  );
}
