import { ProgramacionTable } from "@/components/ui/programacion/programacion-viajes-table";
import { ViajesForm } from "@/components/ui/programacion/viajes-form";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";
import { useState } from "react";

export const Route = createFileRoute("/_app/programacion/viajes")({
  component: ProgramacionViajesPage,
});

function ProgramacionViajesPage() {
  const [idToEdit, setIdToEdit] = useState("");

  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Programación de viajes</Typography.Title>
      <ViajesForm idToEdit={idToEdit} setIdToEdit={setIdToEdit} />
      <ProgramacionTable setIdToEdit={setIdToEdit} />
    </div>
  );
}
