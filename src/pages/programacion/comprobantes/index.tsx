import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import BoletosEncomiendasTable from "@/components/ui/programacion/comprobantes/boletos-encomiendas-table.";
import BoletosTable from "@/components/ui/programacion/comprobantes/boletos-table";
import FacturasTable from "@/components/ui/programacion/comprobantes/facturas-table";
import { api } from "@/utils/api";
import {
  Card,
  FloatButton,
  QRCode,
  Space,
  Statistic,
  Steps,
  Typography,
  type StatisticProps,
} from "antd";
import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaRegFile, FaRegFileLines } from "react-icons/fa6";

const { Title } = Typography;
function ProgramacionComprobantes() {
  const [current, setCurrent] = useState(0);
  const { data: pasajes } = api.boletos.getAllBoletos.useQuery();
  const { data: encomiendas } =
    api.encomiendas.getAllBoletosEncomiendas.useQuery();
  const totalBoletos = (pasajes?.length ?? 0) + (encomiendas?.length ?? 0);
  const { data: facturas } =
    api.encomiendas.getAllFacturasEncomiendas.useQuery();

  const handleSunatTaxesSender = useCallback(() => {
    setTimeout(() => {
      if (current < 3) {
        setCurrent(current + 1);
      }
    }, 3000);
  }, [current]);

  useEffect(() => {
    handleSunatTaxesSender();
  }, [handleSunatTaxesSender]);
  const formatter: StatisticProps["formatter"] = (value) => (
    <CountUp delay={2000} duration={10} end={value as number} separator="," />
  );

  return (
    <AppLayout>
      <AppHead title="Programacion Comprobantes" />
      <BoletosTable />
      <BoletosEncomiendasTable />
      <FacturasTable />
      <div className="flex gap-3.5">
        <Card
          className=" rounded-xl shadow-lg duration-200 dark:hover:bg-black/50"
          type="inner"
          title={<Title level={4}>Boletos Registrados</Title>}
        >
          <Space className="items-start">
            <Statistic
              title="Cantidad de boletos enviados a la base de datos de la SUNAT"
              value={totalBoletos}
              className="w-36"
              formatter={formatter}
              prefix={<FaRegFile size={20} />}
            />
            <QRCode
              style={{
                width: 100,
                height: 100,
              }}
              value="https://ww1.sunat.gob.pe/ol-at-ittramitedoc/registro/iniciar"
            />
          </Space>
        </Card>
        <Card
          type="inner"
          className="rounded-xl shadow-lg duration-200 dark:hover:bg-black/50"
          title={<Title level={4}>Facturas Generadas</Title>}
        >
          <Space className="items-start">
            <Statistic
              title="
            Facturas registradas hacia la base de datos de la SUNAT"
              value={facturas?.length}
              className="w-36"
              precision={2}
              formatter={formatter}
              prefix={<FaRegFileLines size={20} />}
            />
            <QRCode
              style={{
                width: 100,
                height: 100,
              }}
              value="https://ww1.sunat.gob.pe/ol-at-ittramitedoc/registro/iniciar"
            />
          </Space>
        </Card>
        <Steps
          size="small"
          onChange={handleSunatTaxesSender}
          className="ml-10 mt-5"
          direction="vertical"
          current={current}
          items={[
            {
              title: "Actualizado",
              description: new Date().toLocaleString(),
            },
            {
              title: "Cargado",
              description: new Date().toLocaleString(),
            },
            {
              title: "En la SUNAT",
              description: new Date().toLocaleString(),
            },
          ]}
        />
      </div>

      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}

export default ProgramacionComprobantes;
