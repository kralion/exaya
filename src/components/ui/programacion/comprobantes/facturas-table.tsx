import { facturasRegistradas } from "@/data";
import type { IFactura } from "@/interfaces";
import { Title } from "@mantine/core";
import { Button, Popconfirm, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

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
    title: "Detalles de Envío",
    children: [
      {
        title: "Productos",
        dataIndex: "productos",
        key: "productos",
        render: (productos: IProducto[]) => {
          return productos.map((producto) => {
            return <Tag key={producto.nombre}>{producto.nombre}</Tag>;
          });
        },
      },
      {
        title: "Precios",
        dataIndex: "productos",
        key: "productos",
        render: (productos: IProducto[]) => {
          return productos.map((producto) => {
            return (
              <Tag
                className="rounded-full font-semibold shadow-md"
                color="green"
                key={producto.precio_unitario}
              >
                {producto.precio_unitario.toLocaleString("es-PE", {
                  style: "currency",
                  currency: "PEN",
                })}
              </Tag>
            );
          });
        },
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
        <div>
          <Button type="dashed">Ver Detalles</Button>
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
        </div>
      );
    },
  },
];

const data: IFactura[] = [...facturasRegistradas];

const FacturasTable: React.FC = () => (
  <div className="space-y-3.5">
    <Title order={5}>Facturas Recientes</Title>

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
