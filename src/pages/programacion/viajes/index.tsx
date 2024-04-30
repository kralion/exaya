import React, { useState } from "react";
import { ProgramacionTable } from "@/components/ui/programacion/programacion-viajes-table";
import { ViajesForm } from "@/components/ui/programacion/viajes-form";
import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import { Space, Typography } from "antd";
const { Title } = Typography;
function ProgramacionViajes() {
  const [idToEdit, setIdToEdit] = useState<string>("");
  return (
    <AppLayout>
      <AppHead title="Programacion de Viajes" />
      <Space className="gap-8" direction="vertical">
        <Space direction="vertical" className="gap-4">
          <Title level={5}>Programación de Viajes</Title>
          <ViajesForm setIdToEdit={setIdToEdit} idToEdit={idToEdit} />
        </Space>
        <Space direction="vertical" className="w-full gap-4">
          <Title level={5}>Historial de Salidas</Title>
          <ProgramacionTable setIdToEdit={setIdToEdit} />
        </Space>
      </Space>
    </AppLayout>
  );
}

export default ProgramacionViajes;
