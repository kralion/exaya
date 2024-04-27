import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import AdministracionStepsSkeleton from "@/components/skeletons/administracion-steps-skeleton";
import GaugeSkeleton from "@/components/skeletons/gauge-skeleton";
import GeneralStatisticsSkeleton from "@/components/skeletons/general-statistics-skeleton";
import ScheduleSkeleton from "@/components/skeletons/horarios-button";
import KpiGraphs from "@/components/ui/administracion/kpi-graphs";
import { StatsSegments } from "@/components/ui/administracion/stats";
import AdministracionSteps from "@/components/ui/administracion/steps";
import { UsuarioForm } from "@/components/ui/administracion/usuario-form";
import UsuariosTable from "@/components/ui/administracion/usuarios-table";
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
import { Suspense, useCallback, useEffect, useState } from "react";

const { Title, Text } = Typography;
type Estado = "PAGADO" | "RESERVADO" | "DISPONIBLE";
export default function Administracion() {
  const [dateQuery, setDateQuery] = useState(new Date());
  const [currentViajeId, setCurrentViajeId] = useState("");
  const {
    data: salidasDiarias,
    isError,
    isLoading,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery.toISOString(),
  });
  // TODO: Consider to use useTransition for this data
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
  const totalBoletosVendidos =
    currentViaje?.response?.boletos.filter(
      (boleto: { estado: Estado }) => boleto.estado === "PAGADO"
    ).length ?? 0;

  const totalBoletosReservados =
    currentViaje?.response?.boletos.filter(
      (boleto: { estado: Estado }) => boleto.estado === "RESERVADO"
    ).length ?? 0;
  const totalBoletosNoVendidos =
    (currentViaje?.response?.bus.asientos || 40) - totalBoletosVendidos;

  const totalIncomeEncomiendas =
    currentViaje?.response?.encomiendas.reduce(
      (acc: number, encomienda: { precio: number }) => acc + encomienda.precio,
      0
    ) ?? 0;

  const totalIncomeBoletos =
    currentViaje?.response?.boletos.reduce(
      (acc: number, boleto: { precio: number }) => acc + boleto.precio,
      0
    ) ?? 0;

  const totalIncome = totalIncomeBoletos + totalIncomeEncomiendas;

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

  return (
    <AppLayout>
      <AppHead title="Administracion" />
      <Space direction="vertical" className="gap-4">
        <Space className="flex items-start justify-between">
          <Space direction="vertical">
            <Title level={5}>Analíticas por Horarios</Title>
            <div className="flex items-center">
              {isError && (
                <Alert
                  message={
                    <p>
                      Error al obtener los datos de los
                      <code className="ml-2 underline">Horarios</code> por favor
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
                  const viajeData = salidasDiarias?.response?.find((ruta) =>
                    ruta.salida.toString().includes(horario.toString())
                  );
                  const viajeId = viajeData?.id;

                  return (
                    <Button
                      key={horario.toString()}
                      shape="round"
                      type={currentViajeId === viajeId ? "primary" : "default"}
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
          <Space className="gap-4">
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
        <Space className="items-start gap-4">
          {/* TODO: Use isLoading for rendering this skeletons */}
          <div className="flex flex-col gap-4">
            <Suspense fallback={<GeneralStatisticsSkeleton />}>
              <StatsSegments
                isLoading={isLoadingCurrentViaje}
                totalReservados={totalBoletosReservados}
                totalPerdidos={totalBoletosNoVendidos}
                totalVendidos={totalBoletosVendidos}
              />
            </Suspense>
            <Suspense fallback={<AdministracionStepsSkeleton />}>
              <AdministracionSteps
                isLoading={isLoadingCurrentViaje}
                totalIncomeCurrentViaje={totalIncome}
                totalAsientos={currentViaje?.response?.bus.asientos}
                totalVendidos={totalBoletosVendidos}
              />
            </Suspense>
          </div>
          <KpiGraphs
            isLoading={isLoadingCurrentViaje}
            totalAsientos={currentViaje?.response?.bus.asientos}
            totalVendidos={totalBoletosVendidos}
            totalIncome={totalIncome}
          />
        </Space>
        <Space className="mt-10 flex justify-between">
          <Title level={4}>Tabla de Usuarios</Title>
          <UsuarioForm activator="Agregar Usuario" />
        </Space>
        <UsuariosTable />
      </Space>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}
