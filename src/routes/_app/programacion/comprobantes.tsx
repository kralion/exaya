import { Comprobantes } from "@/features/programacion/comprobantes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/programacion/comprobantes")({
  component: ComprobantesPage,
});

function ComprobantesPage() {
  return <Comprobantes />;
}
