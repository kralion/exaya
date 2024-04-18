import React from "react";
import { Table, Tag, Typography, Button, Popconfirm } from "antd";
import { api } from "@/utils/api";
import EncomiendaDetails from "./detalles-encomienda";
const { Title } = Typography;
const columns = [
  {
    title: "Receptor",
    dataIndex: "destinatario",
    key: "destinatario",
    render: (destinatario: { nombres: string; apellidoPaterno: string }) => (
      <span>
        {destinatario.nombres}
        {destinatario.apellidoPaterno}
      </span>
    ),
  },
  {
    title: "Remitente",
    dataIndex: "remitente",
    key: "remitente",
    render: (remitente: { nombres: string; apellidoPaterno: string }) => (
      <span>
        {remitente.nombres}
        {remitente.apellidoPaterno}
      </span>
    ),
  },
  {
    title: "Precio",
    dataIndex: "precioEnvio",
    key: "precio",
    render: (precioEnvio: number) => (
      <Tag color="green-inverse" className=" font-semibold shadow-md">
        S/. {precioEnvio}.00
      </Tag>
    ),
  },
  {
    title: "Destino",
    dataIndex: "viaje",
    key: "destino",
    render: (viaje: {
      ruta: { ciudadDestino: string; ciudadOrigen: string };
    }) => <span>{viaje.ruta.ciudadOrigen}</span>,
  },
  {
    title: "Fecha de Envío",
    dataIndex: "viaje",
    key: "fechaEnvio",
    render: (viaje: {
      fechaSalida: Date;
      ruta: { ciudadDestino: string; ciudadOrigen: string };
    }) => (
      <span>
        {viaje.fechaSalida.toLocaleString("es-PE", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </span>
    ),
  },
  {
    title: "Acciones",
    key: "action",
    render: (codigo: string) => {
      return (
        <div className="flex items-baseline gap-2">
          <EncomiendaDetails codigo={codigo} modalActivator="Ver Detalles" />

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
            onConfirm={() => console.log("Eliminado")}
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

export function EncomiendasTable() {
  const { data: encomiendas } = api.encomiendas.getAllEncomiendas.useQuery();

  return (
    <div className="space-y-3.5">
      <Title level={5}>Historial de Encomiendas</Title>
      <Table
        pagination={{
          defaultPageSize: 5,
        }}
        dataSource={encomiendas}
        columns={columns}
      />
    </div>
  );
}
