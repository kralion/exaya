import { api } from "@/utils/api";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

type BoletoEstado = "DISPONIBLE" | "RESERVADO" | "PAGADO";

function capitalizeFirstLetter(string: string | undefined) {
  if (string === undefined) {
    return "";
  }
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const columns: ColumnsType = [
  {
    title: "Nombres ",
    dataIndex: "pasajeroNombres",
    key: "nombres",
    render: (pasajeroNombres: string) => capitalizeFirstLetter(pasajeroNombres),
  },
  {
    title: "Apellidos",
    dataIndex: "pasajeroApellidos",
    key: "apellidos",
    render: (pasajeroApellidos: string) =>
      capitalizeFirstLetter(pasajeroApellidos),
  },
  {
    title: "N° Asiento ",
    dataIndex: "asiento",
    key: "asiento",
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

export function PasajerosManifiestoTable({ viajeId }: { viajeId: string }) {
  const { data: pasajeros, isLoading } =
    api.viajes.getBoletosByViajeId.useQuery({
      id: viajeId,
    });
  return (
    <Table
      pagination={{
        defaultPageSize: 5,
        position: ["bottomRight"],
        pageSizeOptions: ["5", "10", "20", "50"],
        showSizeChanger: true,
      }}
      loading={isLoading}
      columns={columns}
      dataSource={pasajeros?.response?.filter(
        (pasajero) => pasajero.estado === ("PAGADO" as BoletoEstado)
      )}
    />
  );
}
