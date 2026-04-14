import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { createFileRoute } from "@tanstack/react-router";
import { DatePicker, Space, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

export const Route = createFileRoute("/_app/pasajes")({
  component: PasajesPage,
});

function PasajesPage() {
  const [dayQuery, setDayQuery] = useState(dayjs());

  return (
    <div className="space-y-4">
      <Space className="flex flex-wrap items-center justify-between">
        <Typography.Title level={3} className="!mb-0">
          Venta de pasajes
        </Typography.Title>
        <DatePicker
          value={dayQuery}
          onChange={(d) => d && setDayQuery(d)}
          format="DD/MM/YYYY"
        />
      </Space>
      <PasajesTable dayQuery={dayQuery} />
    </div>
  );
}
