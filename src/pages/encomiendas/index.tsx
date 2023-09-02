import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { Title } from "@mantine/core";
import AppLayout from "../../components/layout";

function Encomiendas() {
  return (
    <AppLayout>
      <div className="space-y-3.5">
        <Title order={5}>Registro de Encomiendas</Title>
        <EncomiendasForm />
        <EncomiendasTable />
      </div>
    </AppLayout>
  );
}

export default Encomiendas;
