import AppHead from "@/components/head";
import AppLayout from "@/components/layout";
import {
  ConductoresForm,
  ConductoresInformacion,
  BusesInformacion,
} from "@/components/ui/programacion";
import { Title } from "@mantine/core";

export default function ProgramacionBusConductor() {
  return (
    <AppLayout>
      <AppHead title="Programacion Bus Conductor" />
      <div className="flex gap-7">
        <div className="space-y-7">
          <Title order={4}>Conductores</Title>
          <ConductoresForm activator="Agregar Conductor" />
          <ConductoresInformacion />
        </div>
        <div className="flex flex-col gap-7">
          <Title order={4}>Buses en Plena Operacion</Title>
          <BusesInformacion />
        </div>
      </div>
    </AppLayout>
  );
}
