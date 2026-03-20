import { createFileRoute } from "@tanstack/react-router";
import { ProgramacionTable } from "@/components/ui/programacion/programacion-viajes-table";
import { ViajesForm } from "@/components/ui/programacion/viajes-form";
import AppLayout from "@/components/common/layout";
import AppHead from "@/components/common/head";
import { Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSession } from "@/context/SessionContext";

const { Title } = Typography;

export const Route = createFileRoute("/programacion/viajes")({
  component: ProgramacionViajesPage,
});

function ProgramacionViajesPage() {
  const [idToEdit, setIdToEdit] = useState<string>("");
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/login";
    }
  }, [status]);

  if (status === "loading") return null;

  return (
    <AppLayout>
      <AppHead title="Programacion de Viajes" />
      <Space className="gap-8" direction="vertical">
        <Space direction="vertical" className="gap-4">
          <Title level={5}>Programación de Viajes</Title>
          <ViajesForm setIdToEdit={setIdToEdit} idToEdit={idToEdit} />
        </Space>
        <Space direction="vertical" className="w-full gap-4">
          <Title level={5}>Historial de Salidas</Title>
          <ProgramacionTable setIdToEdit={setIdToEdit} />
        </Space>
      </Space>
    </AppLayout>
  );
}
