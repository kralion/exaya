import AppHead from "@/components/head";
import { ControlPaneCard } from "@/components/ui/panel-de-control/control-pane-card";
import ControlPaneGraph from "@/components/ui/panel-de-control/graph";
import ControlPanePieChart from "@/components/ui/panel-de-control/piechart";
import { Progress, Statistic, Typography } from "antd";
import { GrSchedulePlay } from "react-icons/gr";
import { IoReceiptOutline } from "react-icons/io5";
import { TbFileInvoice } from "react-icons/tb";
import AppLayout from "../../components/layout";
import { api } from "@/utils/api";

type TViajeEstado = {
  estado: "DISPONIBLE" | "LLENO" | "CANCELADO";
};

export default function Dashboard() {
  const { data: viajesDiarios } = api.viajes.getViajesForToday.useQuery();
  const { data: lastestCode } = api.boletos.getLatestCodeOfBoleto.useQuery();
  const totalViajesProgramados = viajesDiarios?.response?.length;
  const viajesActivos = viajesDiarios?.response?.filter(
    (viaje: TViajeEstado) => viaje.estado === "DISPONIBLE"
  ).length;
  return (
    <AppLayout>
      <AppHead title="Panel de Control" />
      <div className="grid grid-flow-row grid-cols-3 gap-3.5 ">
        <div className="duration-200">
          <ControlPaneCard
            href="/programacion/viajes"
            cardTitle="Viajes"
            cardDescription="Numero de viajes programados para hoy y los viajes que figuran como disponibles en el sistema del total de registrados"
          >
            <div className="mt-7 flex justify-between font-semibold">
              <Statistic
                className="drop-shadow-lg "
                title="Programados"
                value={totalViajesProgramados}
                prefix={<GrSchedulePlay size={20} className=" opacity-40" />}
              />

              <Statistic
                className="drop-shadow-lg"
                title="Activos"
                value={viajesActivos}
                suffix={`/${totalViajesProgramados || 0}`}
              />
            </div>
          </ControlPaneCard>
        </div>
        <div className=" duration-200">
          <ControlPaneCard
            href="/pasajes"
            cardDescription="Último código de boleto de viaje vendido y última factura generada registrados en el sistema, con su respectivo número de serie."
            cardTitle="Boletos"
          >
            <div className=" flex items-center justify-between font-semibold">
              <p className="mt-7 flex flex-col gap-2">
                <Typography.Text type="secondary">Factura</Typography.Text>
                <span className="flex items-center gap-1 text-2xl">
                  <TbFileInvoice
                    className="text-zinc-400 drop-shadow-lg"
                    size={20}
                  />
                  <Typography.Text strong className="text-xl drop-shadow-lg">
                    F0042HD
                  </Typography.Text>
                </span>
              </p>

              <p className="mt-7 flex flex-col gap-2">
                <Typography.Text type="secondary">Boleto</Typography.Text>
                <span className="flex items-center gap-1 text-2xl">
                  <IoReceiptOutline
                    className="text-zinc-400 drop-shadow-lg"
                    size={20}
                  />
                  <Typography.Text strong className="text-xl drop-shadow-lg">
                    {lastestCode?.response}
                  </Typography.Text>
                </span>
              </p>
            </div>
          </ControlPaneCard>
        </div>
        <div className="row-span-2">
          <ControlPaneCard
            href="/venta-pasajes"
            cardDescription="Porcentaje de ocupación de asientos para cada viaje, y la preferencia de los pasajeros por los asientos delanteros, traseros o del medio   "
            cardTitle="Asientos Ocupados"
          >
            <div style={{ width: "auto", paddingTop: 20 }}>
              <Typography.Text strong>Horario 20:00</Typography.Text>
              <Progress
                strokeColor={{
                  "0%": "#4096FF",
                  "100%": "#87d068",
                }}
                percent={50}
                size="small"
              />
              <Typography.Text>Horario 21:00</Typography.Text>
              <Progress
                status="active"
                percent={70}
                strokeColor={{
                  "0%": "#4096FF",
                  "100%": "#87d068",
                }}
                size="small"
              />
              <Typography.Text>Horario 21:30</Typography.Text>
              <Progress
                status="active"
                strokeColor={{
                  "0%": "#4096FF",
                  "100%": "#87d068",
                }}
                percent={30}
              />
            </div>
            <ControlPanePieChart />
          </ControlPaneCard>
        </div>
        <section className="col-span-2 ">
          <ControlPaneGraph />
        </section>
      </div>
    </AppLayout>
  );
}
