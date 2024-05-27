import AppLayout from "@/components/exaya/layout";
import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { Calendar, FloatButton, Space, theme, Typography } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
import React, { useState } from "react";
const { Title } = Typography;
function Pasajes() {
  const { token } = theme.useToken();
  const initialDate = dayjs(new Date()).utc().subtract(5, "hours");
  const [dateQuery, setDateQuery] = useState(initialDate);

  const onSelect = (newValue: Dayjs) => {
    const utcDate = newValue.utc();

    const adjusted = utcDate.subtract(5, "hours");

    setDateQuery(adjusted);
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
          <PasajesTable dayQuery={dateQuery} />
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
