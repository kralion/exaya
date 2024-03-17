import React from "react";
import { Card, Space, Tag } from "antd";
import { Image } from "antd";
import { busesInfo } from "@/data";
import { BiCheckCircle, BiInfoCircle } from "react-icons/bi";
import { api } from "@/utils/api";

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
  const data = api.buses.getAllBuses.useQuery();
  console.log(data.data?.length);
  return (
    <Space
      direction="vertical"
      size="large"
      className="grid grid-flow-row grid-cols-2 gap-5"
    >
      {busesInfo.map((viaje: TBusInfo) => (
        <Card
          rootClassName="shadow-md cursor-default font-semibold "
          cover={
            <Image
              src={viaje.bus.foto}
              alt="Bus preview"
              className=" object-cover"
              height={150}
              width={245}
            />
          }
          actions={[
            <Tag
              color={viaje.activo ? "green-inverse" : "red-inverse"}
              key={viaje.id}
            >
              {viaje.activo ? "Activo" : "Inactivo"}
            </Tag>,
            <Tag key={viaje.bus.placa}>{viaje.bus.placa}</Tag>,
            <Tag key={viaje.ruta.id}>{viaje.ruta.rutaSerie}</Tag>,
          ]}
          key={viaje.bus.placa}
          className="min-w-[245px]"
        >
          <Meta
            title={
              <p className="flex items-center gap-1.5">
                <span>
                  {viaje.activo ? (
                    <BiCheckCircle
                      title="El vehiculo está en recorrido"
                      size={20}
                      className="rounded-full text-green-500 duration-200 hover:bg-green-500 hover:text-white "
                    />
                  ) : (
                    <BiInfoCircle
                      title="Pasó algo con el vehículo"
                      size={20}
                      className="rounded-full text-red-500 duration-200 hover:bg-red-500 hover:text-white"
                    />
                  )}
                </span>
                <span className="font-normal">{viaje.bus.placa}</span>
              </p>
            }
            description={
              <p>
                <span>Modelo: </span>
                <span className="font-normal">
                  {viaje.bus.modelo || "Stándar"}
                </span>
              </p>
            }
          />
        </Card>
      ))}
    </Space>
  );
}
