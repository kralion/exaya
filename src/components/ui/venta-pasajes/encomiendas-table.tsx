import { api } from "@/utils/api";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
// FIXME: Correct the columns rendered in the table
export function EncomiendasManifiestoTable({ viajeId }: { viajeId: string }) {
  const { data: encomiendas, isLoading } =
    api.encomiendas.getEncomiendasByViajeId.useQuery({
      viajeId,
    });
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    const lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  }
  const columns: ColumnsType = [
    {
      title: "Nombres ",
      dataIndex: "nombres",
      key: "nombres",
      render: (nombres: string) => capitalizeFirstLetter(nombres),
    },
    {
      title: "Apellidos",
      dataIndex: "apellidos",
      key: "apellidos",
      render: (apellidos: string) => capitalizeFirstLetter(apellidos),
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
    {
      title: "DNI / Pasaporte",
      dataIndex: "dni",
      key: "dni",
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
      dataSource={encomiendas?.response}
    />
  );
}
