import React from "react";
import { Table, Tag, Typography, Button, Popconfirm } from "antd";
import { api } from "@/utils/api";
import EncomiendaDetails from "./detalles-encomienda";
import type { TableColumnsType } from "antd";
import { useNotification } from "@/context/NotificationContext";
const { Title, Text } = Typography;

export function EncomiendasTable() {
  const { data: encomiendas, refetch } =
    api.encomiendas.getAllEncomiendas.useQuery();
  const { openNotification } = useNotification();
  const deleteEncomiendaMutation =
    api.encomiendas.deleteEncomiendaByCodigo.useMutation();
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    const lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  }
  const columns: TableColumnsType = [
    {
      title: "Remitente",
      children: [
        {
          title: "Nombres",
          dataIndex: "remitenteNombres",
          key: "nombres",
          render: (remitenteNombres: string) => (
            <Text>{capitalizeFirstLetter(remitenteNombres)}</Text>
          ),
        },
        {
          title: "Apellidos",
          dataIndex: "remitenteApellidos",
          key: "apellidos",
          render: (remitenteApellidos: string) => (
            <Text>{capitalizeFirstLetter(remitenteApellidos)}</Text>
          ),
        },
      ],
    },
    {
      title: "Destinatario",
      children: [
        {
          title: "Nombres",
          dataIndex: "destinatarioNombres",
          key: "nombres",
          render: (destinatarioNombres: string) => (
            <Text>{capitalizeFirstLetter(destinatarioNombres)}</Text>
          ),
        },
        {
          title: "Apellidos",
          dataIndex: "destinatarioApellidos",
          key: "apellidos",
          render: (destinatarioApellidos: string) => (
            <Text>{capitalizeFirstLetter(destinatarioApellidos)}</Text>
          ),
        },
      ],
    },

    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
      render: (precioEnvio: number) => (
        <Tag color="green-inverse">S/. {precioEnvio}</Tag>
      ),
    },
    {
      title: "Destino",
      dataIndex: "viaje",
      key: "destino",
      render: (viaje: { ruta: { ciudadDestino: string } }) => (
        <span>{viaje.ruta.ciudadDestino}</span>
      ),
    },
    {
      title: "Fecha de Envío",
      dataIndex: "fechaEnvio",
      key: "fechaEnvio",
      render: (viaje: { salida: Date }) => (
        <span>
          {viaje.salida.toLocaleString("es-PE", {
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
