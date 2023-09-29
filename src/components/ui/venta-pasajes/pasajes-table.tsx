// import { dataSource } from "@/data/viajes-diarios";
import { viajesDiarios as dataSource } from "@/data";
import type { Pasajes } from "@/interfaces/interfaces";
import { TfiMoreAlt } from "react-icons/tfi";

import { TbLicense } from "react-icons/tb";
import { AiFillPrinter } from "react-icons/ai";
import {
  Avatar,
  Drawer,
  Dropdown,
  List,
  Progress,
  Table,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import type { ColumnsType } from "antd/es/table";

import type { IViaje } from "@/interfaces";
import { Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import type { ZodNumberCheck } from "zod";
import Notification from "../notification";
import { RegistrarPasajeModal } from "./registrar-pasaje-modal";
import { supabase } from "@/libs";

interface ManifiestoDataType {
  dni: number extends ZodNumberCheck ? number : string;
  nombres: string;
  apellidos: string;
  asiento: number;
  precio: number;
}

const manifiestoColumns: ColumnsType<ManifiestoDataType> = [
  {
    title: "Nombres ",
    dataIndex: "nombres",
    key: "nombres",
    responsive: ["lg"],
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Apellidos",
    dataIndex: "apellidos",
    key: "apellidos",
    responsive: ["lg"],
    render: (text) => <a>{text}</a>,
  },
  {
    title: "N° Asiento ",
    dataIndex: "asiento",
    key: "asiento",
    responsive: ["md"],
  },
  {
    title: "Precio",
    dataIndex: "precio",
    key: "precio",
    responsive: ["md"],
    render: (precio: number) => (
      <Tag>
        {precio.toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
        })}
      </Tag>
    ),
  },
  {
    title: "DNI / Pasaporte",
    dataIndex: "dni",
    key: "dni",
    responsive: ["md"],
  },
];

const pasajeros: ManifiestoDataType[] = [
  {
    dni: "12345678",
    nombres: "Hugo",
    apellidos: "Fernandez Saavedra",
    asiento: 32,
    precio: 40,
  },
  {
    dni: "12345678",
    nombres: "Sofía",
    apellidos: "Montesinos Rodríguez",
    asiento: 14,
    precio: 40,
  },
  {
    dni: "12345678",
    nombres: "Martín",
    apellidos: "García Alvarado",
    asiento: 25,
    precio: 45,
  },

  {
    dni: "12345678",
    nombres: "Valentina",
    apellidos: "Huamaní Salcedo",
    asiento: 35,
    precio: 50,
  },
  {
    dni: "12345678",
    nombres: "Ana María",
    apellidos: "Vargas Chávez",
    asiento: 7,
    precio: 45,
  },
  {
    dni: "12345678",
    nombres: "Martín",
    apellidos: "García Alvarado",
    asiento: 25,
    precio: 45,
  },

  {
    dni: "12345678",
    nombres: "Valentina",
    apellidos: "Huamaní Salcedo",
    asiento: 35,
    precio: 50,
  },
  {
    dni: "12345678",
    nombres: "Ana María",
    apellidos: "Vargas Chávez",
    asiento: 7,
    precio: 45,
  },
];

export const ManifiestoTable: React.FC = () => (
  <Table
    pagination={{
      defaultPageSize: 5,
      position: ["bottomRight"],
      pageSizeOptions: ["5", "10", "20", "50"],
      showSizeChanger: true,
    }}
    columns={manifiestoColumns}
    dataSource={pasajeros}
  />
);

const ManifiestoDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        title="Ver Manifiesto"
        onClick={showDrawer}
        className="flex items-center justify-center"
      >
        Ver Manifiesto
      </Typography>

      <Drawer
        title={
          <div className="flex items-center justify-between ">
            <Title className="text-left" order={4}>
              Manifiesto del Viaje
            </Title>
            <Notification
              printerButton={
                <Tag
                  color="green"
                  icon={<AiFillPrinter />}
                  className="flex cursor-pointer items-center justify-center gap-2 hover:opacity-80"
                  title="Se va a imprimir automaticamente"
                  onClick={onClose}
                >
                  Imprimir
                </Tag>
              }
            />
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <div className="flex flex-col gap-2">
          <Progress status="active" percent={50} size={[680, 10]}>
            <Title order={5}>{"Viaje de Lima a Arequipa - 10/10/2021"}</Title>
          </Progress>

          <Title order={4}>Conductores</Title>

          <List
            dataSource={[
              {
                id: 1,
                name: "Rafael Paredes",
                profilePic: "https://randomuser.me/api/portraits/men/46.jpg",
                license: "A III-C",
              },
              {
                id: 2,
                name: "Lorenzo Armendari",
                profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
                license: "B II-C",
              },
              {
                id: 1,
                name: "Julio Jaramillo",
                profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
                license: "A II-C",
              },
            ]}
            bordered
            renderItem={(driver, index) => (
              <List.Item
                key={index}
                actions={[
                  <a
                    href="https://www.sutran.gob.pe/informacion-del-conductor-y-bus-de-tu-viaje/"
                    target="_blank"
                    rel="noreferrer"
                    key={`a-${driver.id}`}
                  >
                    Ver Informacion
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      className="h-12 w-12 border-slate-400"
                      src={driver.profilePic}
                    />
                  }
                  title={<span>{driver.name}</span>}
                  description={`Conductor con licencia ${driver.license}`}
                />
              </List.Item>
            )}
          />
          <Title className="mt-7" order={4}>
            Pasajeros
          </Title>
          <ManifiestoTable />
        </div>
      </Drawer>
    </>
  );
};

