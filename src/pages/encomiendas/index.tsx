import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { FloatButton } from "antd";
import AppLayout from "../../components/layout";

function Encomiendas() {
  return (
    <AppLayout>
      <div className="space-y-3.5">
        <EncomiendasForm />
        <EncomiendasTable />
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
    </AppLayout>
  );
}

export default Encomiendas;
