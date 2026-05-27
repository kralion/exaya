import { Contable } from "@/features/contable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/contable")({
  component: ContablePage,
});

function ContablePage() {
  return <Contable />;
}
