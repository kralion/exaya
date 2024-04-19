import AppHead from "@/components/landing/head";
import ScheduleSkeleton from "@/components/skeletons/horarios-button";
import { ContableCard } from "@/components/ui/contable/contable-card";
import { EstadisticasNumericas } from "@/components/ui/contable/steps-statistics";
import { RoundedButton } from "@/components/exaya/rounded-button";
import { api } from "@/utils/api";
import {
  Alert,
  DatePicker,
  FloatButton,
  Input,
  Select,
  Table,
  Tag,
  Typography,
} from "antd";
import type { DatePickerProps } from "antd/es/date-picker";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { Suspense } from "react";
import { CiSearch } from "react-icons/ci";
import AppLayout from "@/components/exaya/layout";
dayjs.extend(customParseFormat);
const { Title } = Typography;

const onDatePickerChange = (
  value: DatePickerProps["value"],
  dateString: [string, string] | string
) => {
  console.log("Fecha seleccionada: ", dateString);
};

const onOk = (value: DatePickerProps["value"]) => {
  console.log("onOk: ", value);
};

interface DataType {
  key: React.Key;
  destino: string;
  serie: string;
  numero: number;
  asiento: string;
  viaje: string;
  monto: string;
  clientedni: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Destino",
    dataIndex: "destino",
    filters: [
      {
        text: "Huancayo",
        value: "Huancayo",
      },
      {
        text: "Ayacucho",
        value: "Ayacucho",
      },
    ],
    onFilter: (value, record) => record.destino.indexOf(value as string) === 0,
  },
  {
    title: "Serie",
    dataIndex: "serie",
  },
  {
    title: "Numero",
    dataIndex: "numero",
  },
  { title: "Asiento", dataIndex: "asiento" },
  {
    title: "Viaje",
    dataIndex: "viaje",
  },
  {
    title: "Monto",
    dataIndex: "monto",
    render: (text) => (
      <Tag
        className="rounded-full font-semibold shadow-md"
        color="green-inverse"
      >
        {text}
      </Tag>
    ),
  },
  {
    title: "Cliente DNI",
    dataIndex: "clientedni",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    destino: `Huancayo ${i}`,
    serie: "B003",
    numero: 3370 + i,
    asiento: `${i + 7}`,
    viaje: `1531${i}`,
    monto: "s/. 30.00",
    clientedni: 75994622 + i,
  });
}
type TRutaSelect = {
  id: string;
  ruta: {
    ciudadOrigen: string;
    ciudadDestino: string;
  };
};

export default function Contable() {
  const {
    data: salidasDiarias,
    isError,
    isLoading,
  } = api.viajes.getAllViajes.useQuery();
  const placeHolderDate = new Date(Date.now()).toISOString().slice(0, 10);

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
                {Array.isArray(salidasDiarias) &&
                  salidasDiarias.length === 0 && (
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
                {isError && (
                  <Alert
                    message={
                      <p>
                        Error al obtener los datos de los
                        <code className="ml-2 underline">Horarios</code> por
                        favor
                        <a href="." className="ml-2 underline">
                          recarge la página
                        </a>
                      </p>
                    }
                    type="error"
                    showIcon
                  />
                )}

                {Array.isArray(salidasDiarias) &&
                  salidasDiarias.length > 0 &&
                  salidasDiarias.map(
                    ({ id, salida }: { id: string; salida: string }) => (
                      <Suspense key={id} fallback={<ScheduleSkeleton />}>
                        <RoundedButton
                          horaSalida={dayjs(salida).format("HH:mm")}
                        />
                      </Suspense>
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
                  onChange={onDatePickerChange as DatePickerProps["onChange"]}
                  onOk={onOk}
                  placeholder={placeHolderDate}
                />

                <Select
                  placeholder="Ruta"
                  loading={isLoading}
                  style={{ width: 180 }}
                >
                  {Array.isArray(salidasDiarias) &&
                    salidasDiarias.map(({ id, ruta }: TRutaSelect) => (
                      <Select.Option
                        key={id}
                        value={ruta.ciudadOrigen + ruta.ciudadDestino}
                      >
                        {ruta.ciudadOrigen} - {ruta.ciudadDestino}
                      </Select.Option>
                    ))}
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
              cardTitle="Comision"
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
          <Table
            pagination={{
              position: ["bottomCenter"],
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10"],
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
    </AppLayout>
  );
}
