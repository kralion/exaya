import React from "react";
import { Table, Tag, Typography, Button, Popconfirm, Space } from "antd";
import { api } from "@/utils/api";
import EncomiendaDetails from "./detalles-encomienda";
import type { ColumnsType } from "antd/es/table";
import { useMessageContext } from "@/context/MessageContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { useSession } from "next-auth/react";

const { Title } = Typography;
export function EncomiendasTable({
  setEncomiendaIdToEdit,
}: {
  setEncomiendaIdToEdit: (id: string) => void;
}) {
  const {
    data: encomiendas,
    refetch,
    isLoading,
  } = api.encomiendas.getAllEncomiendas.useQuery();
  const { openMessage } = useMessageContext();
  const { data: session } = useSession();
  const { mutateAsync: decreaseBoletoCounter } =
    api.sedes.decreaseContadorBoletosBySedeId.useMutation();
  const deleteEncomiendaMutation =
    api.encomiendas.deleteEncomiendaById.useMutation();
  //TODO: Agregar columna para ver quien lo registro
  const columns: ColumnsType = [
    {
      title: "Remitente",
      dataIndex: "remitenteDni",
      key: "remitenteDni",
      responsive: ["lg"],
    },
    {
      title: "Destinatario",
      dataIndex: "destinatarioDni",
      key: "destinatarioDni",
      responsive: ["lg"],
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
      dataIndex: "destino",
      key: "destino",
    },
    {
      title: "Fecha de Envío",
      responsive: ["lg"],
      dataIndex: "fechaEnvio",
      key: "fechaEnvio",
      render: (fechaEnvio: string) => {
        const date = new Date(fechaEnvio);
        return date.toLocaleDateString("es-PE", {
          year: "numeric",
          month: "2-digit",
          day: "numeric",
        });
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
            <Button
              onClick={() => setEncomiendaIdToEdit(id)}
              title="Editar"
              icon={<FiEdit3 />}
            />
            <Popconfirm
              okButtonProps={{
                danger: true,
              }}
              title="Estás segur@ de eliminar esta encomienda?"
              okText="Sí"
              cancelText="No"
              onConfirm={() => void handleDeleteEncomienda(id)}
            >
              <Button
                title="Eliminar"
                icon={<FaRegTrashCan />}
                type="primary"
                danger
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  async function handleDeleteEncomienda(id: string) {
    deleteEncomiendaMutation.mutate(
      { id },
      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
          void refetch();
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
      }
    );
    await decreaseBoletoCounter({ id: session?.user.sedeId ?? "" });
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
