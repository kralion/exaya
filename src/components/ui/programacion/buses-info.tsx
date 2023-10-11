import React from "react";
import { Card, Space, Tag } from "antd";
import { Image } from "antd";
import { busesInfo } from "@/data";

type TBusInfo = {
  id: string;
  bus: {
    placa: string;
    foto: string;
    modelo: string;
  };
  ruta: {
    id: string;
    rutaSerie: string;
  };
  activo: boolean;
};

const { Meta } = Card;

export function BusesInformacion() {
  return (
    <Space
      direction="vertical"
      size="large"
      className="grid grid-flow-row grid-cols-2 gap-7"
    >
      {busesInfo.map((viaje: TBusInfo) => (
        <Card
          rootClassName="shadow-md cursor-default font-semibold "
          cover={
            <Image
              src={viaje.bus.foto}
              alt="Bus preview"
              className=" h-40 w-40 object-fill"
            />
          }
          actions={[
            <Tag color="gold-inverse" key={viaje.id}>
              {viaje.activo ? "Activo" : "Inactivo"}
            </Tag>,
            <Tag color="gold-inverse" key={viaje.bus.placa}>
              {viaje.bus.placa}
            </Tag>,
            <Tag color="gold-inverse" key={viaje.ruta.id}>
              {viaje.ruta.rutaSerie}
            </Tag>,
          ]}
          key={viaje.bus.placa}
          className="min-w-[230px]"
        >
          <Meta
            description={
              <div className="flex justify-between">
                <span className="font-semibold">Modelo:</span>
                <span>{viaje.bus.modelo || "Stándar"}</span>
              </div>
            }
          />
        </Card>
      ))}
    </Space>
  );
}
