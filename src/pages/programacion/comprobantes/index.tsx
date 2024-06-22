"use client";
import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import BoletosEncomiendasTable from "@/components/ui/programacion/comprobantes/boletos-encomiendas-table.";
import BoletosTable from "@/components/ui/programacion/comprobantes/boletos-table";
import FacturasTable from "@/components/ui/programacion/comprobantes/facturas-table";
import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import {
  Button,
  Card,
  Flex,
  FloatButton,
  QRCode,
  Space,
  Statistic,
  Timeline,
  Typography,
  type StatisticProps,
} from "antd";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaRegFile, FaRegFileLines } from "react-icons/fa6";
import { LuMoveLeft } from "react-icons/lu";
import { TbInfoTriangleFilled } from "react-icons/tb";

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

const { Title } = Typography;
function ProgramacionComprobantes() {
  const { openMessage } = useMessageContext();
  const { data: pasajesCount } =
    api.boletos.getCountOfMonthlyBoletos.useQuery();
  const { data: encomiendasCount } =
    api.encomiendas.getCountOfMonthlyBoletosEncomiendas.useQuery();
  const { data: facturasCount } =
    api.encomiendas.getCountOfMonthlyFacturasEncomiendas.useQuery();
  const [date, setDate] = useState("");
  const [print, setPrint] = useState(false);
  const [isNotAdmin, setIsNotAdmin] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const totalBoletos = (pasajesCount || 0) + (encomiendasCount || 0);
  const formatter: StatisticProps["formatter"] = (value) => (
    <CountUp delay={2000} duration={10} end={value as number} separator="," />
  );
  function isLastDayOfMonth() {
    const date = new Date();
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.getDate() === 1;
  }

  function handlePrint() {
    if (isLastDayOfMonth()) {
      setPrint(true);
    } else {
      openMessage({
        content: "Solo se puede generar el último día del mes",
        type: "error",
      });
    }
  }

  useEffect(() => {
    setDate(
      new Date()
        .toLocaleDateString("es-PE", {
          year: "numeric",
          month: "2-digit",
          day: "numeric",
        })
        .replace(/\//g, "-")
    );
  }, []);

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
      <AppHead title="Programacion Comprobantes" />
      <BoletosTable />
      <FacturasTable />
      <BoletosEncomiendasTable />
      <div className="item-center flex gap-3.5">
        <div className="flex w-1/2 gap-3.5">
          <Card
            className=" rounded-xl shadow-lg duration-200 dark:hover:bg-black/50"
            size="small"
            style={{
              width: 350,
              height: 150,
            }}
            type="inner"
            title={
              <Title level={4} className="pt-2">
                Boletos
              </Title>
            }
          >
            <Statistic
              title="Total de Boletos Mensuales (TBM)"
              value={totalBoletos}
              formatter={formatter}
              prefix={<FaRegFile className="pt-1" />}
            />
          </Card>
          <Card
            size="small"
            style={{
              width: 350,
              height: 150,
            }}
            type="inner"
            className="rounded-xl shadow-lg duration-200 dark:hover:bg-black/50"
            title={
              <Title level={4} className="pt-2">
                Facturas
              </Title>
            }
          >
            <Statistic
              title="Total de Facturas Mensuales (TFM)"
              value={facturasCount ?? 0}
              formatter={formatter}
              prefix={<FaRegFileLines className="pt-1" />}
            />
          </Card>
        </div>

        <Timeline
          className=" -ml-36 w-full items-start"
          pendingDot
          mode="left"
          items={[
            {
              label: ` ${date}`,
              children: "Total de TBM y TFM registrados",
              color: "green",
            },

            {
              label: ` ${new Date().toLocaleDateString("es-PE", {
                month: "long",
              })}`,
              children: "Listo para contabilizar",
            },
            {
              label: "Mensual",
              children: "Listo para Impresión",
              color: "red",
            },
            {
              label: "Formato PDF",
              children: "Listo para descargar",
              color: "green",
            },
          ]}
        />
        <Flex vertical gap="small" align="center">
          <Button
            // disabled={!isLastDayOfMonth()}
            title="Solo se puede generar el último día del mes"
            onClick={handlePrint}
            type="primary"
            block
          >
            Descargar PDF
          </Button>
          {print && (
            <TablesToPrint
              boletosCount={totalBoletos}
              facturasCount={facturasCount ?? 0}
            />
          )}
          <QRCode size={100} value="https://www.google.com" />
        </Flex>
      </div>

      <FloatButton.BackTop className="bottom-4 right-4" />
    </AppLayout>
  );
}

