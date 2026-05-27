import { Encomiendas } from "@/features/encomiendas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/encomiendas")({
  component: EncomiendasPage,
});

function EncomiendasPage() {
  return <Encomiendas />;
}
