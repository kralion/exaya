import { TfiMoreAlt } from "react-icons/tfi";

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
import { AiFillPrinter } from "react-icons/ai";
import { TbLicense } from "react-icons/tb";

import { useNotification } from "@/context/NotificationContext";
import type { IBus, IRuta, IViaje } from "@/interfaces";
import { api } from "@/utils/api";
import { Title } from "@mantine/core";
import React, { useState } from "react";
import type { ZodNumberCheck } from "zod";
import { RegistrarPasajeModal } from "./registrar-pasaje-modal";

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
export const EncomiendasTable: React.FC = () => (
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
  const { openNotification } = useNotification();
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
            <button
              onClick={() =>
                openNotification({
                  placement: "top",
                  description:
                    "Se va a imprimir automaticamente, solo redirijase a la impresora",
                  message: "Operación Exitosa",
                  type: "success",
                })
              }
            >
              <Tag
                color="green"
                icon={<AiFillPrinter />}
                className="flex cursor-pointer items-center justify-center gap-2 hover:opacity-80"
                title="Se va a imprimir automaticamente"
                onClick={onClose}
              >
                Imprimir
              </Tag>
            </button>
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
          <Title className="mt-7" order={4}>
            Encomiendas
          </Title>
          <EncomiendasTable />
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

const viajesColumns: ColumnsType<IViaje> = [
  {
    title: "Origen",
    dataIndex: "ruta",
    key: "origen",
    render: (ruta: IRuta) => ruta.ciudadOrigen,

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

    onFilter: (value, record) =>
      record.ruta.ciudadOrigen.includes(value as string),
  },
  {
    title: "Destino",
    dataIndex: "ruta",
    key: "destino",
    responsive: ["lg"],
    render: (ruta: IRuta) => <span>{ruta.ciudadDestino}</span>,

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
    onFilter: (value, record) =>
      record.ruta?.ciudadDestino.includes(value as string),
  },
  {
    title: "Bus",
    dataIndex: "bus",
    key: "placaBus",
    responsive: ["lg"],

    render: (bus: IBus) => (
      <Tooltip className="cursor-pointer" key={bus?.id} title={bus.placa}>
        <TbLicense />
      </Tooltip>
    ),
  },
  {
    title: "Hora Salida",
    dataIndex: "horaSalida",
    key: "hora",
    responsive: ["lg"],

    render: (horaSalida: string) =>
      parseInt(horaSalida) < 18 ? (
        <Tag
          className="w-14 rounded-full text-center font-semibold text-black shadow-md"
          color="yellow-inverse"
        >
          {horaSalida}
        </Tag>
      ) : (
        <Tag className="w-14 rounded-full bg-gray-700 text-center font-semibold text-white shadow-md">
          {horaSalida}
        </Tag>
      ),
  },
  {
    title: "Tarifas",
    key: "tarifas",
    dataIndex: "tarifas",
    responsive: ["lg"],

    render: (tarifas: number[]) => (
      <>
        {tarifas?.map((tarifa) => (
          <Tag key={tarifa}>
            {tarifa.toLocaleString("es-PE", {
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

export function PasajesTable() {
  const {
    data: viajes,
    isLoading,
    isFetching,
  } = api.viajes.getAllViajes.useQuery();

  return (
    <div className="w-full">
      <Title order={5} className="mb-3.5">
        Viajes del Día
      </Title>
      {/* //TODO: The table should render the DB data */}
      <Table
        pagination={false}
        loading={
          isLoading ||
          (isFetching && {
            spinning: true,
            size: "large",
          })
        }
        columns={viajesColumns}
        dataSource={viajes}
      />
    </div>
  );
}
