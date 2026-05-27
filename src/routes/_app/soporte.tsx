import { Soporte } from "@/features/soporte";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/soporte")({
  component: SoportePage,
});

function SoportePage() {
  return <Soporte />;
}
