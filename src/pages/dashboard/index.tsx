import AppHead from "@/components/landing/head";
import { ControlPaneCard } from "@/components/ui/panel-de-control/control-pane-card";
import ControlPaneGraph from "@/components/ui/panel-de-control/graph";
import { api } from "@/utils/api";
import { Skeleton, Space, Statistic, Typography } from "antd";
import { useSession } from "next-auth/react";
import { IoTicketOutline } from "react-icons/io5";
import { LiaLuggageCartSolid } from "react-icons/lia";
import AppLayout from "../../components/exaya/layout";
import { ProgressesCard } from "@/components/ui/panel-de-control/progresses-card";

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
              <Space>
                <IoTicketOutline
                  className="text-zinc-400 drop-shadow-lg"
                  size={20}
                />
                {isLoadingBoletoCode ? (
                  <Skeleton.Button active size="small" style={{ width: 100 }} />
                ) : (
                  <Typography.Text strong>
                    {session?.user.serieBoleto}-00{lastestCodeBoleto?.response}
                  </Typography.Text>
                )}
              </Space>
            </Space>

            <Space direction="vertical" className="mt-8 gap-2 text-right">
              <Typography.Text type="secondary" className="font-light">
                Encomienda
              </Typography.Text>
              <Space>
                <LiaLuggageCartSolid
                  className="text-zinc-400 drop-shadow-lg"
                  size={20}
                />
                {isLoadingEncomiendaCode ? (
                  <Skeleton.Button active size="small" style={{ width: 100 }} />
                ) : (
                  <Typography.Text strong>
                    {session?.user.serieEncomienda}- 00
                    {lastestCodeEncomienda?.response}
                  </Typography.Text>
                )}
              </Space>
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