export default ProgramacionComprobantes;

type TBoleto = {
  codigo: string;
  fechaRegistro: Date;
  precio: number;
};

type TEncomienda = {
  serie: string;
  numero : number;
  fechaRecepcion: Date;
  precio: number;
};

type TFactura = {
  serie : string;
  numero : number;
  fechaRecepcion: Date;
  precio: number;
  ruc: string | null;
};

export const TablesToPrint = ({
  boletosCount,
  facturasCount,
}: {
  boletosCount: number;
  facturasCount: number;
}) => {
  const { data: pasajes } = api.boletos.getMonthlyBoletos.useQuery();
  const { data: encomiendas } =
    api.encomiendas.getMonthlyBoletosEncomiendas.useQuery();
  const { data: facturas } =
    api.encomiendas.getMonthlyFacturasEncomiendas.useQuery();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  (jsPDF as any).autoTableSetDefaults({
    headStyles: { fillColor: [250, 173, 20] },
  });
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const reporteInfo = `Reporte Fecha Inicio : ${
    startOfMonth.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }) ?? ""
  }\nReporte Fecha Fin : ${
    endOfMonth.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }) ?? ""
  }`;

  useEffect(() => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("REPORTE CONTABLE MENSUAL", 14, 20);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(reporteInfo, 14, 30);
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("BOLETOS DE VIAJE", 14, 50);
    autoTable(doc, {
      startY: 55,
      columns: [
        { dataKey: "codigo", header: "Código" },
        { dataKey: "fechaRegistro", header: "Fecha Emisión" },
        { dataKey: "precio", header: "Precio" },
      ],

      body: pasajes?.map((b: TBoleto) => ({
        codigo: b.codigo,
        fechaRegistro: new Date(b.fechaRegistro).toLocaleDateString(),
        precio: b.precio.toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
        }),
      })),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const finalY1 = (doc as any).lastAutoTable.finalY as number;
    doc.setFontSize(14);
    doc.text("BOLETOS DE ENCOMIENDAS", 14, finalY1 + 15);

    autoTable(doc, {
      startY: finalY1 + 20,
      columns: [
        { dataKey: "codigo", header: "Código" },
        { dataKey: "fechaRecepcion", header: "Fecha de Emisión" },
        { dataKey: "precio", header: "Precio" },
      ],
      body: encomiendas?.map((e: TEncomienda) => ({
        codigo: `${e.serie}-${e.numero}`,
        fechaRecepcion: new Date(e.fechaRecepcion).toLocaleDateString(),
        precio: e.precio.toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
        }),
      })),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const finalY2 = (doc as any).lastAutoTable.finalY as number;
    doc.setFontSize(14);
    doc.text("FACTURAS", 14, finalY2 + 15);
    autoTable(doc, {
      startY: finalY2 + 20,
      columns: [
        { dataKey: "codigo", header: "Código" },
        { dataKey: "fechaEnvio", header: "Fecha Emisión" },
        { dataKey: "ruc", header: "RUC" },
        { dataKey: "precio", header: "Precio" },
      ],
      body: facturas?.map((f: TFactura) => ({
        codigo: `${e.serie}-${e.numero}`,
        fechaRecepcion: new Date(f.fechaRecepcion).toLocaleDateString(),
        ruc: f.ruc,
        precio: f.precio.toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
        }),
      })),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const finalY3 = (doc as any).lastAutoTable.finalY as number;
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(
      `# Boletos totales para el mes: ${boletosCount}`,
      14,
      finalY3 + 20
    );
    doc.text(
      `# Facturas totales para el mess: ${facturasCount}`,
      14,
      finalY3 + 25
    );

    doc.save("reporte-contable-mensual.pdf");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pasajes, encomiendas, facturas]);

  return null;
};
