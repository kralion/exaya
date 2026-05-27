import { EncomiendasForm } from "./components/form";
import { EncomiendasTable } from "./components/table";
import { Typography } from "antd";
import { useState } from "react";

export function Encomiendas() {
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
