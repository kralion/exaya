import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import AdministracionStepsSkeleton from "@/components/skeletons/administracion-steps-skeleton";
import GaugeSkeleton from "@/components/skeletons/gauge-skeleton";
import GeneralStatisticsSkeleton from "@/components/skeletons/general-statistics-skeleton";
import ScheduleSkeleton from "@/components/skeletons/horarios-button";
import KpiUtilidad from "@/components/ui/administracion/kpi-utilidad";
import { StatsSegments } from "@/components/ui/administracion/stats";
import AdministracionSteps from "@/components/ui/administracion/steps";
import { UsuarioForm } from "@/components/ui/administracion/usuario-form";
import UsuariosTable from "@/components/ui/administracion/usuarios-table";
import { api } from "@/utils/api";
import {
  Alert,
  Button,
  Card,
  DatePicker,
  FloatButton,
  Select,
  Space,
  Typography,
} from "antd";
import { Suspense, useState } from "react";

const { Title } = Typography;

export default function Administracion() {
  const [dateQuery, setDateQuery] = useState(new Date());
  const {
    data: salidasDiarias,
    isError,
    isLoading,
  } = api.viajes.getViajesByDate.useQuery({
    date: dateQuery.toISOString(),
  });

  return (
    <AppLayout>
      <AppHead title="Administracion" />

      <Space direction="vertical" className="gap-4">
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
              {salidasDiarias?.response?.map(
                ({ id, salida }: { id: string; salida: Date }) => (
                  <Button
                    className="mr-2 px-0"
                    size="small"
                    type="primary"
                    key={id}
                    // onClick={() =>
                    //   setScheduleTimeQuery(salida.toLocaleTimeString())
                    // }
                    shape="round"
                  >
                    {salida.toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Button>
                )
              )}
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
        <Space className="items-start gap-4">
          {/* TODO: Use isLoading for rendering this skeletons */}
          <div className="flex flex-col gap-4">
            <Suspense fallback={<GeneralStatisticsSkeleton />}>
              <StatsSegments />
            </Suspense>
            <Suspense fallback={<AdministracionStepsSkeleton />}>
              <AdministracionSteps />
            </Suspense>
          </div>
          <Suspense fallback={<GaugeSkeleton />}>
            <KpiUtilidad />
          </Suspense>
        </Space>
        <Space className="mt-10 flex justify-between">
          <Title level={4}>Tabla de Usuarios</Title>
          <UsuarioForm activator="Agregar Usuario" />
        </Space>
        <UsuariosTable />
      </Space>
      <FloatButton.BackTop visibilityHeight={0} />
    </AppLayout>
  );
}
