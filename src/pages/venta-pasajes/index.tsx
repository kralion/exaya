import type { DatePickerProps } from "antd/es/date-picker";

import { AvailableCalendar } from "@/components/ui/encomiendas/calendar";
import { PasajesTable } from "@/components/ui/venta-pasajes/";
import { FloatButton } from "antd";
import AppLayout from "../../components/layout";

const onChange = (
  value: DatePickerProps["value"],
  dateString: [string, string] | string
) => {
  console.log("Fecha seleccionada: ", dateString);
};

const onOk = (value: DatePickerProps["value"]) => {
  console.log("onOk: ", value);
};

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
