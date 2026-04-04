import BoletosEncomiendasTable from "@/components/ui/programacion/comprobantes/boletos-encomiendas-table.";
import BoletosTable from "@/components/ui/programacion/comprobantes/boletos-table";
import FacturasTable from "@/components/ui/programacion/comprobantes/facturas-table";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs, Typography } from "antd";

export const Route = createFileRoute("/_app/programacion/comprobantes")({
  component: ComprobantesPage,
});

function ComprobantesPage() {
  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Comprobantes</Typography.Title>
      <Tabs
        items={[
          { key: "facturas", label: "Facturas", children: <FacturasTable /> },
          { key: "boletos", label: "Boletos", children: <BoletosTable /> },
          {
            key: "encomiendas",
            label: "Boletos encomiendas",
            children: <BoletosEncomiendasTable />,
          },
        ]}
      />
    </div>
  );
}
