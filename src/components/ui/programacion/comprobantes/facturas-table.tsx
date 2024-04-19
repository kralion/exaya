import { Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { LuSettings } from "react-icons/lu";
import React from "react";
import { api } from "@/utils/api";
const { Title } = Typography;
type IProducto = {
  nombre: number;
  cantidad: string;
  precio_unitario: number;
};

const columns: ColumnsType = [
  {
    title: "Código",
    dataIndex: "id",
    key: "id",
    render: (id: string) => <span>F004-{id}</span>,
  },
  {
    title: "Fecha Emisión",
    dataIndex: "fecha_emision",
    key: "fecha_emision",
  },
  {
    title: "Tipo Cliente",
    dataIndex: "tipo_cliente",
    key: "tipo_cliente",
    render: (tipoCliente: string) => (
      <div>
        {tipoCliente === "Empresa" ? (
          <span className="font-semibold">{tipoCliente}</span>
        ) : (
          <span>{tipoCliente}</span>
        )}
      </div>
    ),
  },
  {
    title: "Concepto",
    dataIndex: "concepto",
    key: "concepto",
    render: (concepto: string) => (
      <Tag
        className="rounded-full px-2 font-semibold shadow-md"
        color={concepto === "Encomienda" ? "green-inverse" : "blue-inverse"}
        key={concepto}
      >
        {concepto}
      </Tag>
    ),
  },

  {
    title: "Detalles",
    children: [
      {
        title: "Paquetes",
        dataIndex: "productos",
        key: "productos",
        render: (productos: IProducto[]) => {
          return productos.map((producto) => {
            return <Tag key={producto.cantidad}>{producto.cantidad}</Tag>;
          });
        },
      },
      {
        title: "RUC",
        dataIndex: "ruc_cliente",
        key: "ruc_cliente",
      },
    ],
  },

  {
    title: "Total",
    key: "total",
    dataIndex: "total",
    render: (total: number) => {
      return (
        <Tag>
          {total.toLocaleString("es-PE", {
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
  const { data: facturas } = api.boletos.getAllBoletos.useQuery();
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
