import { api } from "@/utils/api";
import { Dropdown, Table, Tag, Tooltip, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TbLicense } from "react-icons/tb";
import { TfiMoreAlt } from "react-icons/tfi";
import { RegistrarPasajeModal } from "./registrar-pasaje-modal";
import { Manifiesto } from "./manifiesto";
const { Title } = Typography;

const convertTo12HourFormat = (hours: number, minutes: number) => {
  const suffix = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${suffix}`;
  return formattedTime;
};

export function PasajesTable({ dayQuery }: { dayQuery: string }) {
  const { data: viajes, isLoading } = api.viajes.getViajesByDate.useQuery({
    date: dayQuery,
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
      filters: origenFilterItems,
      filterSearch: true,
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
      filters: destinoFilterItems,
      filterSearch: true,
      onFilter: (
        value,
        record: {
          ruta: { ciudadDestino: string };
        }
      ) => record.ruta?.ciudadDestino?.includes(value as string),
    },
    {
      title: "Bus",
      dataIndex: "bus",
      key: "placaBus",
      responsive: ["lg"],
      render: (bus: { placa: string }) => (
        <Tooltip className="cursor-pointer" title={bus.placa}>
          <TbLicense />
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

        const horaSalida = convertTo12HourFormat(hours, minutes);
        return hours < 18 ? (
          <Tag
            className="w-[70px] rounded-full text-center font-semibold text-black shadow-md"
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
      title: "Tarifas",
      key: "tarifas",
      dataIndex: "tarifas",
      responsive: ["lg"],

      render: (tarifas: number[]) => (
        <>
          {tarifas?.map((tarifa) => (
            <Tag key={tarifa}>
              {tarifa.toLocaleString("es-PE", {
                style: "currency",
                currency: "PEN",
              })}
            </Tag>
          ))}
        </>
      ),
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
