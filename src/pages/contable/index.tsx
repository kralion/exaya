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
} from "antd";
import { useCallback, useEffect, useState } from "react";
import dayjs, { type Dayjs } from "dayjs";

const { Title, Text } = Typography;
export default function Contable() {
  const [dateQuery, setDateQuery] = useState<Dayjs>(() => dayjs());
  const [currentViajeId, setCurrentViajeId] = useState("");
  const {
    data: salidasDiarias,
    isLoading,
    isError,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery.format("YYYY-MM-DD"),
  });

  const { data: currentViaje, isLoading: isLoadingCurrentViaje } =
    api.viajes.getViajeById.useQuery({
      id: currentViajeId,
    });
  const handleCurrentViaje = (viajeId: string) => {
    setCurrentViajeId(viajeId);
  };
  const [horarios, setHorarios] = useState<Date[]>([]);
  const onChangeRuta = (viajeId: string) => {
    if (!salidasDiarias?.response) {
      console.error("salidasDiarias or its response is not defined");
      return;
    }
    setHorarios([]);

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
  const totalTravelEncomiendasIncome =
    currentViaje?.response?.encomiendas.reduce(
      (
        total: number,
        encomienda: {
          precio: number;
        }
      ) => total + encomienda.precio,
      0
    ) ?? 0;

  const totalTravelBoletosIncome =
    currentViaje?.response?.boletos.reduce(
      (
        total: number,
        boleto: {
          precio: number;
        }
      ) => total + boleto.precio,
      0
    ) ?? 0;
  const onDateChange = useCallback(
    (date: Dayjs) => {
      if (date) {
        setDateQuery(date);
      }
    },
    [setDateQuery]
  );
  useEffect(() => {
    setHorarios([]);
  }, [dateQuery]);
  useEffect(() => {
    setCurrentViajeId("");
  }, [dateQuery]);

  const totalBoletosVendidos = currentViaje?.response?.boletos.length ?? 0;
  const totalEncomiendasRegistradas =
    currentViaje?.response?.encomiendas.length ?? 0;

  const total15PercentComission =
    (totalTravelBoletosIncome + totalTravelEncomiendasIncome) * 0.15;

  return (
    <AppLayout>
      <AppHead title="Contable" />
      <Space className="w-full gap-14" direction="vertical">
        <Space direction="vertical" className="w-full gap-3.5">
          <Space className="flex items-start justify-between">
            <Space direction="vertical">
              <Title level={5}>Analíticas por Horarios</Title>
              <div className="flex items-center">
                {isError && (
                  <Alert
                    message={
                      <p>
                        Error al obtener los datos de los
                        <code className="ml-2 underline">Horarios</code> por
                        favor
                        <a href="." className="ml-2 underline">
                          recargue la página
                        </a>
                      </p>
                    }
                    type="error"
                    showIcon
                  />
                )}

                {!isError && isLoading && <ScheduleSkeleton />}

                {!isError &&
                  !isLoading &&
                  salidasDiarias?.response?.length === 0 && (
                    <Alert
                      className="px-2 py-0.5"
                      message={
                        <Text type="danger">
                          No hay horarios disponibles para la ruta seleccionada
                        </Text>
                      }
                      type="error"
                      showIcon
                    />
                  )}

                {!isError &&
                  !isLoading &&
                  (salidasDiarias?.response?.length ?? 0) > 0 &&
                  horarios.length === 0 && (
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

                {!isError &&
                  !isLoading &&
                  (salidasDiarias?.response?.length ?? 0) > 0 &&
                  horarios.length > 0 &&
                  horarios.map((horario) => {
                    const viajeData = salidasDiarias?.response?.find(
                      (salida) =>
                        salida.salida.toString() === horario.toString()
                    );
                    const viajeId = viajeData?.id;

                    return (
                      <Button
                        key={horario.toString()}
                        shape="round"
                        type={
                          currentViajeId === viajeId ? "primary" : "default"
                        }
                        className="mr-2"
                        onClick={() => {
                          handleCurrentViaje(viajeId || "");
                        }}
                      >
                        {new Date(horario).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Button>
                    );
                  })}
              </div>
            </Space>
            <Space className=" gap-4">
              <Space direction="vertical">
                <Title level={5}>Fecha</Title>
                <DatePicker
                  style={{ width: 120 }}
                  placeholder="24-04-2024"
                  onChange={onDateChange}
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
                  disabled={
                    !salidasDiarias?.response ||
                    salidasDiarias.response.length === 0
                  }
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
          <div className="flex gap-3.5">
            <ContableCard
              isLoading={isLoadingCurrentViaje}
              cardTitle="Total Bruto"
              cardValue={
                totalTravelBoletosIncome + totalTravelEncomiendasIncome
              }
              cardIcon="https://img.icons8.com/?size=48&id=QcHNP3WWSRuv&format=png"
              cardConcept="Encomiendas y boletos de viaje"
            />
            <ContableCard
              isLoading={isLoadingCurrentViaje}
              cardTitle="Boletos de Viaje"
              cardValue={totalTravelBoletosIncome}
              cardIcon="https://img.icons8.com/?size=48&id=M7oiFLCDxN28&format=png"
              cardConcept="Recaudado por boletos de viaje"
            />

            <ContableCard
              isLoading={isLoadingCurrentViaje}
              cardTitle="Encomiendas"
              cardValue={totalTravelEncomiendasIncome}
              cardIcon="https://img.icons8.com/?size=48&id=t389Jj1YrNtG&format=png"
              cardConcept="Ingresos por encomiendas"
            />
            <ContableCard
              isLoading={isLoadingCurrentViaje}
              cardTitle="Comisiones"
              cardValue={total15PercentComission}
              cardIcon="https://img.icons8.com/?size=48&id=o1jbKGDkJEkU&format=png"
              cardConcept="15% del total bruto recaudado"
            />
          </div>
          <EstadisticasNumericas
            totalBoletosVendidos={totalBoletosVendidos}
            totalEncomiendasRegistradas={totalEncomiendasRegistradas}
          />
        </Space>
        <Space direction="vertical" className="w-full">
          <Title level={5} className="tracking-tight">
            Historial de Registros Contables
          </Title>
          <TableContable scheduleDateQuery={dateQuery} />
        </Space>
      </Space>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}
