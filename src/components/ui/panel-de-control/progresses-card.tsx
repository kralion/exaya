import React from "react";
import { Card, Progress, Space, Typography } from "antd";
import { RxOpenInNewWindow } from "react-icons/rx";
const { Title, Text } = Typography;
import Link from "next/link";
import ControlPanePieChart from "./piechart";
type Card = {
  cardTitle: string;
  children?: React.ReactNode;
  cardDescription: string;
  href: string;
};
const { Meta } = Card;
type TViajeDiario = {
  id: string;
  boletos: {
    id: string;
    asiento: number;
  }[];
  bus: { asientos: number };
  salida: Date;
};

type Props = {
  viajesDiarios: TViajeDiario[] | undefined;
};

export const ProgressesCard = ({ viajesDiarios }: Props) => {
  return (
    <Card
      className="row-span-3 border-1 backdrop-blur-3xl duration-200    hover:shadow-xl   dark:border-zinc-800 dark:hover:bg-black/50"
      type="inner"
      bordered={false}
      title={
        <Link
          href="/administracion"
          className="group flex items-center justify-between duration-100"
        >
          <Title level={4} className="pt-2 group-hover:opacity-70 ">
            Indice de Progreso
          </Title>
          <RxOpenInNewWindow
            className="text-black group-hover:opacity-70 dark:text-white"
            title="Ver más"
          />
        </Link>
      }
    >
      <Meta description="Porcentaje de ocupación de asientos para cada viaje, y la preferencia de los pasajeros por los asientos delanteros, traseros o del medio" />
      <div style={{ width: "auto", paddingTop: 20 }}>
        {viajesDiarios?.map(
          (viajeDiario: {
            id: string;
            boletos: {
              id: string;
              asiento: number;
            }[];
            bus: { asientos: number };
            salida: Date;
          }) => {
            const percent =
              (viajeDiario.boletos.length / viajeDiario.bus.asientos) * 100;
            const status = percent === 100 ? "success" : "active";

            return (
              <Space key={viajeDiario.id} direction="vertical" size={12}>
                <Text>Horario {viajeDiario.salida.toLocaleTimeString()}</Text>
                <Progress
                  status={status}
                  strokeColor={{
                    "0%": "#4096FF",
                    "100%": "#87d068",
                  }}
                  percent={percent}
                />
              </Space>
            );
          }
        )}
      </div>
      <ControlPanePieChart />
    </Card>
  );
};
