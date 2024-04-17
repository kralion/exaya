import { api } from "@/utils/api";
import { Table, Tag, Typography } from "antd";
const columns = [
  {
    title: "Nombres ",
    dataIndex: "nombres",
    key: "nombres",
  },
  {
    title: "Apellidos",
    dataIndex: "apellidos",
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
    dataIndex: "dni",
    key: "dni",
  },
];
export function EncomiendasManifiestoTable({ viajeId }: { viajeId: string }) {
  const { data: encomiendas } =
    api.encomiendas.getEncomiendasByViajeId.useQuery({
      viajeId,
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
      dataSource={encomiendas}
    />
  );
}
