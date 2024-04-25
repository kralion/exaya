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
        responsive: ["lg"],
      },
      {
        title: "Número",
        dataIndex: "codigo",
        key: "codigo",
        responsive: ["lg"],
      },
    ],
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
    title: "Agencia",
    dataIndex: "viaje",
    key: "usuario",
    render: (viaje: { usuario: { sedeDelegacion: string } }) => {
      return <Text>{viaje.usuario.sedeDelegacion}</Text>;
    },
  },
  {
    title: "DNI Cliente",
    dataIndex: "pasajeroDni",
  },
  {
    title: "Fecha Emisión",
    dataIndex: "fechaRegistro",
    render: (fechaRegistro: Date) => {
      const date = dayjs(fechaRegistro);
      const formattedDate = date.format("DD-MM-YYYY");
      return <Text>{formattedDate}</Text>;
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
