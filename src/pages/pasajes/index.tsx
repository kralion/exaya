import AppLayout from "@/components/exaya/layout";
import { PasajesTable } from "@/components/ui/venta-pasajes/";
import { Calendar, FloatButton, theme, Typography } from "antd";
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
      <div className="flex justify-between gap-5 ">
        <PasajesTable dayQuery={dayQuery} />
        <div className="space-y-3.5">
          <Title level={5}>Checker de Disponibilidad </Title>
          <Calendar
            className="shadow-lg duration-300 hover:shadow-xl"
            style={wrapperStyle}
            fullscreen={false}
            onSelect={onSelect}
          />
        </div>
      </div>
      <FloatButton.BackTop visibilityHeight={50} />
    </AppLayout>
  );
}

export default Pasajes;
