import { Title } from "@mantine/core";
import React from "react";
import { ProgramacionTable } from "@/components/ui/programacion/programacion-viajes-table";
import { ViajesForm } from "@/components/ui/programacion/viajes-form";
import { originData } from "@/data/programacion-viajes";
import AppLayout from "@/components/layout";

function ProgramacionViajes() {
  const [viajesProgramados, setViajesProgramados] = React.useState(originData);
  const handleAddViaje = (viaje: any) => {
    setViajesProgramados([...viajesProgramados, viaje]);
  };
  return (
    <AppLayout>
      <div className="space-y-3.5">
        <Title order={5}>Programacion de Viajes</Title>
        <ViajesForm handleAddViaje={handleAddViaje} />
        <Title order={5}>Historial de Salidas</Title>
        <ProgramacionTable originData={originData} />
      </div>
    </AppLayout>
  );
}

export default ProgramacionViajes;
