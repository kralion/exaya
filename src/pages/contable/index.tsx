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

const { Title, Text } = Typography;
export default function Contable() {
  const [dateQuery, setDateQuery] = useState(new Date());
  const [currentViajeId, setCurrentViajeId] = useState("");
  const {
    data: salidasDiarias,
    isLoading,
    isError,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery.toISOString(),
  });

  const { data: viajeById, isLoading: isLoadingContableQuery } =
    api.viajes.getViajeById.useQuery({
      id: currentViajeId,
    });
  const handleCurrentViaje = (id: string) => {
    setCurrentViajeId(id);
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
    viajeById?.response?.encomiendas.reduce(
      (
        total: number,
        encomienda: {
          precio: number;
        }
      ) => total + encomienda.precio,
      0
    ) ?? 0;

  const totalTravelBoletosIncome =
    viajeById?.response?.boletos.reduce(
      (
        total: number,
        boleto: {
          precio: number;
        }
      ) => total + boleto.precio,
      0
    ) ?? 0;
  const onDateChange = useCallback(
    (date: Date | null) => {
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

  const total15PercentComission =
    (totalTravelBoletosIncome + totalTravelEncomiendasIncome) * 0.15;

  return (
    <AppLayout>
      <AppHead title="Contable" />
      <div className="space-y-7">
        <div className="flex flex-col gap-3.5">
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
                  horarios.map((horario) => (
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
              isLoading={isLoadingContableQuery}
              cardTitle="Recaudado"
              cardValue={totalTravelBoletosIncome}
              cardIcon="https://img.icons8.com/?size=1x&id=104073&format=png"
              cardConcept="Viajes & Encomiendas"
            />
            <ContableCard
              isLoading={isLoadingContableQuery}
              cardTitle="Ingresos"
              cardValue={totalTravelBoletosIncome - total15PercentComission}
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
