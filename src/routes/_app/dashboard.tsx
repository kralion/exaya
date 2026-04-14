import ControlPaneGraph from "@/components/ui/panel-de-control/graph";
import { ControlPaneCard } from "@/components/ui/panel-de-control/control-pane-card";
import { ProgressesCard } from "@/components/ui/panel-de-control/progresses-card";
import { api } from "@/utils/api";
import { createFileRoute } from "@tanstack/react-router";
import dayjs from "dayjs";
import { Col, Row } from "antd";

export const Route = createFileRoute("/_app/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data, isLoading } = api.viajes.getViajesByDate.useQuery({
    date: dayjs().format("YYYY-MM-DD"),
  });
  const viajesDiarios = data?.response;

  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <ControlPaneGraph />
        </Col>
        <Col xs={24} lg={12}>
          <ProgressesCard viajesDiarios={viajesDiarios} isLoading={isLoading} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <ControlPaneCard
            cardTitle="Ventas de pasajes"
            cardDescription="Gestión y registro de ventas de pasajes"
            href="/pasajes"
          />
        </Col>
        <Col xs={24} md={8}>
          <ControlPaneCard
            cardTitle="Encomiendas"
            cardDescription="Seguimiento y registro de encomiendas"
            href="/encomiendas"
          />
        </Col>
        <Col xs={24} md={8}>
          <ControlPaneCard
            cardTitle="Programación"
            cardDescription="Viajes, comprobantes y flota"
            href="/programacion/viajes"
          />
        </Col>
      </Row>
    </div>
  );
}
