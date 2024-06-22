import AppHead from "@/components/landing/head";
import { ControlPaneCard } from "@/components/ui/panel-de-control/control-pane-card";
import ControlPaneGraph from "@/components/ui/panel-de-control/graph";
import { ProgressesCard } from "@/components/ui/panel-de-control/progresses-card";
import { api } from "@/utils/api";
import { Skeleton, Space, Statistic, Typography } from "antd";
import { useSession } from "next-auth/react";
import AppLayout from "../../components/exaya/layout";
import { useEffect } from "react";

type TViajeEstado = {
  estado: "DISPONIBLE" | "LLENO" | "CANCELADO";
};

export default function Dashboard() {
  const { data: session } = useSession();
  const { data: viajesDiarios, isLoading: isLoadingViajesDiarios } =
    api.viajes.getViajesForToday.useQuery();
  const {
    data: sede,
    isLoading: isLoadingSede,
    refetch: refetchSede,
  } = api.sedes.getSedeById.useQuery({
    id: session?.user.sedeId ?? "",
  });
  const totalViajesProgramados = viajesDiarios?.response?.length;
  const viajesActivos = viajesDiarios?.response?.filter(
    (viaje: TViajeEstado) => viaje.estado === "DISPONIBLE"
  ).length;
  console.log(sede?.response?.contadorBoletos);

  useEffect(() => {
    if (session?.user.sedeId) {
      void refetchSede();
    }
  }, [session?.user.sedeId, refetchSede]);
  return (
    <AppLayout>
      <AppHead title="Panel de Control" />
      <div className="flex  flex-col gap-4 lg:grid lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-3">
        <ControlPaneCard
          href="/pasajes"
          cardTitle="Viajes"
          cardDescription="Número de viajes programados para hoy y los viajes que figuran como activos en el sistema del total de registrados"
        >
          <Space className="w-full justify-between">
            <Statistic
              className="mt-8  drop-shadow-lg"
              loading={isLoadingViajesDiarios}
              title="Activos"
              value={viajesActivos}
              suffix={`/${totalViajesProgramados ?? 0}`}
            />
            <Statistic
              className="mt-8 drop-shadow-lg"
              loading={isLoadingViajesDiarios}
              rootClassName="text-right"
              title="Programados"
              value={totalViajesProgramados}
            />
          </Space>
        </ControlPaneCard>

        <ControlPaneCard
          href="/contable"
          cardDescription="Códigos de los últimos comprobantes nuevos generados en el sistema boletos de viaje y las encomiendas"
          cardTitle="Comprobantes"
        >
          <Space className="w-full justify-between">
            <Space direction="vertical" className="mt-8 gap-2">
              <Typography.Text type="secondary" className="font-light">
                Boleto
              </Typography.Text>

              {isLoadingSede ? (
                <Skeleton.Button active size="small" style={{ width: 100 }} />
              ) : (
                <Typography.Text className="text-xl">
                  {sede?.response?.serieBoleto}-00
                  {sede?.response?.contadorBoletos}
                </Typography.Text>
              )}
            </Space>

            <Space direction="vertical" className="mt-8 gap-2 text-right">
              <Typography.Text type="secondary" className="font-light">
                Factura
              </Typography.Text>

              {isLoadingSede ? (
                <Skeleton.Button active size="small" style={{ width: 100 }} />
              ) : (
                <Typography.Text className="text-xl">
                  {sede?.response?.serieFactura}- 00
                  {sede?.response?.contadorFacturas}
                </Typography.Text>
              )}
            </Space>
          </Space>
        </ControlPaneCard>
        <ProgressesCard
          isLoading={isLoadingViajesDiarios}
          viajesDiarios={viajesDiarios?.response}
        />
        <ControlPaneGraph />
      </div>
    </AppLayout>
  );
}
