import { api } from "@/utils/api";
import { Dropdown, Table, Tag, Tooltip, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IoFilterSharp } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { TfiMoreAlt } from "react-icons/tfi";
import { Manifiesto } from "./manifiesto";
import { MisBoletos } from "./mis-boletos-modal";
import { RegistrarPasajeModal } from "./registrar-pasaje-modal";
import { type Dayjs } from "dayjs";
const { Title } = Typography;

export function PasajesTable({ dayQuery }: { dayQuery: Dayjs }) {
  const { data: viajes, isLoading } = api.viajes.getViajesByDate.useQuery({
    date: dayQuery.format("YYYY-MM-DD"),
  });
  const origenFilterItems = viajes?.response?.map((viaje) => ({
    text: viaje.ruta.ciudadOrigen,
    value: viaje.ruta.ciudadOrigen,
  }));
  const destinoFilterItems = viajes?.response?.map((viaje) => ({
    text: viaje.ruta.ciudadDestino,
    value: viaje.ruta.ciudadDestino,
  }));
  const columns: ColumnsType = [
    {
      title: "Origen",
      dataIndex: "ruta",
      key: "origen",
      render: (ruta: { ciudadOrigen: string }) => ruta.ciudadOrigen,
      filterOnClose: true,

      filters: origenFilterItems,
      filterIcon: <IoFilterSharp size={16} />,
      onFilter: (
        value,

        record: {
          ruta: { ciudadOrigen: string };
        }
      ) => record.ruta.ciudadOrigen.includes(value as string),
    },
    {
      title: "Destino",
      dataIndex: "ruta",
      key: "destino",
      responsive: ["lg"],
      render: (ruta: { ciudadDestino: string }) => ruta.ciudadDestino,
      filterOnClose: true,

      filters: destinoFilterItems,
      filterIcon: <IoFilterSharp size={16} />,
      onFilter: (
        value,
        record: {
          ruta: { ciudadDestino: string };
        }
      ) => record.ruta?.ciudadDestino?.includes(value as string),
    },
    {
      title: "Placa",
      dataIndex: "bus",
      key: "placaBus",
      responsive: ["lg"],
      render: (bus: { placa: string }) => (
        <Tooltip className="cursor-pointer" title={bus.placa}>
          <TbBus
            strokeWidth={1}
            size={25}
            className="text-zinc-600 dark:text-zinc-400"
          />
        </Tooltip>
      ),
    },
    {
      title: "Hora Salida",
      dataIndex: "salida",
      key: "horaSalida",
      responsive: ["lg"],
      sorter: {
        compare: (
          a: {
            salida: string;
          },
          b: {
            salida: string;
          }
        ) => {
          const dateA = new Date(a.salida);
          const dateB = new Date(b.salida);
          return dateA.getTime() - dateB.getTime();
        },
      },
      render: (salida: string) => {
        const date = new Date(salida);
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();

        if (hours >= 24) {
          hours -= 24;
        }

        const horaSalida = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`;
        return <Tag>{horaSalida}</Tag>;
      },
    },
    {
      title: "Tarifas",
      key: "tarifas",
      dataIndex: "tarifas",
      responsive: ["lg"],
      render: (tarifas: number[]) => {
        return tarifas.map((tarifa, index) => (
          <Tag color="volcano-inverse" key={index}>
            {tarifa.toLocaleString("es-PE", {
              style: "currency",
              currency: "PEN",
            })}
          </Tag>
        ));
      },
    },
    {
      title: "",
      key: "acciones",
      responsive: ["lg"],
      dataIndex: "id",
      render: (id: string) => {
        const items = [
          {
            key: "1",
            label: <RegistrarPasajeModal viajeId={id} />,
          },
          {
            key: "2",
            label: <Manifiesto viajeId={id} />,
          },
          {
            key: "3",
            label: <MisBoletos viajeId={id} />,
          },
        ];

        return (
          <Dropdown menu={{ items }}>
            <TfiMoreAlt className="cursor-pointer" />
          </Dropdown>
        );
      },
    },
  ];
  return (
    <div className="w-full">
      <Title level={5} className="mb-3.5">
        Viajes del Día
      </Title>
      <Table
        pagination={false}
        loading={isLoading}
        columns={columns}
        dataSource={viajes?.response}
      />
    </div>
  );
}
