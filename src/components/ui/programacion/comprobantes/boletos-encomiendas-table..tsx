import { api } from "@/utils/api";
import { Table, Tag, Typography } from "antd";
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
        title: "Codigo",
        dataIndex: "codigo",
        key: "codigo",
      },
    ],
  },
  {
    title: "Agencia",
    dataIndex: "viaje",
    key: "agencia",
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
    dataIndex: "fechaEnvío",
    key: "fechaEnvío",
    render: (fechaRegistro: string) => {
      const date = new Date(fechaRegistro);
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

export default function BoletosEncomiendasTable() {
  const { data: boletas, isLoading } =
    api.encomiendas.getAllBoletosEncomiendas.useQuery();
  return (
    <div className="my-7 space-y-3.5">
      <div className="flex justify-between">
        <Title level={5}>Boletos de Encomienda Recientes</Title>
        {/* TODO: Implementar Configuracion de comprobante
        <Tooltip title="search">
          <Button
            onClick={handleConfigurar}
            shape="circle"
            icon={<LuSettings size={16} />}
          />
        </Tooltip> */}
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
        dataSource={boletas}
      />
    </div>
  );
}
