import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import AdministracionStepsSkeleton from "@/components/skeletons/administracion-steps-skeleton";
import GaugeSkeleton from "@/components/skeletons/gauge-skeleton";
import GeneralStatisticsSkeleton from "@/components/skeletons/general-statistics-skeleton";
import ScheduleSkeleton from "@/components/skeletons/horarios-button";
import KpiChart from "@/components/ui/administracion/kpi-chart";
import KpiUtilidad from "@/components/ui/administracion/kpi-utilidad";
import { StatsSegments } from "@/components/ui/administracion/stats";
import AdministracionSteps from "@/components/ui/administracion/steps";
import { UsuarioForm } from "@/components/ui/administracion/usuario-form";
import UsuariosTable from "@/components/ui/administracion/usuarios-table";
import { api } from "@/utils/api";
import { Alert, Button, DatePicker, Select, Typography } from "antd";
import { Suspense } from "react";
import { MdTimelapse } from "react-icons/md";
const { Title } = Typography;

type TRutaRender = {
  id: string;
  ruta: {
    ciudadOrigen: string;
    ciudadDestino: string;
  };
};

export default function Administracion() {
  const {
    data: salidasDiarias,
    isError,
    isLoading,
  } = api.viajes.getAllViajes.useQuery();

  return (
    <AppLayout>
      <AppHead title="Administracion" />
      <div className="mb-7">
        <div className="flex justify-between">
          <div>
            <Title level={5} className="text-slate-800">
              Analíticas por Horarios
            </Title>
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
              {salidasDiarias?.response.length === 0 && (
                <Alert
                  message={
                    <p>
                      Ups parece que no hay
                      <code className="ml-2 underline">Horarios</code> para
                      mostrar
                    </p>
                  }
                  type="warning"
                  showIcon
                />
              )}
              {salidasDiarias?.response.map(
                ({ id, salida }: { id: string; salida: Date }) => (
                  <Button
                    key={id}
                    // onClick={() =>
                    //   setScheduleTimeQuery(salida.toLocaleTimeString())
                    // }
                    icon={<MdTimelapse className="animate-spin" />}
                    shape="round"
                    type="dashed"
                  >
                    {salida.toLocaleTimeString()}
                  </Button>
                )
              )}
            </div>
          </div>
          <div>
            <Title level={5} className=" pr-48 text-slate-800">
              Busqueda Específica
            </Title>
            <div className="flex gap-3.5">
              <DatePicker
                style={{
                  height: 32,
                }}
              />

              <Select
                placeholder="Ruta"
                loading={isLoading}
                style={{ width: 180 }}
              >
                {Array.isArray(salidasDiarias) &&
                  salidasDiarias.map(({ id, ruta }: TRutaRender) => (
                    <Select.Option key={id} value={id}>
                      {ruta.ciudadOrigen} - {ruta.ciudadDestino}
                    </Select.Option>
                  ))}
              </Select>
            </div>
          </div>
        </div>
        <div className=" flex justify-between"></div>
      </div>
      <div>
        <div className="flex items-center justify-between ">
          <Title level={5}>Estadísticas Generales</Title>
          <Title level={5}>Gauge de Utilidad Percibida</Title>
        </div>
        <div className="flex gap-3.5">
          <Suspense fallback={<GeneralStatisticsSkeleton />}>
            <StatsSegments />
          </Suspense>
          <div className="flex rounded-md border-1  hover:shadow-md ">
            <Suspense fallback={<GaugeSkeleton />}>
              <KpiChart />
            </Suspense>
            <Suspense fallback={<GaugeSkeleton />}>
              <KpiUtilidad />
            </Suspense>
          </div>
        </div>
        <div className="mt-5 rounded-md border-1  p-3   hover:shadow-md">
          <Title level={5}>Indices de Administración</Title>
          <Suspense fallback={<AdministracionStepsSkeleton />}>
            <AdministracionSteps />
          </Suspense>
        </div>
      </div>
      <div className="my-7 flex justify-between">
        <Title level={5} className="text-slate-800">
          Tabla de Usuarios
        </Title>
        <UsuarioForm activator="Agregar Usuario" />
      </div>

      <UsuariosTable />
    </AppLayout>
  );
}
