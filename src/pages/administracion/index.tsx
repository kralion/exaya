import AppLayout from "@/components/common/layout";
import AppHead from "@/components/common/head";
import ScheduleSkeleton from "@/components/skeletons/horarios-button";
import KpiGraphs from "@/components/ui/administracion/kpi-graphs";
import { StatsSegments } from "@/components/ui/administracion/stats";
import AdministracionSteps from "@/components/ui/administracion/steps";
import { UsuarioForm } from "@/components/ui/administracion/usuario-form";
import UsuariosTable from "@/components/ui/administracion/usuarios-table";
import { api } from "@/utils/api";
import { Alert, Button, DatePicker, Select, Space, Typography } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { TbInfoTriangleFilled } from "react-icons/tb";

const { Title, Text } = Typography;
type Estado = "PAGADO" | "RESERVADO" | "DISPONIBLE";
export default function Administracion() {
  const [dateQuery, setDateQuery] = useState(new Date());
  const { data: session } = useSession();
  const router = useRouter();
  const [usuarioIdToEdit, setUsuarioIdToEdit] = useState<string>("");
  const [currentViajeId, setCurrentViajeId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const [horarios, setHorarios] = useState<Date[]>([]);
  const [isNotAdmin, setIsNotAdmin] = useState(false);

  const onChangeRuta = (rutaId: string) => {
    if (!salidasDiarias?.response) {
      return;
    }

    const horariosFound = salidasDiarias.response
      .filter((viaje) => viaje.ruta.id === rutaId)
      .map((viaje) => viaje.salida);
    setHorarios(horariosFound);
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
  // useEffect(() => {
  //   if (session?.user?.rol !== "ADMIN") {
  //     setIsNotAdmin(true);
  //   }
  // }, [session, router]);

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
      <AppHead title="Administracion" />
      <Space direction="vertical" className="w-full gap-4">
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
                      type={currentViajeId === viajeId ? "primary" : "default"}
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
                className="w-full lg:w-[200px]"
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
                style={{ width: 215 }}
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
        <div className="flex  flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4">
            <StatsSegments
              isLoading={isLoadingCurrentViaje}
              totalReservados={totalBoletosReservados}
              totalPerdidos={totalBoletosNoVendidos}
              totalVendidos={totalBoletosVendidos}
            />
            <AdministracionSteps
              isLoading={isLoadingCurrentViaje}
              totalIncomeCurrentViaje={totalIncome}
              totalAsientos={currentViaje?.response?.bus.asientos}
              totalVendidos={totalBoletosVendidos}
            />
          </div>
          <KpiGraphs
            isLoading={isLoadingCurrentViaje}
            totalAsientos={currentViaje?.response?.bus.asientos}
            totalVendidos={totalBoletosVendidos}
            totalIncome={totalIncome}
          />
        </div>
        <Space className="mt-10 flex justify-between">
          <Title level={4}>Tabla de Usuarios</Title>
          <UsuarioForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            usuarioIdToEdit={usuarioIdToEdit}
            activator="Agregar Usuario"
          />
        </Space>
        <UsuariosTable
          setIsModalOpen={setIsModalOpen}
          setUsuarioIdToEdit={setUsuarioIdToEdit}
        />
      </Space>
    </AppLayout>
  );
}
