import { Title } from "@mantine/core";
import { EncomiendasCalendar } from "~/components/ui/encomiendas/calendar";
import { EncomiendasForm } from "~/components/ui/encomiendas/form";
import { EncomiendasTable } from "~/components/ui/encomiendas/table";


function Encomiendas() {

  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-between">

        <Title order={4}>
          Registro de Encomiendas
        </Title>

        <Title className="mr-52" order={4}>
          Calendario
        </Title>
      </div>
      <div className="flex justify-between ">
        <EncomiendasForm />
        <div>
          <EncomiendasCalendar />
        </div>
      </div>
      <EncomiendasTable />
    </div>
  );
}

export default Encomiendas;
