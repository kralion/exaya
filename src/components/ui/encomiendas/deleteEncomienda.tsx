import { Button, Popconfirm } from "antd";
import React from "react";
import { useEncomiendasContext } from "@/context/EncomiendasContext";

export default function DeleteEncomienda({
  keyEncomienda,
}: {
  keyEncomienda: string;
}) {
  const { handleDeleteEncomienda } = useEncomiendasContext();
  return (
    <Popconfirm
      okButtonProps={{
        style: {
          backgroundColor: "#f5222d",
          color: "white",
          borderRadius: "5px",
          border: "none",
        },
      }}
      title="Estás segur@ ?"
      // TODO: Implementar la función handleDeleteEncomienda
      onConfirm={() => {
        handleDeleteEncomienda(keyEncomienda);
      }}
    >
      <Button danger type="link">
        Eliminar
      </Button>
    </Popconfirm>
  );
}
