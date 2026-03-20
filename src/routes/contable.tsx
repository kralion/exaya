import { createFileRoute } from "@tanstack/react-router";
import { ContablePage } from "@/features/contable/ContablePage";

export const Route = createFileRoute("/contable")({
  component: ContablePage,
});
