"use client";
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
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { TbInfoTriangleFilled } from "react-icons/tb";

const { Title, Text } = Typography;
export default function Contable() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isNotAdmin, setIsNotAdmin] = useState(false);
  const [dateQuery, setDateQuery] = useState(new Date());
  const [currentViajeId, setCurrentViajeId] = useState("");
  const {
    data: salidasDiarias,
    isError,
    isLoading,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery.toISOString(),
  });

  const { data: currentViaje, isLoading: isLoadingCurrentViaje } =
    api.viajes.getViajeById.useQuery({
      id: currentViajeId,
    });

  const [horarios, setHorarios] = useState<Date[]>([]);
  const onChangeRuta = (rutaId: string) => {
    if (!salidasDiarias?.response) {
      return;
    }

    const horariosFound = salidasDiarias.response
      .filter((viaje) => viaje.ruta.id === rutaId)
      .map((viaje) => viaje.salida);
    setHorarios(horariosFound);
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
  const getUniqueRoutes = (salidasDiarias: {
    response: {
      ruta: { ciudadOrigen: string; ciudadDestino: string; id: string };
    }[];
  }) => {
    const uniqueRoutes = new Map();
    salidasDiarias?.response?.forEach(({ ruta }) => {
      const key = `${ruta.ciudadOrigen}-${ruta.ciudadDestino}`;
      if (!uniqueRoutes.has(key)) {
        uniqueRoutes.set(key, ruta.id);
      }
    });

    return Array.from(uniqueRoutes.entries());
  };
  useEffect(() => {
    if (session?.user?.rol !== "ADMIN") {
      setIsNotAdmin(true);
    }
  }, [session, router]);

  if (isNotAdmin) {
    return (
      <AppLayout>
        <AppHead title="Administracion" />
        <Space
          direction="vertical"
          className="h-full w-full items-center justify-center gap-2 text-center"
        >
          <TbInfoTriangleFilled className="h-24 w-24 text-red-500 drop-shadow-md" />

          <Title level={5}>Página restringida para Administradores</Title>

          <Link
            className="flex items-center gap-1 text-red-500 underline hover:text-red-400 hover:underline hover:opacity-80"
            href="/dashboard"
          >
            <LuMoveLeft />
            Volver a la página principal
          </Link>
        </Space>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <AppHead title="Contable" />
      <Space className="w-full gap-14" direction="vertical">
        <Space direction="vertical" className="w-full gap-3.5">
          <Space className="flex flex-col items-start justify-between lg:flex-row">
            <Space direction="vertical">
              <Title level={5}>Analíticas por Horarios</Title>
              <div className="flex items-center">
                {isError && (
                  <Alert
                    message={
                      <Text type="danger">
                        Error al cargar los horarios, intenta de nuevo.
                      </Text>
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
                          Debes de seleccionar una fecha y ruta para ver los
                          horarios
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
                          Para ver los horarios, ahora seleccione la ruta
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
                  horarios.map((horario, index) => {
                    const viajeData = salidasDiarias?.response?.find(
                      (ruta) => ruta.salida.getTime() === horario.getTime()
                    );
                    const viajeId = viajeData?.id;
                    return (
                      <Button
                        key={index}
                        shape="round"
                        size="small"
                        type={
                          currentViajeId === viajeId ? "primary" : "default"
                        }
                        className="mr-2 font-mono"
                        onClick={() => {
                          setCurrentViajeId(viajeId as string);
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
                  className="w-full lg:w-[120px]"
                  placeholder="24-04-2024"
                  onChange={onDateChange}
                  // TODO: Fix this
                  // defaultValue={dayjs(new Date()).toDate()}
                />
              </Space>
              <Space direction="vertical">
                <Title level={5}>Ruta</Title>
                <Select
                  placeholder="Ruta"
                  onChange={(rutaId: string) => {
                    onChangeRuta(rutaId);
                  }}
                  loading={isLoading}
                  style={{ width: 210 }}
                  disabled={
                    !salidasDiarias?.response ||
                    salidasDiarias.response.length === 0
                  }
                >
                  {salidasDiarias?.response &&
                    getUniqueRoutes(salidasDiarias).map(
                      ([rutaString, rutaId]) => (
                        <Select.Option
                          key={rutaString as string}
                          value={rutaId as string}
                        >
                          {rutaString}
                        </Select.Option>
                      )
                    )}
                </Select>
              </Space>
            </Space>
          </Space>
          <div className="flex flex-col gap-3.5 lg:flex-row">
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
          <TableContable />
        </Space>
      </Space>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}
