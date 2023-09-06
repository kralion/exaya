import { facturasRegistradas } from "@/data";
import type { IFactura } from "@/interfaces";
import { Title } from "@mantine/core";
import { Button, Popconfirm, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { SettingOutlined } from "@ant-design/icons";

type IProducto = {
  nombre: number;
  cantidad: string;
  precio_unitario: number;
};

const columns: ColumnsType<IFactura> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
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
        title: "Total",
        dataIndex: "total",
        key: "total",
        render: (total: number) => (
          <Tag className="rounded-full font-semibold shadow-md" key={total}>
            {total.toLocaleString("es-PE", {
              style: "currency",
              currency: "PEN",
            })}
          </Tag>
        ),
      },
    ],
  },

  {
    title: "Accciones",
    key: "acciones",
    render: () => {
      const cancel = () => {
        console.log("Cancelado");
      };
      return (
        <Popconfirm
          okButtonProps={{
            style: {
              backgroundColor: "#f5222d",
              color: "white",
              borderRadius: "5px",
              border: "none",
            },
          }}
          title="Estás segur@ ?"
          onConfirm={cancel}
        >
          <Button danger type="link">
            Eliminar
          </Button>
        </Popconfirm>
      );
    },
  },
];

const data: IFactura[] = [...facturasRegistradas];
const handleConfigurar = () => {
  alert("Configurar");
};
const FacturasTable: React.FC = () => (
  <div className="my-7 space-y-3.5">
    <div className="flex justify-between">
      <Title order={5}>Facturas Recientes</Title>
      <SettingOutlined
        onClick={handleConfigurar}
        title="Configurar"
        className="cursor-pointer duration-200 hover:text-blue-500 "
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
      dataSource={data}
    />
  </div>
);

export default FacturasTable;
