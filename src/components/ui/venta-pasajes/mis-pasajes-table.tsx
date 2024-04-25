import { Table, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableProps } from "antd/lib/table";

export function MisBoletosVendidosTable({
  data,
  isLoading,
}: {
  data: TableProps<any>["dataSource"];
  isLoading: boolean;
}) {
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
      title: "Asiento",
      dataIndex: "asiento",
      key: "asiento",
    },
    {
      title: "Pasajero",
      dataIndex: "pasajeroDni",
      key: "pasajeroDni",
    },
    {
      title: "Equipaje",
      dataIndex: "equipaje",
      key: "equipaje",
      responsive: ["lg"],
      render: (equipaje: string) => (
        <Tooltip title={equipaje}>
          {equipaje.slice(0, 10)}
          {equipaje.length > 10 && "..."}
        </Tooltip>
      ),
    },
    {
      title: "Precio",
      key: "precio",
      dataIndex: "precio",
      responsive: ["lg"],

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
      className="w-full"
      pagination={false}
      loading={isLoading}
      columns={columns}
      dataSource={data}
    />
  );
}
