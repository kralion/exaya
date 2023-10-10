import { EncomiendasForm } from "@/components/ui/encomiendas/form";
import { EncomiendasTable } from "@/components/ui/encomiendas/table";
import { FloatButton } from "antd";
import AppLayout from "../../components/layout";
import AppHead from "@/components/head";
import { EncomiendasContextProvider } from "@/context/EncomiendasContext";

function Encomiendas() {
  return (
    <AppLayout>
      <AppHead title="Encomiendas" />
      <EncomiendasContextProvider>
        <div className="space-y-3.5">
          <EncomiendasForm />
          <EncomiendasTable />
        </div>
      </EncomiendasContextProvider>
      <FloatButton.BackTop visibilityHeight={0} />
    </AppLayout>
  );
}

export default Encomiendas;
