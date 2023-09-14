import BoletoIcon from "@/assets/icons/boleto.png";
import FacturaIcon from "@/assets/icons/factura.png";
import { ControlPaneCard } from "@/components/ui/panel-de-control/control-pane-card";
import ControlPaneGraph from "@/components/ui/panel-de-control/graph";
import ControlPanePieChart from "@/components/ui/panel-de-control/piechart";
import { FieldTimeOutlined } from "@ant-design/icons";
import { Progress, Statistic, Typography } from "antd";
import Image from "next/image";
import AppLayout from "../../components/layout";

const totalViajesProgramados = 12;
const viajesActivos = 9;
export default function Dashboard() {
  return (
    <AppLayout>
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
                prefix={<FieldTimeOutlined style={{ color: "red" }} />}
              />

              <Statistic
                className="drop-shadow-lg"
                title="Activos"
                value={viajesActivos}
                suffix={`/${totalViajesProgramados}`}
              />
            </div>
          </ControlPaneCard>
        </div>
        <div className=" duration-200">
          <ControlPaneCard
            href="/venta-pasajes"
            cardDescription="Último código de boleto de viaje vendido y última factura generada registrados en el sistema, con su respectivo número de serie."
            cardTitle="Boletos"
          >
            <div className=" flex items-center justify-between font-semibold">
              <p className="mt-7 flex flex-col gap-2">
                <Typography.Text type="secondary">Factura</Typography.Text>
                <span className="flex items-center gap-1 text-2xl">
                  <Image
                    src={FacturaIcon}
                    className="drop-shadow-lg"
                    width={17}
                    height={17}
                    alt="icon"
                  />
                  <Typography.Text strong className="text-xl drop-shadow-lg">
                    F0042HD
                  </Typography.Text>
                </span>
              </p>

              <p className="mt-7 flex flex-col gap-2">
                <Typography.Text type="secondary">Boleto</Typography.Text>
                <span className="flex items-center gap-1 text-2xl">
                  <Image
                    src={BoletoIcon}
                    className="drop-shadow-lg"
                    width={17}
                    height={17}
                    alt="icon"
                  />
                  <Typography.Text strong className="text-xl drop-shadow-lg">
                    B023DF
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
            <div style={{ width: 170, paddingTop: 17 }}>
              <Typography.Text strong>Horario 20:00</Typography.Text>
              <Progress
                strokeColor={{
                  "0%": "#4096FF",
                  "100%": "#87d068",
                }}
                percent={100}
                size="small"
              />
              <Typography.Text>Horario 21:00</Typography.Text>
              <Progress
                percent={70}
                strokeColor={{
                  "0%": "#4096FF",
                  "100%": "#87d068",
                }}
                size="small"
              />
              <Typography.Text>Horario 21:30</Typography.Text>
              <Progress
                strokeColor={{
                  "0%": "#4096FF",
                  "100%": "#87d068",
                }}
                percent={30}
                size="small"
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
