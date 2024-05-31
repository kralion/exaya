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
        },
        {
          title: "Número",
          dataIndex: "codigo",
          key: "codigo",
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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const totalPrice = (data as any)?.reduce(
    (acc: number, current: { precio: number }) => acc + current.precio,
    0
  );

  const totalBoletos = data?.length;

  return (
    <Table
      className="w-full"
      pagination={false}
      loading={isLoading}
      columns={columns}
      dataSource={data}
      footer={
        data?.length
          ? () => (
              <div className="flex justify-between">
                <Tag>Total de Boletos: {totalBoletos}</Tag>
                <Tag>Total: {` S/.  ${String(totalPrice)}.00`}</Tag>
              </div>
            )
          : undefined
      }
    />
  );
}
