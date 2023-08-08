import React from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd/es/date-picker";

import { PasajesTable } from "@/components/ui/venta-pasajes/";
import { Title } from "@mantine/core";
import { AvailableCalendar } from "@/components/ui/encomiendas/calendar";

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
    <div className="flex gap-7 ">
      <div className="space-y-7">
        <Title order={4}>Viajes Disponibles</Title>
        <PasajesTable />
      </div>
      <AvailableCalendar />
    </div>
  );
}

export default Pasajes;
