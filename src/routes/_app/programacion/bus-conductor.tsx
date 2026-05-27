import { BusConductor } from "@/features/programacion/bus-conductor";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/programacion/bus-conductor")({
  component: BusConductorPage,
});

function BusConductorPage() {
  return <BusConductor />;
}
