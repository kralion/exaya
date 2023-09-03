import React from "react";
import { Space, Table, Tag } from "antd";
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
        color={sede === "lima" ? "green" : sede === "Ayacucho" ? "blue" : "red"}
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
        <a>Invite {record.sede}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const UsuariosTable: React.FC = () => (
  <Table columns={columns} dataSource={usuarios} />
);

export default UsuariosTable;
