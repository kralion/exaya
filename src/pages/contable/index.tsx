import {
  DatePicker,
  Space,
  Input,
  Table,
  Select,
  Typography,
  FloatButton,
} from "antd";
import dayjs from "dayjs";
import "animate.css";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import type { ColumnsType } from "antd/es/table";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { RoundedButton } from "@/components/ui/rounded-button";
import { ContableCard } from "@/components/ui/contable/contable-card";
import { Title } from "@mantine/core";
import { EstadisticasNumericas } from "@/components/ui/contable/steps-statistics";
import AppLayout from "../../components/layout";

const onChange = (
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
    onFilter: (value, record) => record.destino.indexOf(value) === 0,
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
  { title: "Monto", dataIndex: "monto" },
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

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().endOf("day");
};
export default function Contable() {
  const handleRuta = (value: { value: string; label: React.ReactNode }) => {
    alert(`selected ${value.value}`);
  };
  const placeHolderDate = new Date(Date.now()).toISOString().slice(0, 10);

  return (
    <AppLayout>
      <div className="space-y-7">
        <div className="flex flex-col gap-3.5">
          <div className="flex justify-between">
            <Title order={5} className="text-slate-800">
              Horarios
            </Title>
            <Title order={5} className=" pr-48 text-slate-800">
              Busqueda Específica
            </Title>
          </div>
          <div className=" flex justify-between">
            <div className="flex items-center gap-2">
              <RoundedButton horaSalida="20:15" />
              <RoundedButton horaSalida="20:30" />
              <RoundedButton horaSalida="21:00" />
            </div>
            <div className="flex gap-3.5">
              <DatePicker
                onChange={onChange}
                onOk={onOk}
                placeholder={placeHolderDate}
              />

              <Select
                placeholder="Ruta"
                style={{ width: 180 }}
                onChange={handleRuta}
                options={[
                  {
                    value: "RUTA-HA",
                    label: "Huancayo - Ayacucho",
                  },
                  {
                    value: "RUTA-AH",
                    label: "Ayacucho - Huancayo",
                  },
                ]}
              />
            </div>
          </div>
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
            <Title order={4} className="pt-7 tracking-tight text-slate-800">
              Historial de Registros
            </Title>
            <Input
              placeholder="Buscar por DNI"
              className="w-64 "
              onPressEnter={() => {
                alert("Enter");
              }}
              suffix={<SearchOutlined className="cursor-pointer" />}
            />
          </div>
          <Table
            pagination={{
              position: ["bottomCenter"],
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10"],
            }}
            className="shadow-md"
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
    </AppLayout>
  );
}
