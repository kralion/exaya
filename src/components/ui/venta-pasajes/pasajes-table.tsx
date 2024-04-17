import { api } from "@/utils/api";
import { Dropdown, Table, Tag, Tooltip, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TbLicense } from "react-icons/tb";
import { TfiMoreAlt } from "react-icons/tfi";
import { RegistrarPasajeModal } from "./registrar-pasaje-modal";
import { Manifiesto } from "./manifiesto";
const { Title } = Typography;

const columns: ColumnsType = [
  {
    title: "Origen",
    dataIndex: "ruta",
    key: "origen",
    render: (ruta: { ciudadOrigen: string }) => ruta.ciudadOrigen,

    filters: [
      {
        text: "Huancayo",
        value: "Huancayo",
      },
      {
        text: "Ayacucho",
        value: "Ayacucho",
      },
    ],
    filterSearch: true,

    onFilter: (value, record) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      record.ruta.ciudadOrigen.includes(value as string),
  },
  {
    title: "Destino",
    dataIndex: "ruta",
    key: "destino",
    responsive: ["lg"],
    render: (ruta: { ciudadDestino: string }) => (
      <span>{ruta.ciudadDestino}</span>
    ),

    filters: [
      {
        text: "Huancayo",
        value: "Huancayo",
      },
      {
        text: "Ayacucho",
        value: "Ayacucho",
      },
      {
        text: "Lima",
        value: "Lima",
      },
    ],

    filterSearch: true,
    onFilter: (value, record) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      record.ruta?.ciudadDestino.includes(value as string),
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
    dataIndex: "horaSalida",
    key: "hora",
    responsive: ["lg"],

    render: (horaSalida: string) =>
      parseInt(horaSalida) < 18 ? (
        <Tag
          className="w-14 rounded-full text-center font-semibold text-black shadow-md"
          color="yellow-inverse"
        >
          {horaSalida}
        </Tag>
      ) : (
        <Tag className="w-14 rounded-full bg-gray-700 text-center font-semibold text-white shadow-md">
          {horaSalida}
        </Tag>
      ),
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

export function PasajesTable() {
  const { data: viajes, isLoading } = api.viajes.getViajesForToday.useQuery();

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
