import AppLayout from "@/components/exaya/layout";
import { AIAssistantInput } from "@/components/ui/panel-de-control/ai-assistant-input";
import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { Calendar, FloatButton, Space, theme, Typography } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import React, { useState } from "react";
const { Title } = Typography;
export default function Boletos() {
  const { token } = theme.useToken();
  const [dateQuery, setDateQuery] = useState(dayjs().startOf("day"));

  const onSelect = (newValue: Dayjs) => {
    setDateQuery(newValue.startOf("day"));
  };

  const wrapperStyle: React.CSSProperties = {
    width: 400,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: "10px",
  };

  return (
    <Space
      direction="vertical"
      className="h-screen w-screen space-y-16 p-8 dark:bg-zinc-900"
    >
      <Space className="flex w-full items-center  justify-between rounded-lg border-2 border-transparent  border-opacity-50   ">
        <h3 className="text-3xl font-bold  text-primary">Expreso Ayacucho</h3>
      </Space>
      <Space className=" items-start justify-between ">
        <Space className="gap-2" direction="vertical">
          <Title level={4}>
            Salidas Diarias {dateQuery.format("DD-MM-YYYY")}
          </Title>
          <PasajesTable dayQuery={dateQuery} />
        </Space>
        <Space className="gap-2" direction="vertical">
          <Title level={4}>Calendario de Salidas</Title>
          <Calendar
            className="shadow-lg duration-300 hover:shadow-xl"
            style={wrapperStyle}
            fullscreen={false}
            onSelect={onSelect}
          />
        </Space>
      </Space>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </Space>
  );
}
