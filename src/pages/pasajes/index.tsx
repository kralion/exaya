import AppLayout from "@/components/exaya/layout";
import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { Calendar, FloatButton, Space, theme, Typography } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import React, { useState } from "react";
const { Title } = Typography;
function Pasajes() {
  const { token } = theme.useToken();
  const [dateQuery, setDateQuery] = useState(dayjs().startOf("day"));

  const onSelect = (newValue: Dayjs) => {
    setDateQuery(newValue.startOf("day"));
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
