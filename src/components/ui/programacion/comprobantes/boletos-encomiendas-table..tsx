import { api } from "@/utils/api";
import { Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
const { Title, Text } = Typography;

const columns: ColumnsType = [
  {
    title: "Código",
    children: [
      {
        title: "Serie",
        dataIndex: "serie",
        key: "serie",
        responsive: ["lg"],
      },
      {
        title: "Codigo",
        dataIndex: "codigo",
        key: "codigo",
        responsive: ["lg"],
      },
    ],
  },
  {
    title: "Agencia",
    dataIndex: "viaje",
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
    render: (fechaEnvio: string) => {
      return <Text>{new Date(fechaEnvio).toLocaleDateString()}</Text>;
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
  const { data: boletas } = api.encomiendas.getAllBoletosEncomiendas.useQuery();
  return (
    <div className="my-7 space-y-3.5">
      <div className="flex justify-between">
        <Title level={5}>Boletos Recientes</Title>
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
