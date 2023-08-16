import { Title } from "@mantine/core";
import { AvailableCalendar } from "@/components/ui/encomiendas/calendar";
import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";

function Encomiendas() {
  return (
    <div className="flex flex-col gap-7">
      <section className="flex justify-between">
        <div className="space-y-7">
          <Title order={4}>Registro de Encomiendas</Title>
          <EncomiendasForm />
        </div>
        <AvailableCalendar />
      </section>
      <EncomiendasTable />
    </div>
  );
}

export default Encomiendas;
