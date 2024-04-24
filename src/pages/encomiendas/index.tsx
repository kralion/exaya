import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { FloatButton } from "antd";
import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";

function Encomiendas() {
  return (
    <AppLayout>
      <AppHead title="Encomiendas" />
      <div className="space-y-3.5">
        <EncomiendasForm />
        <EncomiendasTable />
      </div>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}

export default Encomiendas;
