import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import { Button, Popconfirm, Space, Table, Tag, Tooltip } from "antd";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { TbBus } from "react-icons/tb";
const convertTo12HourFormat = (hours: number, minutes: number) => {
  const suffix = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${suffix}`;
  return formattedTime;
};

export function ProgramacionTable({
  setIdToEdit,
}: {
  setIdToEdit: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {
    data: viajes,
    refetch,
    isLoading,
  } = api.viajes.getAllViajes.useQuery();
  const { mutate: deleteViajeMutation } =
    api.viajes.deleteViajeById.useMutation();
  const { openMessage } = useMessageContext();

  const handleDeleteViaje = (id: string) => {
    deleteViajeMutation(
      { id },
      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            duration: 3,
            type: "success",
          });
          void refetch();
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            duration: 3,
            type: "error",
          });
        },
      }
    );
  };

  const columns = [
    {
      title: "Ruta",
      dataIndex: "ruta",
      key: "ruta",
      render: (ruta: { ciudadOrigen: string; ciudadDestino: string }) => (
        <span>
          {ruta.ciudadOrigen} - {ruta.ciudadDestino}
        </span>
      ),
    },
    {
      title: "Bus",
      dataIndex: "bus",
      key: "bus",

      render: (bus: { placa: string; id: string }) => (
        <Tooltip className="cursor-pointer" key={bus.id} title={bus.placa}>
          <TbBus
            strokeWidth={1}
            size={25}
            className="text-zinc-600 dark:text-zinc-400"
          />
        </Tooltip>
      ),
    },
    {
      title: "Fecha Salida",
      dataIndex: "salida",
      key: "fechaSalida",
      render: (salida: Date) =>
        new Date(salida).toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    {
      title: "Hora Salida",
      dataIndex: "salida",
      key: "hora",
      render: (salida: string) => {
        const date = new Date(salida);
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();

        if (hours >= 24) {
          hours -= 24;
        }

        const horaSalida = convertTo12HourFormat(hours, minutes);
        return <Tag>{horaSalida}</Tag>;
      },
    },
    {
      title: "Estado",
      key: "estado",
      dataIndex: "estado",

      render: (estado: string) => (
        <Tag
          color={
            estado === "DISPONIBLE"
              ? "green-inverse"
              : estado === "LLENO"
              ? "red-inverse"
              : "yellow-inverse"
          }
        >
          {estado}
        </Tag>
      ),
    },

    {
      title: "Acciones",
      dataIndex: "id",
      render: (id: string) => (
        <Space className="items-baseline gap-2">
          <Button
            title="Editar"
            onClick={() => setIdToEdit(id)}
            icon={<FiEdit3 />}
          />
          <Popconfirm
            okButtonProps={{
              danger: true,
            }}
            title="Estás segur@ de eliminar este viaje ?"
            okText="Sí"
            cancelText="No"
            onConfirm={() => handleDeleteViaje(id)}
          >
            <Button
              title="Eliminar"
              icon={<FaRegTrashCan />}
              type="text"
              danger
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={viajes?.response}
      columns={columns}
      loading={isLoading}
      rowClassName="editable-row"
      pagination={{
        defaultPageSize: 5,
        position: ["bottomRight"],
        pageSizeOptions: ["5", "10", "20"],
        showSizeChanger: true,
      }}
    />
  );
}
