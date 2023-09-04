import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { Title } from "@mantine/core";
import AppLayout from "../../components/layout";
import { FloatButton } from "antd";

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
