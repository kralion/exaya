import AppHead from "@/components/head";
import AppLayout from "@/components/layout";
import AdministracionStepsSkeleton from "@/components/skeletons/administracion-steps-skeleton";
import GaugeSkeleton from "@/components/skeletons/gauge-skeleton";
import GeneralStatisticsSkeleton from "@/components/skeletons/general-statistics-skeleton";
import ScheduleSkeleton from "@/components/skeletons/horarios-button";
import KpiChart from "@/components/ui/administracion/kpi-chart";
import { StatsSegments } from "@/components/ui/administracion/stats";
import AdministracionSteps from "@/components/ui/administracion/steps";
import { UsuarioForm } from "@/components/ui/administracion/usuario-form";
import UsuariosTable from "@/components/ui/administracion/usuarios-table";
import { RoundedButton } from "@/components/ui/rounded-button";

import { mockData } from "@/data";
import { api } from "@/utils/api";
import { Title } from "@mantine/core";
import { Alert, DatePicker, Select } from "antd";
import type { DatePickerProps } from "antd/es/date-picker";
import { Suspense } from "react";
export default function Administracion() {
  const { data: salidas, isError } = api.viajes.getAllViajes.useQuery();
  const handleRuta = (value: { value: string; label: React.ReactNode }) => {
    alert(`selected ${value.value}`);
  };
  const onChange = (
    value: DatePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Fecha seleccionada: ", dateString);
  };

  const onOk = (value: DatePickerProps["value"]) => {
    console.log("onOk: ", value);
  };
  const placeHolderDate = new Date(Date.now()).toISOString().slice(0, 10);
  return (
    <AppLayout>
      <AppHead title="Administracion" />
      <div className="mb-7">
        <div className=" mb-3.5 flex justify-between">
          <Title order={5} className="text-slate-800">
            Analíticas por Horarios
          </Title>
          <Title order={5} className=" pr-48 text-slate-800">
            Busqueda Específica
          </Title>
        </div>
        <div className=" flex justify-between">
          <div className="flex items-center gap-2">
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
            {salidas?.map((salida) => (
              <Suspense key={salida.id} fallback={<ScheduleSkeleton />}>
                <RoundedButton horaSalida={salida.horaSalida} />
              </Suspense>
            ))}
          </div>
          <div className="flex gap-3.5">
            <DatePicker
              onChange={onChange}
              onOk={onOk}
              placeholder={placeHolderDate}
            />

            <Select placeholder="Ruta" style={{ width: 180 }}>
              {salidas?.map((salida) => (
                <Select.Option
                  key={salida.id}
                  value={salida.ruta.ciudadOrigen + salida.ruta.ciudadDestino}
                >
                  {salida.ruta.ciudadOrigen} - {salida.ruta.ciudadDestino}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between ">
          <Title order={5} className="mb-3.5 text-slate-800">
            Estadísticas Generales
          </Title>
          <Title order={5} className="mb-3.5 text-slate-800">
            Gauge de Utilidad Percibida
          </Title>
          <Title order={5} className="mb-3.5 text-slate-800">
            Indices de Administración
          </Title>
        </div>
        <div className="flex gap-3.5">
          <Suspense fallback={<GeneralStatisticsSkeleton />}>
            <StatsSegments {...mockData} />
          </Suspense>
          <div className="rounded-md border-1">
            <Suspense fallback={<GaugeSkeleton />}>
              <KpiChart />
            </Suspense>
          </div>
          <div className="rounded-md border-1 px-3">
            <Suspense fallback={<AdministracionStepsSkeleton />}>
              <AdministracionSteps />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="my-7 flex justify-between">
        <Title order={5} className="text-slate-800">
          Tabla de Usuarios
        </Title>
        <UsuarioForm activator="Agregar Usuario" />
      </div>

      <UsuariosTable />
    </AppLayout>
  );
}
