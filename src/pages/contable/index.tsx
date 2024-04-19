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
  Input,
  Select,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdTimelapse } from "react-icons/md";

const { Title } = Typography;

export default function Contable() {
  const {
    data: salidasDiarias,
    isError,
    isLoading,
  } = api.viajes.getAllViajes.useQuery();
  const placeHolderDate = new Date(Date.now()).toISOString().slice(0, 10);
  const [scheduleTimeQuery, setScheduleTimeQuery] = useState<string>(
    dayjs().format("HH:mm")
  );
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
                {salidasDiarias?.response.length === 0 && (
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

                {salidasDiarias?.response.map(
                  ({ id, salida }: { id: string; salida: Date }) => (
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
                  )
                )}
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
                  placeholder={placeHolderDate}
                />

                <Select
                  placeholder="Ruta"
                  loading={isLoading}
                  style={{ width: 180 }}
                >
                  {salidasDiarias?.response.map(
                    (salida: {
                      ruta: {
                        ciudadDestino: string;
                        ciudadOrigen: string;
                        id: string;
                      };
                    }) => (
                      <Select.Option
                        key={salida.ruta.id}
                        value={
                          salida.ruta.ciudadOrigen + salida.ruta.ciudadDestino
                        }
                      >
                        {salida.ruta.ciudadOrigen} - {salida.ruta.ciudadDestino}
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
              cardTitle="Recaudado"
              cardValue={5400}
              cardIcon="https://img.icons8.com/?size=1x&id=104073&format=png"
              cardConcept="Viajes & Encomiendas"
            />
            <ContableCard
              cardTitle="Ingresos"
              cardValue={4800}
              cardIcon="https://img.icons8.com/?size=1x&id=53863&format=png"
              cardConcept="75% del recaudado"
            />
            <ContableCard
              cardTitle="Comisión"
              cardValue={590}
              cardIcon="https://img.icons8.com/?size=1x&id=Yljd2UCqSpbe&format=png"
              cardConcept="15% del recaudado"
            />
            <ContableCard
              cardTitle="Encomiendas"
              cardValue={315}
              cardIcon="https://img.icons8.com/?size=1x&id=13133&format=png"
              cardConcept="Ingresos"
            />
          </div>
          <EstadisticasNumericas />
        </div>
        <div className="space-y-3.5">
          <div className="flex items-baseline justify-between">
            <Title level={5} className="pt-7 tracking-tight text-slate-800">
              Historial de Registros
            </Title>
            <Input
              placeholder="Buscar por DNI"
              type="number"
              className="w-48  "
              onPressEnter={() => {
                alert("Enter");
              }}
              suffix={<CiSearch className="cursor-pointer" />}
            />
          </div>
          <TableContable scheduleTimeQuery={scheduleTimeQuery} />
        </div>
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
    </AppLayout>
  );
}