const items = [
  {
    key: "1",
    label: <RegistrarPasajeModal />,
  },
  {
    key: "2",
    label: <ManifiestoDrawer />,
  },
];

const columns: ColumnsType<Pasajes> = [
  {
    title: "Origen",
    dataIndex: "origen",
    key: "origen",

    filters: [
      {
        text: "Huancayo",
        value: "Huancayo",
      },
      {
        text: "Ayacucho",
        value: "Ayacucho",
      },
    ],
    filterSearch: true,

    onFilter: (value, record) => record.origen.includes(value as string),
  },
  {
    title: "Destino",
    dataIndex: "destino",
    key: "destino",
    responsive: ["lg"],

    filters: [
      {
        text: "Huancayo",
        value: "Huancayo",
      },
      {
        text: "Ayacucho",
        value: "Ayacucho",
      },
      {
        text: "Lima",
        value: "Lima",
      },
    ],

    filterSearch: true,
    onFilter: (value, record) => record.destino.includes(value as string),
  },
  {
    title: "Bus",
    dataIndex: "placaBus",
    key: "placaBus",
    responsive: ["lg"],

    render: (placaBus: string) => (
      <Tooltip key={placaBus} title={placaBus.toUpperCase()}>
        <TbLicense />
      </Tooltip>
    ),
  },
  {
    title: "Hora Salida",
    dataIndex: "horaSalida",
    key: "horaSalida",
    responsive: ["lg"],

    render: (horaSalida: string) =>
      parseInt(horaSalida) < 18 ? (
        <Tag
          className="rounded-full font-semibold shadow-md"
          color="green-inverse"
        >
          {horaSalida} am
        </Tag>
      ) : (
        <Tag
          className="rounded-full font-semibold shadow-md"
          color="volcano-inverse"
        >
          {horaSalida} pm
        </Tag>
      ),
  },
  {
    title: "Precios",

    key: "precios",
    dataIndex: "precios",
    responsive: ["lg"],

    render: (_, { precios }) => (
      <>
        {precios.map((precio) => (
          <Tag key={precio}>
            {precio.toLocaleString("es-PE", {
              style: "currency",
              currency: "PEN",
            })}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: "",
    key: "acciones",
    responsive: ["lg"],
    render: () => (
      <Dropdown menu={{ items }}>
        <TfiMoreAlt className="cursor-pointer" />
      </Dropdown>
    ),
  },
];

const salidasDiariasColumns: ColumnsType<IViaje> = [
  {
    title: "ID Viaje",
    dataIndex: "id_viaje",
    key: "id_viaje",
  },
  {
    title: "ID Ruta",
    dataIndex: "id_ruta",
    key: "id_ruta",
  },
];

const pasajesDiarios: Pasajes[] = dataSource;

export function PasajesTable() {
  const { data, isLoading, isError } = useQuery(["viajes"], async () => {
    const response = await fetch("/api/viajes");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    return data;
  });

  return (
    <div className="w-full">
      <Title order={5} className="mb-3.5">
        Pasajes Diarios
      </Title>
      {isError && <div>Error al cargar los datos</div>}
      <Table
        pagination={false}
        loading={
          // isLoading && {
          //   spinning: true,
          //   size: "large",
          // }
          false
        }
        columns={columns}
        dataSource={pasajesDiarios}
      />
      <Table
        pagination={false}
        loading={
          isLoading && {
            spinning: true,
            size: "large",
          }
        }
        columns={salidasDiariasColumns}
        dataSource={data as IViaje[]}
      />
    </div>
  );
}
