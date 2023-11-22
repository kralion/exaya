import type { IBus, IRuta, IViaje } from "@/interfaces";
import { api } from "@/utils/api";
import { Button, Form, Popconfirm, Table, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TbLicense } from "react-icons/tb";

export interface Item {
  viajeId: number;
  origen: string;
  destino: string;
  bus: string;
  fecha: string;
  horaSalida: string;
  estado: string;
}

export function ProgramacionTable() {
  const [form] = Form.useForm();
  const { data: viajes } = api.viajes.getAllViajes.useQuery();

  const viajesColumns: ColumnsType<IViaje> = [
    {
      title: "Ruta",
      dataIndex: "ruta",
      key: "ruta",
      responsive: ["lg"],
      render: (ruta: IRuta) => (
        <span>
          {ruta.ciudadOrigen} - {ruta.ciudadDestino}
        </span>
      ),
    },
    {
      title: "Bus",
      dataIndex: "bus",
      key: "placaBus",
      responsive: ["lg"],

      render: (bus: IBus) => (
        <Tooltip className="cursor-pointer" key={bus?.id} title={bus.placa}>
          <TbLicense />
        </Tooltip>
      ),
    },
    {
      title: "Fecha Salida",
      dataIndex: "fechaSalida",
      key: "fechaSalida",
      responsive: ["lg"],
      render: (fechaSalida: Date) => (
        <Tag className="px-3 text-center font-semibold  shadow-md">
          {fechaSalida.toLocaleDateString("es-PE", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </Tag>
      ),
    },
    {
      title: "Hora Salida",
      dataIndex: "horaSalida",
      key: "hora",
      responsive: ["lg"],

      render: (horaSalida: string) =>
        parseInt(horaSalida) < 18 ? (
          <Tag
            className="px-3 text-center font-semibold text-black shadow-md"
            color="yellow-inverse"
          >
            {horaSalida}
          </Tag>
        ) : (
          <Tag className="bg-gray-700 px-3 text-center font-semibold text-white shadow-md">
            {horaSalida}
          </Tag>
        ),
    },
    {
      title: "Estado",
      key: "estado",
      dataIndex: "estado",
      responsive: ["lg"],

      render: (estado: string) => (
        <Tag
          className="px-3 text-center font-semibold  shadow-md"
          color={
            estado === "EN VENTA"
              ? "green"
              : estado === "INACTIVO"
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
      dataIndex: "acciones",
      render: () => (
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
            onConfirm={() => alert("Eliminado")}
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
        dataSource={viajes}
        columns={viajesColumns}
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
