import { api } from "@/utils/api";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

export default function TableContable({
  scheduleDateQuery,
}: {
  scheduleDateQuery: Date;
}) {
  const { data: contables } = api.viajes.getViajesByDate.useQuery({
    date: scheduleDateQuery.toISOString(),
  });

  const filterItems = contables?.response?.map((contable) => ({
    text: contable.ruta.ciudadDestino,
    value: contable.ruta.ciudadDestino,
  }));

  const columns: ColumnsType = [
    {
      title: "Destino",
      dataIndex: "ruta",
      filters: filterItems,
      filterSearch: true,
      onFilter: (
        value,
        record: {
          ruta: { ciudadDestino: string };
        }
      ) => record.ruta?.ciudadDestino?.includes(value as string),
    },
    {
      title: "N° Boletos",
      dataIndex: "boletos",
      render: (boletos: { length: number }) => boletos.length,
    },
    {
      title: "N° Encomiendas",
      dataIndex: "encomiendas",
      render: (encomiendas: { length: number }) => encomiendas.length,
    },

    {
      title: "Montos en S/.",
      children: [
        {
          title: "Boletos",
          dataIndex: "boletos",
          render: (boletos: { precio: number }[]) => {
            const total = boletos.reduce(
              (acc: number, boleto: { precio: number }) => acc + boleto.precio,
              0
            );
            return total;
          },
        },
        {
          title: "Encomiendas",
          dataIndex: "encomiendas",
          render: (encomiendas: { precio: number }[]) => {
            const total = encomiendas.reduce(
              (acc: number, encomienda: { precio: number }) =>
                acc + encomienda.precio,
              0
            );
            return total;
          },
        },
      ],
    },
  ];
  return (
    <Table
      pagination={{
        position: ["bottomCenter"],
        defaultPageSize: 5,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10"],
      }}
      columns={columns}
      dataSource={contables?.response}
    />
  );
}
