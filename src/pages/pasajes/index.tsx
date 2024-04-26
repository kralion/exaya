import AppLayout from "@/components/exaya/layout";
import { PasajesTable } from "@/components/ui/venta-pasajes/";
import { Calendar, FloatButton, Space, theme, Typography } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useState } from "react";

const { Title } = Typography;
function Pasajes() {
  const { token } = theme.useToken();
  const [dayQuery, setDayQuery] = useState(() => dayjs());

  const onSelect = (newValue: Dayjs) => {
    setDayQuery(newValue);
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
          <Title level={4}>Viajes del Día</Title>
          <PasajesTable dayQuery={dayQuery} />
        </Space>
        <Space className="gap-2" direction="vertical">
          <Title level={4}>Checker de Disponibilidad </Title>
          <Calendar
            className="shadow-lg duration-300 hover:shadow-xl"
            style={wrapperStyle}
            fullscreen={false}
            onSelect={onSelect}
          />
        </Space>
      </Space>
      <FloatButton.BackTop visibilityHeight={50} />
    </AppLayout>
  );
}

export default Pasajes;
