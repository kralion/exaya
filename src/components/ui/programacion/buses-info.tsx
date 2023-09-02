import React from "react";
import { Card, Space, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "antd/es/image";
const busesInfo = [
  {
    id: 1,

    description: "Bus 1 description",
    status: "En ruta",
    model: "Scania A28",
    placa: "ABC-123",
    route: "Ruta C1",
    driver: "Conductor 1",
    preview:
      "https://img.freepik.com/premium-psd/isolated-realistic-matte-blue-city-bus-car-from-right-front-angle-view_16145-3088.jpg?size=626&ext=jpg",
  },
  {
    id: 2,

    model: "Scania Apollo C2",
    description: "Bus 1 description",
    status: "En ruta",
    route: "Ruta A1",
    placa: "ABC-123",
    driver: "Conductor 1",
    preview:
      "https://img.freepik.com/premium-psd/isolated-realistic-matte-yellow-city-bus-car-from-right-front-angle-view_16145-2762.jpg?size=626&ext=jpg",
  },
  {
    id: 3,
    model: "Mercedes Benz Tour",
    description: "Bus 1 description",
    status: "En ruta",
    placa: "ABC-123",
    route: "Ruta C3",
    driver: "Conductor 1",
    preview:
      "https://img.freepik.com/premium-psd/isolated-realistic-matte-grey-city-bus-car-from-left-front-angle-view_16145-3194.jpg?size=626&ext=jpg",
  },
  {
    id: 4,
    model: "Volvo 9700",
    description: "Bus 1 description",
    status: "En ruta",
    placa: "ABC-123",
    route: "Ruta 9",
    driver: "Conductor 1",
    preview:
      "https://img.freepik.com/premium-psd/isolated-realistic-matte-white-city-bus-car-from-left-front-angle-view_16145-3234.jpg?size=626&ext=jpg",
  },
];

export default function BusesInformacion() {
  return (
    <Space
      direction="vertical"
      size="middle"
      className="grid grid-flow-row grid-cols-2 gap-3.5"
    >
      {busesInfo.map((bus) => (
        <Card
          rootClassName="shadow-md "
          cover={
            <Image
              src={bus.preview}
              alt="Bus preview"
              className=" h-40 w-40 object-fill"
            />
          }
          actions={[
            <Tag
              color="cyan-inverse"
              className="cursor-default font-semibold"
              key={bus.status}
            >
              {bus.status}
            </Tag>,
            <Tag
              className="cursor-default font-semibold text-black"
              color="yellow-inverse"
              key={bus.placa}
            >
              {bus.placa}
            </Tag>,
            <Tag
              className="cursor-default font-semibold"
              color="volcano-inverse"
              key={bus.route}
            >
              {bus.route}
            </Tag>,
          ]}
          className="min-w-[240px]"
          key={bus.id}
        >
          <Meta
            description={
              <div className="flex justify-between">
                <span className="font-semibold">Modelo:</span>
                <span>{bus.model}</span>
              </div>
            }
          />
        </Card>
      ))}
    </Space>
  );
}
