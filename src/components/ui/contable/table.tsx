import { api } from "@/utils/api";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
const IGV_RATE = 0.18;
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
      title: "Ruta",
      dataIndex: "ruta",
      filters: filterItems,
      width: "25%",
      filterSearch: true,
      render: (ruta: { ciudadOrigen: string; ciudadDestino: string }) =>
        `${ruta.ciudadOrigen} - ${ruta.ciudadDestino}`,
      onFilter: (
        value,
        record: {
          ruta: { ciudadDestino: string };
        }
      ) => record.ruta?.ciudadDestino?.includes(value as string),
    },
    {
      title: "Viaje",
      dataIndex: "salida",
      render: (salida: string) => {
        const currentSalida = new Date(salida);
        const time = currentSalida.toLocaleTimeString("es-PE", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        const date = currentSalida.toLocaleDateString("es-PE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        return `${date} - ${time}`;
      },
    },
    {
      title: "Bus",
      dataIndex: "bus",
      render: (bus: { placa: string }) => bus.placa,
    },
    {
      title: "NB",
      dataIndex: "boletos",
      render: (boletos: { length: number }) => boletos.length,
    },
    {
      title: "NE",
      dataIndex: "encomiendas",
      render: (encomiendas: { length: number }) => encomiendas.length,
    },

    {
      title: "MB",
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
      title: "ME",
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
    {
      // TODO: Add IGV in a kind of Tooltip
      title: "Total",
      render: (record: {
        boletos: { precio: number }[];
        encomiendas: { precio: number }[];
      }) => {
        const totalBoletos = record.boletos.reduce(
          (acc: number, boleto: { precio: number }) => acc + boleto.precio,
          0
        );
        const totalEncomiendas = record.encomiendas.reduce(
          (acc: number, encomienda: { precio: number }) =>
            acc + encomienda.precio,
          0
        );
        const totalIncome = totalBoletos + totalEncomiendas;
        const igv = totalIncome * IGV_RATE;
        return totalIncome + igv;
      },
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
