import { api } from "@/utils/api";
import { Button, Dropdown, Space, Table, Tag, Tooltip, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { type Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import { IoFilterSharp } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { ComprarPasajeModal } from "../boletos/comprar-pasaje-modal";
import { Manifiesto } from "./manifiesto";
import { MisBoletos } from "./mis-boletos-modal";
import { RegistrarPasajeModal } from "./registrar-pasaje-modal";
import { useRouter } from "next/navigation";

export function PasajesTable({ dayQuery }: { dayQuery: Dayjs }) {
  const { data: viajes, isLoading } = api.viajes.getViajesByDate.useQuery({
    date: dayQuery.format("YYYY-MM-DD"),
  });
  const router = useRouter();
  const { data: session } = useSession();
  const origenFilterItems = viajes?.response
    ?.map((viaje) => ({
      text: viaje.ruta.ciudadOrigen,
      value: viaje.ruta.ciudadOrigen,
    }))
    .filter(
      (viaje, index, self) =>
        index ===
        self.findIndex((v) => v.text === viaje.text && v.value === viaje.value)
    );

  const destinoFilterItems = viajes?.response
    ?.map((viaje) => ({
      text: viaje.ruta.ciudadDestino,
      value: viaje.ruta.ciudadDestino,
    }))
    .filter(
      (viaje, index, self) =>
        index ===
        self.findIndex((v) => v.text === viaje.text && v.value === viaje.value)
    );
  const columns: ColumnsType = [
    {
      title: "Origen",
      dataIndex: "ruta",
      responsive: ["lg"],
      key: "origen",
      render: (ruta: { ciudadOrigen: string }) => ruta.ciudadOrigen,
      filterOnClose: true,
      filters: origenFilterItems,
      filterIcon: <IoFilterSharp size={16} />,
      onFilter: (
        value,

        record: {
          ruta: { ciudadOrigen: string };
        }
      ) => record.ruta.ciudadOrigen.includes(value as string),
    },
    {
      title: "Destino",
      dataIndex: "ruta",
      key: "destino",
      render: (ruta: { ciudadDestino: string }) => ruta.ciudadDestino,
      filterOnClose: true,
      filters: destinoFilterItems,
      filterIcon: <IoFilterSharp size={16} />,
      onFilter: (
        value,
        record: {
          ruta: { ciudadDestino: string };
        }
      ) => record.ruta?.ciudadDestino?.includes(value as string),
    },

    {
      title: "Salida",
      dataIndex: "salida",
      key: "horaSalida",
      sorter: {
        compare: (
          a: {
            salida: string;
          },
          b: {
            salida: string;
          }
        ) => {
          const dateA = new Date(a.salida);
          const dateB = new Date(b.salida);
          return dateA.getTime() - dateB.getTime();
        },
      },
      render: (salida: string) => {
        const salidaFormatted = new Date(salida);
        return (
          <Tag>
            {salidaFormatted.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Tag>
        );
      },
    },
    {
      title: "Placa",
      dataIndex: "bus",
      responsive: ["lg"],

      key: "placaBus",
      render: (bus: { placa: string }) => (
        <Tooltip className="cursor-pointer" title={bus.placa}>
          <TbBus
            strokeWidth={1}
            size={25}
            className="text-zinc-600 dark:text-zinc-400"
          />
        </Tooltip>
      ),
    },
    {
      title: session ? "Tarifas" : "Precio",
      key: "tarifas",
      dataIndex: "tarifas",
      responsive: ["lg"],
      render: (tarifas: number[]) => {
        const tarifaClassified = tarifas.map((tarifa) => {
          if (tarifa <= 20) return "orange-inverse";
          if (tarifa <= 40) return "blue-inverse";
          if (tarifa <= 60) return "green-inverse";
          return "red";
        });
        const tarifaGeneral = tarifas[0];
        return session ? (
          tarifas.map((tarifa, index) => (
            <Tag key={index} color={tarifaClassified[index]}>
              {tarifa.toLocaleString("es-PE", {
                style: "currency",
                currency: "PEN",
              })}
            </Tag>
          ))
        ) : (
          <Tag key="precio" color="green-inverse">
            {tarifaGeneral?.toLocaleString("es-PE", {
              style: "currency",
              currency: "PEN",
            })}
          </Tag>
        );
      },
    },
    {
      title: "",
      key: "acciones",
      dataIndex: "id",
      render: (id: string) => {
        const items = [
          {
            key: "1",
            label: (
              <div>
                <RegistrarPasajeModal viajeId={id} />
                <Typography
                  className="lg:hidden"
                  onClick={() => router.push(`/viaje/${id}`)}
                >
                  Ver
                </Typography>
              </div>
            ),
          },
          {
            key: "2",
            label: <Manifiesto viajeId={id} />,
          },
          {
            key: "3",
            label: <MisBoletos viajeId={id} />,
          },
        ];

        return session ? (
          <Dropdown trigger={["click"]} menu={{ items }}>
            <Button type="primary" className="lg:px-auto px-6">
              Ver
            </Button>
          </Dropdown>
        ) : (
          <div>
            <Button
              type="primary"
              className="px-6 lg:hidden"
              onClick={() => router.push(`/boletos/viaje/${id}`)}
            >
              Ver
            </Button>
            <ComprarPasajeModal viajeId={id} />
          </div>
        );
      },
    },
  ];
  return (
    <Table
      expandable={{
        expandedRowRender: (record: {
          salida: Date;
          bus: { asientos: number };
          boletos: any[];
        }) => (
          <Space className=" w-full justify-between ">
            <Space>
              <Typography.Text type="secondary" className="lg:text-xs">
                Salida
              </Typography.Text>
              <Typography.Text className=" font-mono text-xs font-semibold lg:text-sm">
                {new Date(record.salida).toLocaleDateString()}
              </Typography.Text>
            </Space>
            <Space>
              <Typography.Text type="secondary" className="lg:text-xs">
                Asientos
              </Typography.Text>
              <Typography.Text className=" font-mono text-xs font-semibold lg:text-sm">
                {record.bus.asientos}
              </Typography.Text>
            </Space>

            <Space>
              <Typography.Text type="secondary" className="text-xs lg:text-sm">
                Ocupados
              </Typography.Text>
              <Typography.Text className=" font-mono text-xs font-semibold lg:text-sm">
                {record.boletos.length}
              </Typography.Text>
            </Space>
          </Space>
        ),
      }}
      pagination={false}
      className=" rounded-xl border shadow duration-300  dark:border-zinc-800 lg:min-w-[55vw]"
      loading={isLoading}
      columns={columns}
      dataSource={viajes?.response}
    />
  );
}
