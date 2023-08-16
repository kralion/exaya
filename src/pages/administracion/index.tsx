import Usuarios from "@/components/ui/administracion/usuarios";
import { Title } from "@mantine/core";
import React from "react";

function Administracion() {
  return (
    <div>
      <Title order={4}>Administracion</Title>
      <Usuarios />
    </div>
  );
}

export default Administracion;
