import { api } from "@/utils/api";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

export default function TableContable() {
  const { data: boletos } = api.boletos.getAllBoletos.useQuery();
  const filterItems = boletos?.map((boleto) => ({
    text: boleto.viaje.ruta.ciudadDestino,
    value: boleto.viaje.ruta.ciudadDestino,
  }));

  const columns: ColumnsType = [
    {
      title: "Destino",
      dataIndex: "ciudadDestino",
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
      title: "Serie",
      dataIndex: "codigo",
    },
    {
      title: "Numero",
      dataIndex: "numero",
    },
    { title: "Asiento", dataIndex: "asiento" },
    {
      title: "Viaje",
      dataIndex: "viaje",
    },
    {
      title: "Monto",
      dataIndex: "monto",
      render: (text) => (
        <Tag
          className="rounded-full font-semibold shadow-md"
          color="green-inverse"
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Cliente DNI",
      dataIndex: "clientedni",
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
      dataSource={boletos}
    />
  );
}
