import type { ColumnsType } from "antd/lib/table";
import type { Pasajes } from "@/interfaces/interfaces";
import { Table, Tag, Button, Drawer, Avatar, List, Tooltip } from "antd";

import Icon, {
  EyeOutlined,
  SafetyCertificateOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { dataSource } from "@/data/viajes-diarios";

import React, { useState } from "react";
import { Title } from "@mantine/core";
import type { ZodNumberCheck } from "zod";
import { RegistrarPasajeModal } from "./registrar-pasaje-modal";
import ImprimirNotification from "./imprimir-notificacion";

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
      <Button
        title="Ver Manifiesto"
        onClick={showDrawer}
        className="flex items-center justify-center"
        icon={<EyeOutlined />}
      />

      <Drawer
        title={
          <div className="flex items-center justify-between ">
            <Title className="text-left" order={4}>
              Manifiesto del Viaje
            </Title>
            <ImprimirNotification printerButton={<SnippetsOutlined />} />
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <div className="flex flex-col gap-2">
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
                    Ver Perfil
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={driver.profilePic} />}
                  title={
                    <a href="https://ant.design/index-cn">{driver.name}</a>
                  }
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

const columns: ColumnsType<Pasajes> = [
  {
    title: "Origen",
    dataIndex: "origen",
    key: "origen",
    width: 120,
  },
  {
    title: "Destino",
    dataIndex: "destino",
    key: "destino",
    width: 120,
  },
  {
    title: "Bus",
    dataIndex: "placaBus",
    key: "placaBus",

    render: (placaBus: string) => (
      <Tooltip key={placaBus} title={placaBus.toUpperCase()}>
        <Icon component={() => <SafetyCertificateOutlined />} />
      </Tooltip>
    ),
  },
  {
    title: "Hora Salida",
    dataIndex: "horaSalida",
    key: "horaSalida",
    render: (horaSalida: string) =>
      parseInt(horaSalida) < 18 ? (
        <Tag color="cyan">{horaSalida} am</Tag>
      ) : (
        <Tag color="black">{horaSalida} pm</Tag>
      ),
  },
  {
    title: "Precios",
    key: "precios",
    dataIndex: "precios",

    render: (_, { precios }) => (
      <>
        {precios.map((precio) => {
          let color;
          precio > 40 ? (color = "green") : (color = "yellow");
          return (
            <Tag color={color} key={precio}>
              {precio}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Acciones",
    key: "acciones",
    width: 200,
    render: () => (
      <div className="flex gap-7">
        <RegistrarPasajeModal />
        <ManifiestoDrawer />
      </div>
    ),
  },
];

const pasajesDiarios: Pasajes[] = dataSource;

export function PasajesTable() {
  return (
    <Table
      pagination={false}
      loading={false}
      className="rounded-md shadow-md"
      columns={columns}
      dataSource={pasajesDiarios}
    />
  );
}
