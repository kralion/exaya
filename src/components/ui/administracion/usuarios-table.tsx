import React from "react";
import { Button, Space, Table, Tag, Popconfirm } from "antd";
import { usuarios } from "@/data";
import type { IUsuario } from "@/interfaces";
import { UsuarioContextProvider, useUsuario } from "@/context/UsuarioContext";

const columns = [
  {
    title: "Nombres",
    dataIndex: "nombres",
    key: "nombres",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Apellidos",
    dataIndex: "apellidos",
    key: "apellidos",
  },
  {
    title: "DNI",
    dataIndex: "dni",
    key: "dni",
  },
  {
    title: "Agencia Sede",
    key: "sede",
    dataIndex: "sede",
    render: (sede: string) => (
      <Tag className="font-semibold" key={sede}>
        {sede.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Rol del Usuario",
    dataIndex: "rol",
    key: "rol",
    render: (rol: string) => (
      <Tag
        color={
          rol === "administrador"
            ? "gold-inverse"
            : rol === "usuario"
            ? "blue-inverse"
            : rol === "supervisor"
            ? "green-inverse"
            : "purple-inverse"
        }
        className="rounded-full font-semibold shadow-md "
        key={rol}
      >
        {rol.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Acciones",
    key: "acciones",
    render: (record: IUsuario) => {
      const cancel = () => {
        console.log("Cancelado");
      };
      return (
        <Space size="middle">
          <Button type="dashed">
            Editar <code className="ml-2 underline">{record.nombres}</code>{" "}
          </Button>
          <Popconfirm
            okButtonProps={{
              style: {
                backgroundColor: "#f5222d",
                color: "white",
                borderRadius: "5px",
                border: "none",
              },
            }}
            title="Estás segur@ de eliminar ?"
            onConfirm={cancel}
          >
            <Button type="link" danger>
              Eliminar
            </Button>
          </Popconfirm>
        </Space>
      );
    },
  },
];

export default function UsuariosTable() {
  return <Table columns={columns} dataSource={usuarios} />;
}
