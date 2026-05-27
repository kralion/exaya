import LandingLayout from "@/components/landing/landing-layout";
import { PasajesTable } from "@/features/pasajes/components/pasajes-table";
import { createFileRoute } from "@tanstack/react-router";
import { DatePicker, Space, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

export const Route = createFileRoute("/boletos/")({
  component: BoletosPublicPage,
});

function BoletosPublicPage() {
  const [dayQuery, setDayQuery] = useState(dayjs());

  return (
    <LandingLayout>
      <Typography.Title level={2}>Boletos</Typography.Title>
      <Typography.Paragraph>
        Consulta los viajes disponibles y compra tu pasaje.
      </Typography.Paragraph>
      <Space className="mb-6">
        <DatePicker
          value={dayQuery}
          onChange={(d) => d && setDayQuery(d)}
          format="DD/MM/YYYY"
        />
      </Space>
      <PasajesTable dayQuery={dayQuery} />
    </LandingLayout>
  );
}
