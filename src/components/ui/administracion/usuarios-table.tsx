import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { IUsuario } from "@/interfaces";
import { usuarios } from "@/data";

const columns: ColumnsType<IUsuario> = [
  {
    title: "Nombres",
    dataIndex: "nombres",
    key: "nombres",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Apellidos",
    dataIndex: "apellidos",
    key: "apellidos",
  },
  {
    title: "dni",
    dataIndex: "dni",
    key: "dni",
  },
  {
    title: "Sede",
    key: "sede",
    dataIndex: "sede",
    render: (sede: string) => (
      <Tag
        className="rounded-full"
        color={
          sede === "Lima"
            ? "green-inverse"
            : sede === "Ayacucho"
            ? "volcano-inverse"
            : sede === "Huancayo"
            ? "cyan-inverse"
            : sede === "Arequipa"
            ? "orange-inverse"
            : "purple-inverse"
        }
        key={sede}
      >
        {sede.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="dashed">
          Editar <code className="ml-2 underline">{record.nombres}</code>{" "}
        </Button>
        <Button type="link" danger>
          Eliminar
        </Button>
      </Space>
    ),
  },
];

const UsuariosTable: React.FC = () => (
  <Table columns={columns} dataSource={usuarios} />
);

export default UsuariosTable;
