import AppHead from "@/components/head";
import AppLayout from "@/components/layout";
import {
  ConductorForm,
  BusForm,
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
          <ConductorForm activator="Agregar Conductor" />
          <ConductoresInformacion />
        </div>
        <div className="space-y-7">
          <Title order={4}>Buses</Title>
          <BusForm activator="Agregar Bus" />
          <BusesInformacion />
        </div>
      </div>
    </AppLayout>
  );
}
