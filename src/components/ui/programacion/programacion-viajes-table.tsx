import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { Button, Form, Popconfirm, Table, Tag, Tooltip } from "antd";
import { TbLicense } from "react-icons/tb";
const convertTo12HourFormat = (hours: number, minutes: number) => {
  const suffix = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${suffix}`;
  return formattedTime;
};

export function ProgramacionTable() {
  const [form] = Form.useForm();
  const { data: viajes, refetch } = api.viajes.getAllViajes.useQuery();
  const { openNotification } = useNotification();
  const deleteViajeMutation = api.viajes.deleteViajeById.useMutation();

  const handleDelete = (id: string) => {
    deleteViajeMutation.mutate(
      { id },
      {
        onSuccess: () => {
          void refetch();
        },
        onError: (error) => {
          openNotification({
            message: "Error en la Operación",
            description: error.message,
            type: "error",
            placement: "topRight",
          });
        },
      }
    );

    deleteViajeMutation.reset();
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
          <TbLicense />
        </Tooltip>
      ),
    },
    {
      title: "Fecha Salida",
      dataIndex: "salida",
      key: "fechaSalida",
      render: (salida: Date) => (
        <Tag className="px-3 text-center font-semibold  shadow-md">
          {new Date(salida).toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </Tag>
      ),
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
        return hours < 18 ? (
          <Tag
            className="w-[70px] rounded-full text-center font-semibold  shadow-md"
            color="yellow-inverse"
          >
            <span className="text-black">{horaSalida}</span>
          </Tag>
        ) : (
          <Tag className="w-[70px] rounded-full bg-gray-700 text-center font-semibold text-white shadow-md">
            {horaSalida}
          </Tag>
        );
      },
    },
    {
      title: "Estado",
      key: "estado",
      dataIndex: "estado",

      render: (estado: string) => (
        <Tag
          className="px-3 text-center font-semibold  shadow-md"
          color={
            estado === "DISPONIBLE"
              ? "green"
              : estado === "LLENO"
              ? "red"
              : "yellow"
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
        <div className="flex items-baseline ">
          <Popconfirm
            okButtonProps={{
              style: {
                backgroundColor: "#f5222d",
                color: "white",
                borderRadius: "5px",
                border: "none",
              },
            }}
            title="Estás seguro ?"
            onConfirm={() => {
              handleDelete(id);
            }}
          >
            <Button danger type="link">
              Eliminar
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Form form={form} component={false}>
      <Table
        dataSource={viajes?.response}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          defaultPageSize: 5,
          position: ["bottomRight"],
          pageSizeOptions: ["5", "10", "20"],
          showSizeChanger: true,
        }}
      />
    </Form>
  );
}
