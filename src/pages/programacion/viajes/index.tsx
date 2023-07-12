import { Title } from "@mantine/core";
import React from "react";
import { ProgramacionTable } from "@/components/ui/programacion/programacion-viajes-table";
import { ViajesForm } from "@/components/ui/programacion/viajes-form";
import { originData } from "@/data/programacion-viajes";

function ProgramacionViajes() {
  const [viajesProgramados, setViajesProgramados] = React.useState(originData);
  const handleAddViaje = (viaje: any) => {
    setViajesProgramados([...viajesProgramados, viaje]);
  };
  return (
    <div className="flex flex-col gap-7">
      <Title order={4}>Programacion de Viajes</Title>
      <div className="flex flex-col ">
        <ViajesForm handleAddViaje={handleAddViaje} />
        <ProgramacionTable originData={originData} />
      </div>
    </div>
  );
}

export default ProgramacionViajes;
