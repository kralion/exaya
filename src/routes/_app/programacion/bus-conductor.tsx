import { BusesInformacion } from "@/components/ui/programacion/buses-info";
import { ConductoresInformacion } from "@/components/ui/programacion/conductores-info-steps";
import { createFileRoute } from "@tanstack/react-router";
import { Space, Tabs, Typography } from "antd";
import { useState } from "react";

export const Route = createFileRoute("/_app/programacion/bus-conductor")({
  component: BusConductorPage,
});

function BusConductorPage() {
  const [, setConductorIdToEdit] = useState("");
  const [, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Bus y conductor</Typography.Title>
      <Tabs
        items={[
          {
            key: "buses",
            label: "Buses",
            children: (
              <Space direction="vertical" size="large" className="w-full">
                <BusesInformacion />
              </Space>
            ),
          },
          {
            key: "conductores",
            label: "Conductores",
            children: (
              <ConductoresInformacion
                setConductorIdToEdit={setConductorIdToEdit}
                setIsModalOpen={setIsModalOpen}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
