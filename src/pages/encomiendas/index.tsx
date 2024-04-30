import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { FloatButton } from "antd";
import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import { useState } from "react";

function Encomiendas() {
  const [encomiendaIdToEdit, setEncomiendaIdToEdit] = useState<string>("");
  return (
    <AppLayout>
      <AppHead title="Encomiendas" />
      <div className="space-y-3.5">
        <EncomiendasForm
          setEncomiendaIdToEdit={setEncomiendaIdToEdit}
          encomiendaIdToEdit={encomiendaIdToEdit}
        />
        <EncomiendasTable setEncomiendaIdToEdit={setEncomiendaIdToEdit} />
      </div>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}

export default Encomiendas;
