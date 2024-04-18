import { PasajesTable } from "@/components/ui/venta-pasajes/";
import { FloatButton } from "antd";
import AppLayout from "../../components/layout";
import { Calendar, theme, Typography } from "antd";
import dayjs from "dayjs";
import React from "react";

const { Title } = Typography;
function Pasajes() {
  const { token } = theme.useToken();
  const [dayQuery, setDayQuery] = React.useState<string>("");
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
            defaultValue={dayjs()}
            onSelect={(date, { source }) => {
              if (source === "date") {
                setDayQuery(date.format("YYYY-MM-DD"));
              }
            }}
          />
        </div>
      </div>
      <FloatButton.BackTop visibilityHeight={50} />
    </AppLayout>
  );
}

export default Pasajes;
