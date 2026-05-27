import { api } from "@/utils/api";
import { Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
const { Title, Text } = Typography;
const columns: ColumnsType = [
  {
    title: "Código",
    dataIndex: "codigo",
    key: "codigo",
  },

  {
    title: "Viaje",
    key: "viaje",
    responsive: ["lg"],
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
    title: "Agencia",
    dataIndex: "viaje",
    responsive: ["lg"],
    key: "agencia",
    render: (viaje: { usuario: { sede: { agencia: string } } }) => {
      return <Text>{viaje.usuario.sede.agencia}</Text>;
    },
  },
  {
    title: "DNI Cliente",
    dataIndex: "pasajeroDni",
    key: "pasajeroDni",
  },
  {
    title: "Fecha Emisión",
    dataIndex: "fechaRegistro",
    key: "fechaRegistro",
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
    responsive: ["lg"],
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

export default function BoletosTable() {
  const { data: boletos, isLoading } = api.boletos.getAllBoletos.useQuery();
  return (
    <div className="space-y-3.5">
      <div className="flex justify-between">
        <Title level={5}>Boletos de Viaje Recientes</Title>
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
        dataSource={boletos}
      />
    </div>
  );
}
