import LandingLayout from "@/components/landing/landing-layout";
import { ComprarPasajeModal } from "@/components/ui/boletos/comprar-pasaje-modal";
import { api } from "@/utils/api";
import { createFileRoute } from "@tanstack/react-router";
import { Space, Spin, Typography } from "antd";

export const Route = createFileRoute("/boletos/viaje/$viajeId")({
  component: BoletosViajePage,
});

function BoletosViajePage() {
  const { viajeId } = Route.useParams();
  const { data: viaje, isLoading } = api.viajes.getViajeById.useQuery({
    id: viajeId,
  });

  if (isLoading) {
    return (
      <LandingLayout>
        <Spin className="mt-10" />
      </LandingLayout>
    );
  }

  const v = viaje?.response;

  return (
    <LandingLayout>
      <Space direction="vertical" size="large" className="w-full pb-16">
        <Typography.Title level={2}>Comprar pasaje</Typography.Title>
        {v ? (
          <Typography.Paragraph>
            {v.ruta.ciudadOrigen} → {v.ruta.ciudadDestino} —{" "}
            {new Date(v.salida).toLocaleString("es-PE")}
          </Typography.Paragraph>
        ) : (
          <Typography.Paragraph>No se encontró el viaje.</Typography.Paragraph>
        )}
        <ComprarPasajeModal viajeId={viajeId} />
      </Space>
    </LandingLayout>
  );
}
