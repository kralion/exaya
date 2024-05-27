import AppLayout from "@/components/exaya/layout";
import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { Calendar, FloatButton, Space, theme, Typography } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
const { Title } = Typography;
function Pasajes() {
  const { token } = theme.useToken();
  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [dayQuery, setDayQuery] = useState<Dayjs>(() =>
    dayjs().tz(currentTimezone)
  );

  const onSelect = (newValue: Dayjs) => {
    setDayQuery(newValue.tz(currentTimezone));
  };

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <AppLayout>
      <Space className="w-full items-start justify-between">
        <Space className="gap-2" direction="vertical">
          <Title level={4}>Tabla de Viajes</Title>
          <PasajesTable dayQuery={dayQuery} />
        </Space>
        <Space className="gap-2" direction="vertical">
          <Title level={4}>Tracker por Fechas</Title>
          <Calendar
            className="shadow-lg duration-300 hover:shadow-xl"
            style={wrapperStyle}
            fullscreen={false}
            onSelect={onSelect}
          />
        </Space>
      </Space>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}

export default Pasajes;
