import { Descriptions, Table, Tag } from "antd";
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
      dataIndex: "codigo",
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
  const totalPrice: number = (data as any)?.reduce(
    (acc: number, current: { precio: number }) => acc + current.precio,
    0
  );

  const totalBoletos = data?.length;
  const comission = totalPrice * 0.15;

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
              <Descriptions title={null}>
                <Descriptions.Item label="Boletos Vendidos">
                  {totalBoletos}
                </Descriptions.Item>
                <Descriptions.Item label="Total">
                  S/. {totalPrice.toFixed(2)}
                </Descriptions.Item>
                <Descriptions.Item label="Comision">
                  S/. {comission.toFixed(2)}
                </Descriptions.Item>
              </Descriptions>
            )
          : undefined
      }
    />
  );
}
