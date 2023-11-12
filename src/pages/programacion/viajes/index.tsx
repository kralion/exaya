import React from "react";
import { ProgramacionTable } from "@/components/ui/programacion/programacion-viajes-table";
import { ViajesForm } from "@/components/ui/programacion/viajes-form";
import { originData } from "@/data/programacion-viajes";
import AppLayout from "@/components/layout";
import AppHead from "@/components/head";
import { Typography } from "antd";
const { Title } = Typography;
function ProgramacionViajes() {
  const [viajesProgramados, setViajesProgramados] = React.useState(originData);
  const handleAddViaje = (viaje: any) => {
    setViajesProgramados([...viajesProgramados, viaje]);
  };
  return (
    <AppLayout>
      <AppHead title="Programacion de Viajes" />
      <div className="space-y-3.5">
        <Title level={5}>Programacion de Viajes</Title>
        <ViajesForm handleAddViaje={handleAddViaje} />
        <Title level={5}>Historial de Salidas</Title>
        <ProgramacionTable originData={originData} />
      </div>
    </AppLayout>
  );
}

export default ProgramacionViajes;
