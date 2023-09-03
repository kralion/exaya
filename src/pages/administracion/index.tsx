import KpiChart from "@/components/ui/administracion/kpi-chart";
import { StatsSegments } from "@/components/ui/administracion/stats";
import Usuarios from "@/components/ui/administracion/usuarios";
import { Title } from "@mantine/core";
import React from "react";
import { mockData } from "@/data";
import AppLayout from "@/components/layout";
export default function Administracion() {
  return (
    <AppLayout>
      <Usuarios />
      <StatsSegments {...mockData} />
      <KpiChart />
    </AppLayout>
  );
}
