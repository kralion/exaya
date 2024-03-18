import { AvailableCalendar } from "@/components/ui/encomiendas/calendar";
import { PasajesTable } from "@/components/ui/venta-pasajes/";
import { FloatButton } from "antd";
import AppLayout from "../../components/layout";

function Pasajes() {
  return (
    <AppLayout>
      <div className="flex justify-between gap-5 ">
        <PasajesTable />
        <AvailableCalendar />
      </div>
      <FloatButton.BackTop visibilityHeight={50} />
    </AppLayout>
  );
}

export default Pasajes;
