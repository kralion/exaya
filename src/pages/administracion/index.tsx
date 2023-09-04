import AppLayout from "@/components/layout";
import KpiChart from "@/components/ui/administracion/kpi-chart";
import { StatsSegments } from "@/components/ui/administracion/stats";
import AdministracionSteps from "@/components/ui/administracion/steps";
import UsuariosTable from "@/components/ui/administracion/usuarios-table";
import { mockData } from "@/data";
export default function Administracion() {
  return (
    <AppLayout>
      <UsuariosTable />
      <div className="flex gap-3.5">
        <StatsSegments {...mockData} />
        <KpiChart />
        <AdministracionSteps />
      </div>
    </AppLayout>
  );
}
