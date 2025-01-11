import { api } from "@/utils/api";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
// FIXME: Correct the columns rendered in the table
export function EncomiendasManifiestoTable({ viajeId }: { viajeId: string }) {
  const { data: encomiendas, isLoading } =
    api.encomiendas.getEncomiendasByViajeId.useQuery({
      viajeId,
    });

  const columns: ColumnsType = [
    {
      title: "Remitente",
      dataIndex: "remitenteDni",
      key: "remitenteDni",
    },
    {
      title: "Destinatario",
      dataIndex: "destinatarioDni",
      key: "destinatarionDni",
    },
    {
      title: "Descripcion",
      dataIndex: "descripcion",
      key: "descripcion",
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
  ];
  return (
    <Table
      pagination={{
        defaultPageSize: 5,
        position: ["bottomRight"],
        pageSizeOptions: ["5", "10", "20", "50"],
        showSizeChanger: true,
      }}
      columns={columns}
      loading={isLoading}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unnecessary-type-assertion
      dataSource={encomiendas?.response as any}
    />
  );
}
