import { createFileRoute } from "@tanstack/react-router";
import AppLayout from "@/components/common/layout";
import AppHead from "@/components/common/head";
import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { useEffect, useState } from "react";
import { useSession } from "@/context/SessionContext";

export const Route = createFileRoute("/encomiendas")({
  component: EncomiendasPage,
});

function EncomiendasPage() {
  const [encomiendaIdToEdit, setEncomiendaIdToEdit] = useState<string>("");
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/login";
    }
  }, [status]);

  if (status === "loading") return null;

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
