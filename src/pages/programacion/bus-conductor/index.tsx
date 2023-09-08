import AppLayout from "@/components/layout";
import {
  ConductoresForm,
  ConductoresInformacion,
} from "@/components/ui/programacion";
import BusesInformacion from "@/components/ui/programacion/buses-info";
import { Title } from "@mantine/core";

export default function ProgramacionBusConductor() {
  return (
    <AppLayout>
      <div className="flex gap-7">
        <div className="space-y-5">
          <Title order={4}>Conductores</Title>
          <div className="space-y-3.5">
            <ConductoresForm activator="Agregar Conductor" />
            <ConductoresInformacion />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <Title order={4}>Buses en Plena Operacion</Title>
          <BusesInformacion />
        </div>
      </div>
    </AppLayout>
  );
}
