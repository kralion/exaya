import { Button } from "antd";
import React from "react";
import { MdTimelapse } from "react-icons/md";

export function RoundedButton({ horaSalida }: { horaSalida: string }) {
  return (
    <Button
      onClick={() => alert(`Estadisticas de las ${horaSalida}`)}
      value={horaSalida}
      icon={<MdTimelapse className="animate-spin" />}
      shape="round"
      type="dashed"
      className="flex items-center justify-between"
    >
      {horaSalida}
    </Button>
  );
}
