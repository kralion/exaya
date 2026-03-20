import { createFileRoute } from "@tanstack/react-router";
import { ComprarPasajeBoletosPage } from "@/features/boletos/ComprarPasajeBoletosPage";

export const Route = createFileRoute("/boletos/viaje/$id")({
  component: BoletosViajePage,
});

function BoletosViajePage() {
  const { id } = Route.useParams();
  return <ComprarPasajeBoletosPage viajeId={id} />;
}
