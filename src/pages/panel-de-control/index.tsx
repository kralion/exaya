import { ControlPaneCard } from "~/components/ui/panel-de-control/control-pane-card";
import { Title } from "@mantine/core";
import { Progress, Statistic, Typography } from "antd";
import { FieldTimeOutlined, ContainerOutlined } from "@ant-design/icons";
import { AIAssistantInput } from "~/components/ui/panel-de-control/ai-assistant-input";

const totalViajesProgramados = 4;
const viajesActivos = 2;
function PanelControl() {
  return (
    <div className="flex flex-col gap-7 ">
      <div className="flex justify-between">
        <Title order={4}>Panel de Control</Title>
        <AIAssistantInput />
      </div>

      <div className="flex gap-7">
        <ControlPaneCard
          cardTitle="Viajes"
          cardDescription="Información sobre la cantidad de viajes programados para hoy"
        >
          <div className="flex justify-between pt-7">
            <Statistic
              title="Programados"
              value={totalViajesProgramados}
              prefix={<FieldTimeOutlined className="mr-3 flex items-stretch" />}
            />

            <Statistic
              title="Activos"
              value={viajesActivos}
              suffix={`/ ${totalViajesProgramados}`}
            />
          </div>
        </ControlPaneCard>
        <ControlPaneCard
          cardDescription="Último código de boleto de viaje vendido."
          cardTitle="Boletos"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3 pt-7">
              <Typography.Text type="secondary">Factura</Typography.Text>
              <div className="flex items-center gap-1 text-2xl">
                <ContainerOutlined />
                <Typography.Text strong className="text-xl">
                  F003125
                </Typography.Text>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-7">
              <Typography.Text type="secondary">Boleta</Typography.Text>
              <div className="flex items-center gap-1 text-2xl">
                <ContainerOutlined />
                <Typography.Text strong className="text-xl">
                  B003548
                </Typography.Text>
              </div>
            </div>
          </div>
        </ControlPaneCard>
        <ControlPaneCard
          cardDescription="Porcentaje de ocupación de asientos para cada viaje."
          cardTitle="Asientos Ocupados"
        >
          <div style={{ width: 170, paddingTop: 28 }}>
            <Typography.Text strong>Horario 20:00</Typography.Text>
            <Progress percent={100} size="small" />
            <Typography.Text>Horario 21:00</Typography.Text>
            <Progress percent={70} size="small" />
            <Typography.Text>Horario 21:30</Typography.Text>
            <Progress percent={30} size="small" />
          </div>
        </ControlPaneCard>
      </div>
    </div>
  );
}

export default PanelControl;
