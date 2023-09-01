import React from "react";
import type { DatePickerProps } from "antd/es/date-picker";

import { PasajesTable } from "@/components/ui/venta-pasajes/";
import { Title } from "@mantine/core";
import { AvailableCalendar } from "@/components/ui/encomiendas/calendar";
import AppLayout from "../layout";

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
      <div className="flex justify-between ">
        <PasajesTable />
        <AvailableCalendar />
      </div>
    </AppLayout>
  );
}

export default Pasajes;
