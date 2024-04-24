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
  Typography,
  type DatePickerProps,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { MdTimelapse } from "react-icons/md";

const { Title } = Typography;
export default function Contable() {
  const placeHolderDate = new Date(Date.now()).toISOString().slice(0, 10);
  const [dateQuery, setDateQuery] = useState<string>(placeHolderDate);
  const [rutaId, setRutaId] = useState<string>("");
  const {
    data: salidasDiarias,
    isLoading,
    isError,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery,
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
  const onDateChange: DatePickerProps["onChange"] = (date) => {
    setDateQuery(date?.toISOString().slice(0, 10) ?? placeHolderDate);
  };
  return (
    <AppLayout>
      <AppHead title="Contable" />
      <div className="space-y-7">
        <div className="flex flex-col gap-3.5">
          <div className="flex justify-between">
            <div>
              <Title level={5} className="text-slate-800">
                Horarios
              </Title>
              <div className="flex items-center gap-2">
                {isLoading && <ScheduleSkeleton />}
                {salidasDiarias?.response?.length === 0 && (
                  <Alert
                    message="No hay horarios disponibles que contabilizar para hoy"
                    type="warning"
                    showIcon
                  />
                )}
                {isError && (
                  <Alert
                    message="Error al obtener los horarios de salida, por favor recargue la página"
                    type="error"
                    showIcon
                  />
                )}

                {salidasDiarias?.response
                  ?.filter((salidaDiaria) => salidaDiaria.ruta.id === rutaId)
                  ?.map(({ id, salida }: { id: string; salida: Date }) => (
                    <Button
                      key={id}
                      onClick={() =>
                        setScheduleTimeQuery(salida.toLocaleTimeString())
                      }
                      icon={<MdTimelapse className="animate-spin" />}
                      shape="round"
                      type="dashed"
                    >
                      {salida.toLocaleTimeString()}
                    </Button>
                  ))}
              </div>
            </div>

            <div>
              <Title level={5} className=" text-slate-800">
                Búsqueda Específica
              </Title>{" "}
              <div className="flex gap-3.5">
                <DatePicker
                  style={{
                    height: 32,
                  }}
                  onChange={onDateChange}
                  placeholder={placeHolderDate}
                />

                <Select
                  placeholder="Ayacucho-Huancayo"
                  loading={isLoading}
                  style={{ width: 180 }}
                >
                  {salidasDiarias?.response?.map(
                    (salidaDiaria: {
                      ruta: {
                        ciudadOrigen: string;
                        ciudadDestino: string;
                        id: string;
                      };
                    }) => (
                      <Select.Option
                        key={salidaDiaria.ruta.id}
                        value={salidaDiaria.ruta.id}
                        onClick={() => setRutaId(salidaDiaria.ruta.id)}
                      >
                        {salidaDiaria.ruta.ciudadOrigen} -{" "}
                        {salidaDiaria.ruta.ciudadDestino}
                      </Select.Option>
                    )
                  )}
                </Select>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between"></div>
          <div className="flex gap-3.5">
            <ContableCard
              isLoading={isLoadingContableQuery}
              cardTitle="Recaudado"
              cardValue={totalTravelTicketsIncome}
              cardIcon="https://img.icons8.com/?size=1x&id=104073&format=png"
              cardConcept="Viajes & Encomiendas"
            />
            <ContableCard
              isLoading={isLoadingContableQuery}
              cardTitle="Ingresos"
              cardValue={totalTravelTicketsIncome - total15PercentComission}
              cardIcon="https://img.icons8.com/?size=1x&id=53863&format=png"
              cardConcept="75% del recaudado"
            />
            <ContableCard
              isLoading={isLoadingContableQuery}
              cardTitle="Comisión"
              cardValue={total15PercentComission}
              cardIcon="https://img.icons8.com/?size=1x&id=Yljd2UCqSpbe&format=png"
              cardConcept="15% del recaudado"
            />
            <ContableCard
              isLoading={isLoadingContableQuery}
              cardTitle="Encomiendas"
              cardValue={totalTravelEncomiendasIncome}
              cardIcon="https://img.icons8.com/?size=1x&id=13133&format=png"
              cardConcept="Ingresos"
            />
          </div>
          <EstadisticasNumericas />
        </div>
        <div className="space-y-3.5">
          <div className="flex items-baseline justify-between">
            <Title level={5} className="pt-7 tracking-tight text-slate-800">
              Historial de Registros Contables
            </Title>
            <DatePicker onChange={onDateChange} />
          </div>
          <TableContable scheduleDateQuery={dateQuery} />
        </div>
      </div>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}
