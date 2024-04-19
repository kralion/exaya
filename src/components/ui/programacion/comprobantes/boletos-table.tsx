import { LuSettings } from "react-icons/lu";
import { Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { api } from "@/utils/api";
const { Title } = Typography;
const columns: ColumnsType = [
  {
    title: "Código",
    dataIndex: "id",
    key: "id",
    render: (id: string) => <span>B003-{id}</span>,
  },

  {
    title: "Estado",
    key: "estado",
    dataIndex: "estado",
    render: (estado: string) => (
      <Tag
        className="rounded-full font-semibold shadow-md"
        color={
          estado === "Pagado"
            ? "green-inverse"
            : estado === "Reservado"
            ? "orange-inverse"
            : "red"
        }
        key={estado}
      >
        {estado.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "DNI Cliente",
    dataIndex: "id_cliente",
    key: "id_cliente",
  },
  {
    title: "Fecha Emisión",
    dataIndex: "created_at",
    key: "created_at",
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

export default function ComprobantesTable() {
  const { data: boletos } = api.boletos.getAllBoletos.useQuery();
  return (
    <div className="space-y-3.5">
      <div className="flex justify-between">
        <Title level={5}>Boletos Recientes</Title>
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
        dataSource={boletos}
      />
    </div>
  );
}
