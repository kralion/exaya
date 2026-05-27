import { BusesInformacion } from "./components/buses-info";
import { ConductoresInformacion } from "./components/conductores-info-steps";
import { Space, Tabs, Typography } from "antd";
import { useState } from "react";

export function BusConductor() {
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
