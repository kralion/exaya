import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";
import { useState } from "react";

export const Route = createFileRoute("/_app/encomiendas")({
  component: EncomiendasPage,
});

function EncomiendasPage() {
  const [encomiendaIdToEdit, setEncomiendaIdToEdit] = useState("");

  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Encomiendas</Typography.Title>
      <EncomiendasForm
        encomiendaIdToEdit={encomiendaIdToEdit}
        setEncomiendaIdToEdit={setEncomiendaIdToEdit}
      />
      <EncomiendasTable setEncomiendaIdToEdit={setEncomiendaIdToEdit} />
    </div>
  );
}
