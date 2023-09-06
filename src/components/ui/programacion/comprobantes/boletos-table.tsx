import React from "react";
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Title } from "@mantine/core";
import { boletosRegistrados } from "@/data";
import type { IBoleto } from "@/interfaces";

const columns: ColumnsType<IBoleto> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "ID Viaje",
    dataIndex: "id_viaje",
    key: "id_viaje",
  },
  {
    title: "Nº",
    dataIndex: "numero_asiento",
    key: "numero_asiento",
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
    title: "ID Cliente",
    dataIndex: "id_cliente",
    key: "id_cliente",
  },
  {
    title: "Fecha Creacion",
    dataIndex: "id_cliente",
    key: "id_cliente",
  },
  {
    title: "Action",
    key: "action",
    render: () => {
      const cancel = () => {
        console.log("Cancelado");
      };
      return (
        <Space size="middle">
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
        </Space>
      );
    },
  },
];

const data: IBoleto[] = [...boletosRegistrados];

const ComprobantesTable: React.FC = () => (
  <div className="space-y-3.5">
    <Title order={5}>Boletos Recientes</Title>
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

export default ComprobantesTable;
