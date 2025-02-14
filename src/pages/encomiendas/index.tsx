import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { useState } from "react";

function Encomiendas() {
  const [encomiendaIdToEdit, setEncomiendaIdToEdit] = useState<string>("");

  return (
    <AppLayout>
      <AppHead title="Encomiendas" />
      <div className="space-y-20 lg:space-y-3.5">
        <EncomiendasForm
          setEncomiendaIdToEdit={setEncomiendaIdToEdit}
          encomiendaIdToEdit={encomiendaIdToEdit}
        />
        <EncomiendasTable setEncomiendaIdToEdit={setEncomiendaIdToEdit} />
      </div>
    </AppLayout>
  );
}

export default Encomiendas;
