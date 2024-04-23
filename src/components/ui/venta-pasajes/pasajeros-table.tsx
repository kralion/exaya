import { api } from "@/utils/api";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Nombres ",
    dataIndex: "pasajeroNombres",
    key: "nombres",
  },
  {
    title: "Apellidos",
    dataIndex: "pasajeroApellidos",
    key: "apellidos",
  },
  {
    title: "N° Asiento ",
    dataIndex: "asiento",
    key: "asiento",
  },
  {
    title: "Precio",
    dataIndex: "precio",
    key: "precio",
    render: (precio: number) => (
      <Tag>
        {precio.toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
        })}
      </Tag>
    ),
  },
  {
    title: "DNI / Pasaporte",
    dataIndex: "pasajeroDni",
    key: "dni",
  },
];

export function PasajerosManifiestoTable({ viajeId }: { viajeId: string }) {
  const { data: pasajeros } = api.viajes.getBoletosByViajeId.useQuery({
    id: viajeId,
  });
  return (
    <Table
      pagination={{
        defaultPageSize: 5,
        position: ["bottomRight"],
        pageSizeOptions: ["5", "10", "20", "50"],
        showSizeChanger: true,
      }}
      columns={columns}
      dataSource={pasajeros?.response}
    />
  );
}
