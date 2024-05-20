import AppHead from "@/components/landing/head";
import { ControlPaneCard } from "@/components/ui/panel-de-control/control-pane-card";
import ControlPaneGraph from "@/components/ui/panel-de-control/graph";
import { ProgressesCard } from "@/components/ui/panel-de-control/progresses-card";
import { api } from "@/utils/api";
import { Skeleton, Space, Statistic, Typography } from "antd";
import { useSession } from "next-auth/react";
import AppLayout from "../../components/exaya/layout";

type TViajeEstado = {
  estado: "DISPONIBLE" | "LLENO" | "CANCELADO";
};

export default function Dashboard() {
  const { data: viajesDiarios, isLoading: isLoadingViajesDiarios } =
    api.viajes.getViajesForToday.useQuery();
  const { data: lastestCodeBoleto, isLoading: isLoadingBoletoCode } =
    api.boletos.getLatestCodeOfBoleto.useQuery();
  const { data: lastestCodeEncomienda, isLoading: isLoadingEncomiendaCode } =
    api.encomiendas.getLatestCodeOfEncomienda.useQuery();
  const { data: session } = useSession();
  const totalViajesProgramados = viajesDiarios?.response?.length;
  const viajesActivos = viajesDiarios?.response?.filter(
    (viaje: TViajeEstado) => viaje.estado === "DISPONIBLE"
  ).length;
  return (
    <AppLayout>
      <AppHead title="Panel de Control" />
      <div className="grid  grid-flow-row grid-cols-3 grid-rows-3 gap-4 ">
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

              {isLoadingBoletoCode ? (
                <Skeleton.Button active size="small" style={{ width: 100 }} />
              ) : (
                <Typography.Text className="text-xl">
                  {session?.user.serieBoleto}-00{lastestCodeBoleto?.response}
                </Typography.Text>
              )}
            </Space>

            <Space direction="vertical" className="mt-8 gap-2 text-right">
              <Typography.Text type="secondary" className="font-light">
                Encomienda
              </Typography.Text>

              {isLoadingEncomiendaCode ? (
                <Skeleton.Button active size="small" style={{ width: 100 }} />
              ) : (
                <Typography.Text className="text-xl">
                  {session?.user.serieEncomienda}- 00
                  {lastestCodeEncomienda?.response}
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
