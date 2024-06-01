import { api } from "@/utils/api";
import { Table, Tag, Tooltip, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
const { Title, Text } = Typography;

const columns: ColumnsType = [
  {
    title: "Código",
    children: [
      {
        title: "Serie",
        dataIndex: "serie",
        key: "serie",
      },
      {
        title: "Número",
        dataIndex: "codigo",
        key: "codigo",
      },
    ],
  },
  {
    title: "Empresa",
    dataIndex: "empresa",
    key: "empresa",
    render: (empresa: string) => {
      return (
        <Tooltip title={empresa}>
          <Text>{empresa.slice(0, 20)}</Text>
        </Tooltip>
      );
    },
  },
  {
    title: "Agencia",
    dataIndex: "viaje",
    key: "usuario",
    render: (viaje: { usuario: { sedeDelegacion: string } }) => {
      return <Text>{viaje.usuario.sedeDelegacion}</Text>;
    },
  },

  {
    title: "Viaje",
    key: "viaje",
    dataIndex: "viaje",
    render: (viaje: {
      ruta: { ciudadOrigen: string; ciudadDestino: string };
    }) => {
      return (
        <Text>
          {viaje.ruta.ciudadOrigen} - {viaje.ruta.ciudadDestino}
        </Text>
      );
    },
  },

  {
    title: "Fecha Emisión",
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
    title: "Precio",
    key: "precio",
    dataIndex: "precio",
    render: (precio: number) => {
      return (
        <Tag>
          {precio.toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
          })}
        </Tag>
      );
    },
  },
];

export default function FacturasTable() {
  const { data: facturas, isLoading } =
    api.encomiendas.getAllFacturasEncomiendas.useQuery();
  return (
    <div className="my-7 space-y-3.5">
      <div className="flex justify-between">
        <Title level={5}>Facturas Recientes</Title>
      </div>

      <Table
        columns={columns}
        loading={isLoading}
        pagination={{
          defaultPageSize: 3,
          position: ["bottomRight"],
          pageSizeOptions: ["3", "6", "9"],
          showSizeChanger: true,
        }}
        dataSource={facturas}
      />
    </div>
  );
}
