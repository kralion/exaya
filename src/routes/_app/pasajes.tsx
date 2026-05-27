import { Pasajes } from "@/features/pasajes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/pasajes")({
  component: PasajesPage,
});

function PasajesPage() {
  return <Pasajes />;
}
