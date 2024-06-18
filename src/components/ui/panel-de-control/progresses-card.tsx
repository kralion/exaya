import React from "react";
import {
  Alert,
  Button,
  Card,
  Progress,
  Skeleton,
  Space,
  Typography,
} from "antd";
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
    pasajeroDni: string;
  }[];
  bus: { asientos: number };
  salida: Date;
};

type Props = {
  viajesDiarios: TViajeDiario[] | undefined;
  isLoading: boolean;
};

export const ProgressesCard = ({ viajesDiarios, isLoading }: Props) => {
  return (
    <Card
      loading={isLoading}
      className=" row-span-3 mx-auto border-1 backdrop-blur-3xl duration-200    hover:shadow-xl   dark:border-zinc-800 dark:hover:bg-black/50"
      type="inner"
      bordered={false}
      title={
        <Link
          href="/administracion"
          className="group flex items-center justify-between duration-100"
        >
          <Title level={4} className="pt-2 group-hover:opacity-70 ">
            Índice de Progreso
          </Title>
          <RxOpenInNewWindow
            className="text-black group-hover:opacity-70 dark:text-white"
            title="Ver más"
          />
        </Link>
      }
    >
      <Meta description="Porcentaje de ocupación de asientos para cada viaje, y la preferencia de los pasajeros por los asientos delanteros, traseros o del medio" />
      <Space className="my-8 w-full" direction="vertical">
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
                <Text>
                  Turno :{" "}
                  {viajeDiario.salida.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
                {isLoading ? (
                  <Skeleton.Button
                    active
                    style={{
                      width: 300,
                      borderRadius: 20,
                      height: 13,
                    }}
                  />
                ) : (
                  <Progress
                    style={{
                      width: 300,
                    }}
                    status={status}
                    strokeColor={{
                      "0%": "#4096FF",
                      "100%": "#87d068",
                    }}
                    percent={parseFloat(percent.toFixed(2))}
                  />
                )}
              </Space>
            );
          }
        )}
      </Space>
      {viajesDiarios?.length === 0 ? (
        <Alert
          className="mt-8"
          message="Progreso de los viajes programados para hoy"
          type="info"
          action={
            <Button
              type="link"
              href="/programacion/viajes"
              className="hover:underline"
            >
              Ver Más
            </Button>
          }
          showIcon
        />
      ) : (
        <ControlPanePieChart viajesDiarios={viajesDiarios} />
      )}
    </Card>
  );
};
