import KpiChart from "@/components/ui/administracion/kpi-chart";
import { StatsSegments } from "@/components/ui/administracion/stats";
import UsuariosTable from "@/components/ui/administracion/usuarios-table";
import { Title } from "@mantine/core";
import React from "react";
import { mockData } from "@/data";
import AppLayout from "@/components/layout";
export default function Administracion() {
  return (
    <AppLayout>
      <UsuariosTable />
      <StatsSegments {...mockData} />
      <KpiChart />
    </AppLayout>
  );
}
