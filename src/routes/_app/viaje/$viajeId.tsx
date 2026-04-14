import { Manifiesto } from "@/components/ui/venta-pasajes/manifiesto";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";

export const Route = createFileRoute("/_app/viaje/$viajeId")({
  component: ViajeDetailPage,
});

function ViajeDetailPage() {
  const { viajeId } = Route.useParams();

  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Viaje</Typography.Title>
      <Manifiesto viajeId={viajeId} />
    </div>
  );
}
