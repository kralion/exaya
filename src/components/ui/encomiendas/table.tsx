import React from "react";
import { Table, Tag, Typography, Button, Popconfirm } from "antd";
import { api } from "@/utils/api";
import EncomiendaDetails from "./detalles-encomienda";
import { useNotification } from "@/context/NotificationContext";
const { Title } = Typography;

export function EncomiendasTable() {
  const { data: encomiendas, refetch } =
    api.encomiendas.getAllEncomiendas.useQuery();
  const { openNotification } = useNotification();
  const deleteEncomiendaMutation =
    api.encomiendas.deleteEncomiendaByCodigo.useMutation();
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
      dataIndex: "codigo",
      key: "action",
      render: (codigo: string) => {
        return (
          <div className="flex items-baseline gap-2">
            <EncomiendaDetails codigo={codigo} modalActivator="Ver Detalles" />

            <Popconfirm
              okButtonProps={{
                danger: true,
              }}
              title="Estás segur@ de eliminar esta encomienda?"
              okText="Sí"
              cancelText="No"
              onConfirm={() => handleDeleteEncomienda(codigo)}
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
  function handleDeleteEncomienda(codigo: string) {
    deleteEncomiendaMutation.mutate(
      { codigo },
      {
        onSuccess: (response) => {
          openNotification({
            message: "Encomienda eliminada",
            description: response.message,
            type: "success",
            placement: "topRight",
          });
          void refetch();
        },
        onError: (error) => {
          openNotification({
            message: "Error al eliminar la encomienda",
            description: error.message,
            type: "error",
            placement: "topRight",
          });
        },
      }
    );
  }

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
