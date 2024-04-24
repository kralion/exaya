import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import ScheduleSkeleton from "@/components/skeletons/horarios-button";
import { ContableCard } from "@/components/ui/contable/contable-card";
import { EstadisticasNumericas } from "@/components/ui/contable/steps-statistics";
import TableContable from "@/components/ui/contable/table";
import { api } from "@/utils/api";
import {
  Alert,
  Button,
  DatePicker,
  FloatButton,
  Select,
  Space,
  Typography,
  type DatePickerProps,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const { Title, Text } = Typography;
export default function Contable() {
  const [dateQuery, setDateQuery] = useState(new Date());
  const {
    data: salidasDiarias,
    isLoading,
    isError,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery.toISOString(),
  });

  const [scheduleTimeQuery, setScheduleTimeQuery] = useState<string>(
    dayjs().format("HH:mm")
  );
  const { data: viajeQueried, isLoading: isLoadingContableQuery } =
    api.viajes.getViajesByScheduleTime.useQuery({
      time: scheduleTimeQuery,
    });

  const totalTravelEncomiendasIncome =
    viajeQueried?.response?.reduce(
      (
        total: number,
        viaje: {
          encomiendas: { precio: number }[];
        }
      ) =>
        total +
        viaje.encomiendas.reduce(
          (
            acc: number,
            encomienda: {
              precio: number;
            }
          ) => acc + encomienda.precio,
          0
        ),
      0
    ) ?? 0;

  const totalTravelTicketsIncome =
    viajeQueried?.response?.reduce(
      (
        total: number,
        viaje: {
          boletos: { precio: number }[];
        }
      ) =>
        total +
        viaje.boletos.reduce(
          (
            acc: number,
            boleto: {
              precio: number;
            }
          ) => acc + boleto.precio,
          0
        ),
      0
    ) ?? 0;
  const total15PercentComission =
    (totalTravelTicketsIncome + totalTravelEncomiendasIncome) * 0.15;

  const [currentViajeId, setCurrentViajeId] = useState("");

  const handleCurrentViaje = (id: string) => {
    setCurrentViajeId(id);
  };
  const [horarios, setHorarios] = useState<Date[]>([]);
  const onChangeRuta = (viajeId: string) => {
    if (!salidasDiarias?.response) {
      console.error("salidasDiarias or its response is not defined");
      return;
    }
    const horariosFound = salidasDiarias.response.find(
      (salida) => salida.id === viajeId
    );
    if (!horariosFound) {
      console.error("horariosFound is not defined");
      return;
    }
    setHorarios(
      horariosFound.salida.toString().split(",") as unknown as Date[]
    );
  };
  return (
    <AppLayout>
      <AppHead title="Contable" />
      <div className="space-y-7">
        <Space className="flex items-start justify-between">
          <Space direction="vertical">
            <Title level={5}>Analíticas por Horarios</Title>
            <div className="flex items-center ">
              {isError && (
                <Alert
                  message={
                    <p>
                      Error al obtener los datos de los
                      <code className="ml-2 underline">Horarios</code> por favor
                      <a href="." className="ml-2 underline">
                        recarge la página
                      </a>
                    </p>
                  }
                  type="error"
                  showIcon
                />
              )}
              {isLoading && <ScheduleSkeleton />}
              {salidasDiarias?.response?.length === 0 && (
                <Alert
                  className="px-2 py-0.5"
                  message={
                    <Text type="warning">
                      Para ver los horarios, seleccione una fecha y una ruta
                    </Text>
                  }
                  type="warning"
                  showIcon
                />
              )}

              {horarios.map((horario) => (
                <Button
                  key={horario.toString()}
                  shape="round"
                  type={
                    currentViajeId === horario.toString()
                      ? "primary"
                      : "default"
                  }
                  className="mr-2"
                  onClick={() => handleCurrentViaje(horario.toString())}
                >
                  {new Date(horario).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Button>
              ))}
            </div>
          </Space>
          <Space className=" gap-4">
            <Space direction="vertical">
              <Title level={5}>Fecha</Title>
              <DatePicker
                style={{ width: 120 }}
                placeholder="24-04-2024"
                onChange={(date) => {
                  if (date) {
                    setDateQuery(date.toDate());
                  }
                }}
              />
            </Space>
            <Space direction="vertical">
              <Title level={5}>Ruta</Title>
              <Select
                placeholder="Ruta"
                onChange={(id: string) => {
                  onChangeRuta(id);
                }}
                loading={isLoading}
                style={{ width: 215 }}
              >
                {salidasDiarias?.response?.map(
                  ({
                    id,
                    ruta,
                  }: {
                    id: string;
                    ruta: {
                      ciudadOrigen: string;
                      ciudadDestino: string;
                    };
                  }) => (
                    <Select.Option key={id} value={id}>
                      {ruta.ciudadOrigen} - {ruta.ciudadDestino}
                    </Select.Option>
                  )
                )}
              </Select>
            </Space>
          </Space>
        </Space>
        <div className="space-y-3.5">
          <div className="flex items-baseline justify-between">
            <Title level={5} className="pt-7 tracking-tight text-slate-800">
              Historial de Registros Contables
            </Title>
            <DatePicker
              style={{ width: 120 }}
              placeholder="24-04-2024"
              onChange={(date) => {
                if (date) {
                  setDateQuery(date.toDate());
                }
              }}
            />
          </div>
          <TableContable scheduleDateQuery={dateQuery} />
        </div>
      </div>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}
