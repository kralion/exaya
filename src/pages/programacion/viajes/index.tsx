import React, { useState } from "react";
import { ProgramacionTable } from "@/components/ui/programacion/programacion-viajes-table";
import { ViajesForm } from "@/components/ui/programacion/viajes-form";
import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import { Typography } from "antd";
const { Title } = Typography;
function ProgramacionViajes() {
  const [idToEdit, setIdToEdit] = useState<string>("");
  return (
    <AppLayout>
      <AppHead title="Programacion de Viajes" />
      <div className="space-y-3.5">
        <Title level={5}>Programación de Viajes</Title>
        <ViajesForm idToEdit={idToEdit} setIdToEdit={setIdToEdit} />
        <Title level={5}>Historial de Salidas</Title>
        <ProgramacionTable setIdToEdit={setIdToEdit} />
      </div>
    </AppLayout>
  );
}

export default ProgramacionViajes;
