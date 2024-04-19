import React from "react";
import { Card, Space, Tag } from "antd";
import { Image } from "antd";
import { BiCheckCircle, BiInfoCircle } from "react-icons/bi";
import { api } from "@/utils/api";

const { Meta } = Card;

export function BusesInformacion() {
  const { data: buses } = api.buses.getAllBuses.useQuery();
  return (
    <Space
      direction="vertical"
      size="large"
      className="grid grid-flow-row grid-cols-2 gap-5"
    >
      {buses?.map((bus) => (
        <Card
          rootClassName="shadow-md cursor-default font-semibold "
          cover={
            <Image
              src={bus.foto}
              alt="Bus preview"
              className=" object-cover"
              height={150}
              width={245}
            />
          }
          actions={[
            <Tag
              color={bus.modelo ? "green-inverse" : "red-inverse"}
              key={bus.id}
            >
              {bus.modelo ? "Activo" : "Inactivo"}
            </Tag>,
            <Tag key={bus.placa}>{bus.placa}</Tag>,
            <Tag key={bus.id}>{bus.asientos}</Tag>,
          ]}
          key={bus.placa}
          className="min-w-[245px]"
        >
          <Meta
            title={
              <p className="flex items-center gap-1.5">
                <span>
                  {bus.asientos ? (
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
                <span className="font-normal">{bus.placa}</span>
              </p>
            }
            description={
              <p>
                <span>Modelo: </span>
                <span className="font-normal">{bus.modelo}</span>
              </p>
            }
          />
        </Card>
      ))}
    </Space>
  );
}
