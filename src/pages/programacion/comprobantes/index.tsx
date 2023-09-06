import AppLayout from "@/components/layout";
import { Title } from "@mantine/core";
import { Card, FloatButton, QRCode, Statistic } from "antd";
import CountUp from "react-countup";
import { SnippetsOutlined, CopyOutlined } from "@ant-design/icons";
import ComprobantesTable from "@/components/ui/programacion/comprobantes/boletos-table";
import { Steps } from "antd";
import FacturasTable from "@/components/ui/programacion/comprobantes/facturas-table";
function ProgramacionComprobantes() {
  const formatter = (value: number) => <CountUp end={value} separator="," />;
  return (
    <AppLayout>
      <ComprobantesTable />
      <FacturasTable />
      <div className="flex gap-3.5">
        <Card
          className=" min-h-[150px]   backdrop-blur-3xl   hover:bg-blue-100/20 hover:shadow-md"
          type="inner"
          bordered
          title={<Title order={4}>Boletos Registrados</Title>}
        >
          <div className="flex items-center gap-3.5">
            <Statistic
              title="Cantidad de boletos enviados a la base de datos de la SUNAT"
              value={485005}
              className="w-36"
              formatter={formatter}
              prefix={<CopyOutlined />}
            />
            <QRCode value="https://ww1.sunat.gob.pe/ol-at-ittramitedoc/registro/iniciar" />
          </div>
        </Card>
        <Card
          className="min-h-[150px]    backdrop-blur-3xl   hover:bg-blue-100/20 hover:shadow-md"
          type="inner"
          bordered
          title={<Title order={4}>Facturas Generadas</Title>}
        >
          <div className="flex items-center gap-3.5">
            <Statistic
              title="
            Facturas registradas hacia la base de datos de la SUNAT"
              value={112893}
              className="w-36"
              precision={2}
              formatter={formatter}
              prefix={<SnippetsOutlined />}
            />
            <QRCode value="https://ww1.sunat.gob.pe/ol-at-ittramitedoc/registro/iniciar" />
          </div>
        </Card>
        <Steps
          size="small"
          className="ml-10 mt-5"
          direction="vertical"
          current={1}
          items={[
            {
              title: "Actualizado",
              description: "2023-08-20 12:45:00",
            },
            {
              title: "Cargado",
              description: "2023-12-20 22:14:00",
            },
            {
              title: "En la SUNAT",
              description: "2023-15-20 07:36:00",
            },
          ]}
        />
      </div>

      <FloatButton.BackTop visibilityHeight={0} />
    </AppLayout>
  );
}

export default ProgramacionComprobantes;
