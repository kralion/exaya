import { api } from "@/utils/api";
import { Button, Form, Popconfirm, Table, Tag, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { TbLicense } from "react-icons/tb";

type TRow = {
  key: number;
  ruta: {
    ciudadOrigen: string;
    ciudadDestino: string;
  };
  bus: {
    placa: string;
    marca: string;
    modelo: string;
  };
  placa: string;
  marca: string;
  modelo: string;
  fechaSalida: Date;
  horaSalida: string;
  estado: string;
};

export function ProgramacionTable() {
  const [form] = Form.useForm();
  const { data } = api.viajes.getAllViajes.useQuery();
  const [viajes, setViajes] = useState<TRow[]>([]);

  useEffect(() => {
    if (data) {
      setViajes(viajes);
    }
  }, [viajes, data]);

  const viajesColumns = [
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
      key: "placaBus",

      render: (
        index: number,
        bus: {
          placa: string;
          marca: string;
          modelo: string;
        }
      ) => (
        <Tooltip className="cursor-pointer" key={index} title={bus.placa}>
          <TbLicense />
        </Tooltip>
      ),
    },
    {
      title: "Fecha Salida",
      dataIndex: "fechaSalida",
      key: "fechaSalida",
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
