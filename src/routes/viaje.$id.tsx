import { createFileRoute } from "@tanstack/react-router";
import AppLayout from "@/components/common/layout";
import { useSession } from "@/context/SessionContext";
import { useEffect } from "react";
import { RegistrarPasajeContent } from "@/features/viaje/RegistrarPasajeContent";

export const Route = createFileRoute("/viaje/$id")({
  component: ViajePage,
});

function ViajePage() {
  const { id } = Route.useParams();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/login";
    }
  }, [status]);

  if (status === "loading") return null;

  return (
    <AppLayout>
      <RegistrarPasajeContent viajeId={id} />
    </AppLayout>
  );
}
