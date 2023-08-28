import { AvailableCalendar } from "@/components/ui/encomiendas/calendar";
import EncomiendasSteps from "@/components/ui/encomiendas/encomiendas-step";
import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { Title } from "@mantine/core";

function Encomiendas() {
  return (
    <div className="flex flex-col gap-7">
      <Title order={4}>Registro de Encomiendas</Title>
      <section className="flex justify-between">
        <EncomiendasForm />
        <EncomiendasSteps />
        <AvailableCalendar />
      </section>
      <EncomiendasTable />
    </div>
  );
}

export default Encomiendas;
