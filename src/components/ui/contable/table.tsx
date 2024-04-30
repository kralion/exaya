import { api } from "@/utils/api";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IoFilterSharp } from "react-icons/io5";
const IGV_RATE = 0.18;
export default function TableContable() {
  const { data: contables, isLoading } = api.viajes.getAllViajes.useQuery();

  const filterItems = (contables?.response || []).map((contable) => ({
    text: `${contable.ruta.ciudadOrigen} - ${contable.ruta.ciudadDestino}`,
    value: `${contable.ruta.ciudadOrigen} - ${contable.ruta.ciudadDestino}`,
  }));

  const columns: ColumnsType = [
    {
      title: "Ruta",
      dataIndex: "ruta",
      key: "ruta",
      filters: filterItems,
      filterOnClose: true,
      filterIcon: <IoFilterSharp size={16} />,
      width: "25%",
      render: (ruta: { ciudadOrigen: string; ciudadDestino: string }) =>
        `${ruta.ciudadOrigen} - ${ruta.ciudadDestino}`,
      onFilter: (
        value,
        record: {
          ruta: { ciudadOrigen: string; ciudadDestino: string };
        }
      ) =>
        `${record.ruta?.ciudadOrigen} - ${record.ruta?.ciudadDestino}`.includes(
          value as string
        ),
    },

    {
      title: "Viaje",
      key: "viaje",
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
      key: "bus",
      render: (bus: { placa: string }) => bus.placa,
    },
    {
      title: "NB",
      dataIndex: "boletos",
      key: "boletos",
      render: (boletos: { length: number }) => boletos.length,
    },
    {
      title: "NE",
      dataIndex: "encomiendas",
      key: "encomiendas",
      render: (encomiendas: { length: number }) => encomiendas.length,
    },

    {
      title: "MB",
      dataIndex: "boletos",
      key: "boletos",
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
      key: "encomiendas",
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
      key: "total",
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
        const totalIncomeWithIGV = totalIncome + igv;

        return (
          <Tag
            title="Estará de rojo hasta alcanzar la meta"
            color={
              totalIncomeWithIGV > 1000
                ? "green"
                : totalIncomeWithIGV > 800
                ? "blue"
                : "red"
            }
          >
            {totalIncomeWithIGV.toLocaleString("es-PE", {
              style: "currency",
              currency: "PEN",
            })}
          </Tag>
        );
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
      loading={isLoading}
      columns={columns}
      dataSource={contables?.response}
    />
  );
}
