import { Button } from "antd";
import React from "react";
import "animate.css";
import { MdTimelapse } from "react-icons/md";

export function RoundedButton({ horaSalida }: { horaSalida: string }) {
  return (
    <Button
      onClick={() => alert(`Estadisticas de las ${horaSalida}`)}
      value={horaSalida}
      icon={<MdTimelapse />}
      shape="round"
      type="dashed"
      style={{ width: 100 }}
      className="animate__animated animate__lightSpeedInRight flex items-center justify-between"
    >
      {horaSalida}
    </Button>
  );
}
