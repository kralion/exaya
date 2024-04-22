import { Table, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableProps } from "antd/lib/table";
import { TbLicense } from "react-icons/tb";

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
          title: "Codigo",
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
      title: "Pasajero",
      dataIndex: "pasajeroDni",
      key: "viaje",
      responsive: ["lg"],
      render: (viaje: { bus: { placa: string } }) => (
        <Tooltip className="cursor-pointer" title={viaje.bus.placa}>
          <TbLicense />
        </Tooltip>
      ),
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
