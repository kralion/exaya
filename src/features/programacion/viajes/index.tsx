import { ProgramacionTable } from "./components/programacion-viajes-table";
import { ViajesForm } from "./components/viajes-form";
import { Typography } from "antd";
import { useState } from "react";

export function Viajes() {
  const [idToEdit, setIdToEdit] = useState("");

  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Programación de viajes</Typography.Title>
      <ViajesForm idToEdit={idToEdit} setIdToEdit={setIdToEdit} />
      <ProgramacionTable setIdToEdit={setIdToEdit} />
    </div>
  );
}
