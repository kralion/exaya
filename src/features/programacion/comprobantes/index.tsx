import BoletosEncomiendasTable from "./components/boletos-encomiendas-table.";
import BoletosTable from "./components/boletos-table";
import FacturasTable from "./components/facturas-table";
import { Tabs, Typography } from "antd";

export function Comprobantes() {
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
