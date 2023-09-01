import { Title } from "@mantine/core";
import { Calendar, theme } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Dayjs } from "dayjs";
import React from "react";

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

export function AvailableCalendar() {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div className="space-y-3.5">
      <Title order={4}>Checker de Disponibilidad </Title>
      <Calendar
        dateCellRender={(value) => {
          return (
            <div className="flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-blue-500"></div>
            </div>
          );
        }}
        className="hidden duration-300 hover:scale-105  hover:shadow-lg lg:block"
        style={wrapperStyle}
        fullscreen={false}
        onSelect={(value: Dayjs) => alert(value.format("YYYY-MM-DD"))}
        onPanelChange={onPanelChange}
      />
    </div>
  );
}
