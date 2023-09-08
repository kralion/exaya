import React from "react";
import { Card, Space, Tag } from "antd";
import { Image } from "antd";
const { Meta } = Card;
//! - Meta component is causing an error

import { busesInfo } from "@/data";
import type { IBusConductorInfo } from "@/interfaces";

export default function BusesInformacion() {
  return (
    <Space
      direction="vertical"
      size="large"
      className="grid grid-flow-row grid-cols-2 gap-3.5"
    >
      {busesInfo.slice(0, 4).map((bus: IBusConductorInfo) => (
        <Card
          rootClassName="shadow-md "
          cover={
            <Image
              src={bus.foto_bus}
              alt="Bus preview"
              className=" h-40 w-40 object-fill"
            />
          }
          actions={[
            <Tag
              color="gold-inverse"
              className="cursor-default font-semibold"
              key={bus.estado}
            >
              {bus.estado}
            </Tag>,
            <Tag
              className="cursor-default font-semibold"
              color="gold-inverse"
              key={bus.placaBus}
            >
              {bus.placaBus}
            </Tag>,
            <Tag
              className="cursor-default font-semibold"
              color="gold-inverse"
              key={bus.ruta}
            >
              {bus.ruta}
            </Tag>,
          ]}
          className="min-w-[240px]"
          key={bus.id}
        >
          <Meta
            description={
              <div className="flex justify-between">
                <span className="font-semibold">Modelo:</span>
                <span>{bus.modelo_bus}</span>
              </div>
            }
          />
        </Card>
      ))}
    </Space>
  );
}
