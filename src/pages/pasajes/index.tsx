import AppLayout from "@/components/common/layout";
import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { Calendar, Space, Typography } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { useState } from "react";
const { Title } = Typography;
function Pasajes() {
  const [dateQuery, setDateQuery] = useState(dayjs().startOf("day"));

  const onSelect = (newValue: Dayjs) => {
    setDateQuery(newValue.startOf("day"));
  };

  return (
    <AppLayout>
      <Space className="flex flex-col items-start justify-between gap-4 lg:flex-row">
        <Space className="gap-2" direction="vertical">
          <Title level={5}>Tabla de Viajes</Title>
          <PasajesTable dayQuery={dateQuery} />
        </Space>
        <Space className="gap-2 " direction="vertical">
          <Title level={5}>Buscar por Fechas</Title>
          <Calendar
            className=" max-w-[400px] overflow-auto rounded-lg border shadow duration-300  dark:border-zinc-800"
            fullscreen={false}
            onSelect={onSelect}
          />
        </Space>
      </Space>
    </AppLayout>
  );
}

export default Pasajes;
