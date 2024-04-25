import React from "react";
import { Table, Tag, Typography, Button, Popconfirm, Space } from "antd";
import { api } from "@/utils/api";
import EncomiendaDetails from "./detalles-encomienda";
import type { TableColumnsType } from "antd";
import { useNotification } from "@/context/NotificationContext";
const { Title } = Typography;
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";

export function EncomiendasTable() {
  const {
    data: encomiendas,
    refetch,
    isLoading,
  } = api.encomiendas.getAllEncomiendas.useQuery();
  const { openNotification } = useNotification();
  const deleteEncomiendaMutation =
    api.encomiendas.deleteEncomiendaById.useMutation();

  const columns: TableColumnsType = [
    {
      title: "Remitente",
      dataIndex: "remitenteDni",
      key: "nombres",
    },
    {
      title: "Destinatario",
      dataIndex: "destinatarioDni",
      key: "nombres",
    },

    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
      render: (precioEnvio: number) => (
        <Tag color="blue">S/. {precioEnvio}</Tag>
      ),
    },
    {
      title: "Destino",
      dataIndex: "viaje",
      key: "destino",
      render: (viaje: { ruta: { ciudadDestino: string } }) =>
        viaje.ruta.ciudadDestino,
    },
    {
      title: "Fecha de Envío",
      dataIndex: "fechaEnvio",
      key: "fechaEnvio",
      render: (fechaEnvio: string) => {
        const date = new Date(fechaEnvio);
        return date.toLocaleDateString();
      },
    },
    {
      title: "Acciones",
      dataIndex: "id",
      key: "action",
      render: (id: string) => {
        return (
          <Space className="items-baseline gap-2">
            <EncomiendaDetails id={id} modalActivator="Ver Detalles" />
            <Button disabled title="Editar" icon={<FiEdit3 />} />
            <Popconfirm
              okButtonProps={{
                danger: true,
              }}
              title="Estás segur@ de eliminar esta encomienda?"
              okText="Sí"
              cancelText="No"
              onConfirm={() => handleDeleteEncomienda(id)}
            >
              <Button
                title="Eliminar"
                icon={<FaRegTrashCan />}
                type="text"
                danger
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  function handleDeleteEncomienda(id: string) {
    deleteEncomiendaMutation.mutate(
      { id },
      {
        onSuccess: () => {
          openNotification({
            message: "Encomienda eliminada",
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
        loading={isLoading}
      />
    </div>
  );
}
