import { Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { LuSettings } from "react-icons/lu";
import React from "react";
import { api } from "@/utils/api";
const { Title, Text } = Typography;

const columns: ColumnsType = [
  {
    title: "Código",
    children: [
      {
        title: "Serie",
        dataIndex: "serie",
        key: "serie",
        responsive: ["lg"],
      },
      {
        title: "Codigo",
        dataIndex: "codigo",
        key: "codigo",
        responsive: ["lg"],
      },
    ],
  },
  {
    title: "Razón Social",
    dataIndex: "ruc",
  },
  {
    title: "Agencia",
    dataIndex: "viaje",
    render: (viaje: { usuario: { sedeDelegacion: string } }) => {
      return <Text>{viaje.usuario.sedeDelegacion}</Text>;
    },
  },

  {
    title: "Viaje",
    key: "viaje",
    dataIndex: "viaje",
    render: (viaje: {
      ruta: { ciudadOrigen: string; ciudadDestino: string };
    }) => {
      return (
        <Text>
          {viaje.ruta.ciudadOrigen} - {viaje.ruta.ciudadDestino}
        </Text>
      );
    },
  },

  {
    title: "Fecha Emisión",
    dataIndex: "fechaEnvío",
    render: (fechaEnvio: string) => {
      return <Text>{new Date(fechaEnvio).toLocaleDateString()}</Text>;
    },
  },
  {
    title: "Precio",
    key: "precio",
    dataIndex: "precio",
    render: (precio: number) => {
      return (
        <Tag>
          {precio.toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
          })}
        </Tag>
      );
    },
  },
];

const handleConfigurar = () => {
  alert("Configurar");
};
export default function FacturasTable() {
  const { data: facturas } =
    api.encomiendas.getAllFacturasEncomiendas.useQuery();
  return (
    <div className="my-7 space-y-3.5">
      <div className="flex justify-between">
        <Title level={5}>Facturas Recientes</Title>
        <LuSettings
          className="cursor-not-allowed hover:opacity-70"
          title="Configurar"
          onClick={handleConfigurar}
          size={20}
        />
      </div>

      <Table
        columns={columns}
        pagination={{
          defaultPageSize: 3,
          position: ["bottomRight"],
          pageSizeOptions: ["3", "6", "9"],
          showSizeChanger: true,
        }}
        dataSource={facturas}
      />
    </div>
  );
}
