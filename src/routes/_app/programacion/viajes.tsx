import { Viajes } from "@/features/programacion/viajes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/programacion/viajes")({
  component: ProgramacionViajesPage,
});

function ProgramacionViajesPage() {
  return <Viajes />;
}
