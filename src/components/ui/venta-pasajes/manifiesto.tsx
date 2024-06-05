import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import {
  Avatar,
  Button,
  Drawer,
  List,
  Progress,
  Space,
  Typography,
} from "antd";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect, useState } from "react";
import { RxDownload } from "react-icons/rx";
import { EncomiendasManifiestoTable } from "./encomiendas-table";
import { PasajerosManifiestoTable } from "./pasajeros-table";
const { Title } = Typography;
type TConductor = {
  id: string;
  conductorDni: string;
  nombres: string;
  apellidos: string;
  foto: string;
  numeroLicencia: string;
};
type TEncomienda = {
  id: string;
  remitenteDni: string;
  destinatarioDni: string;
  descripcion: string;
  fechaEnvio: Date;
};
type TPasajero = {
  id: string;
  pasajeroDni: string;
  pasajeroNombres: string;
  pasajeroApellidos: string;
  asiento: number;
  precio: number;
};
export function Manifiesto({ viajeId }: { viajeId: string }) {
  const [open, setOpen] = useState(false);
  const { openMessage } = useMessageContext();
  const { data: conductores, isLoading } =
    api.viajes.getConductoresByViajeId.useQuery({
      id: viajeId,
    });
  const { data: viajeCurrent } = api.viajes.getViajeById.useQuery({
    id: viajeId,
  });

  const [print, setPrint] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  let percent = 0;
  if (
    viajeCurrent?.response?.boletos &&
    viajeCurrent?.response?.bus?.asientos
  ) {
    const pagadoBoletosCount = viajeCurrent.response.boletos.filter(
      (b: { estado: string }) => b.estado === "PAGADO"
    ).length;
    const totalAsientosCount = viajeCurrent.response.bus.asientos;
    percent = (pagadoBoletosCount / totalAsientosCount) * 100;
  }
  const viajeStatus = viajeCurrent?.response?.estado;
  function handlePrint() {
    setPrint(true);
    openMessage({
      content: "Documento generado con éxito",
      type: "success",
    });
  }
  return (
    <>
      <Typography
        title="Ver Manifiesto"
        onClick={showDrawer}
        className="flex items-center justify-center"
      >
        Ver Manifiesto
      </Typography>

      <Drawer
        closeIcon={false}
        title={
          <div className="flex items-center justify-between ">
            <Space direction="vertical" className="gap-1">
              <Title level={5}>
                {viajeCurrent?.response?.ruta?.ciudadOrigen} -{" "}
                {viajeCurrent?.response?.ruta?.ciudadDestino}
              </Title>
              <Space>
                <Title className="font-mono" level={5}>
                  {viajeCurrent?.response?.salida.toLocaleDateString()} -{" "}
                  {viajeCurrent?.response?.salida.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Title>
              </Space>
            </Space>

            <Button
              type="primary"
              title="Descargar PDF"
              icon={<RxDownload />}
              onClick={handlePrint}
            >
              Descargar
            </Button>
            {print && <TablesToPrint viajeId={viajeId} />}
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <Space direction="vertical" className="gap-8">
          <Progress
            status={
              viajeStatus === "DISPONIBLE"
                ? "active"
                : viajeStatus === "CANCELADO"
                ? "exception"
                : "success"
            }
            percent={parseFloat(percent.toFixed(2))}
            size={[680, 10]}
          />
          <List
            dataSource={conductores?.response}
            bordered
            header={<Title level={5}>Conductores</Title>}
            loading={isLoading}
            renderItem={(conductor: TConductor) => (
              <List.Item
                key={conductor.id}
                actions={[
                  <a
                    href="https://www.sutran.gob.pe/informacion-del-conductor-y-bus-de-tu-viaje/"
                    target="_blank"
                    rel="noreferrer"
                    key={`a-${conductor.id}`}
                  >
                    Ver Informacion
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      className="h-12 w-12 border-slate-400"
                      src={conductor.foto}
                    />
                  }
                  title={`${conductor.nombres} ${conductor.apellidos}`}
                  description={`N° Licencia : ${conductor.numeroLicencia}`}
                />
              </List.Item>
            )}
          />
          <Space direction="vertical" className="w-full gap-2">
            <Title className="mt-7" level={5}>
              Pasajeros
            </Title>
            <PasajerosManifiestoTable viajeId={viajeId} />
          </Space>
          <Space direction="vertical" className="w-full gap-2">
            <Title className="mt-7" level={5}>
              Encomiendas
            </Title>
            <EncomiendasManifiestoTable viajeId={viajeId} />
          </Space>
        </Space>
      </Drawer>
    </>
  );
}

const TablesToPrint = ({ viajeId }: { viajeId: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  (jsPDF as any).autoTableSetDefaults({
    headStyles: { fillColor: [250, 173, 20] },
  });
  const { data: viaje } = api.viajes.getViajeById.useQuery({ id: viajeId });
  const viajeInfo = `Origen: ${
    viaje?.response?.ruta?.ciudadOrigen ?? ""
  }\nDestino: ${viaje?.response?.ruta?.ciudadDestino ?? ""}
  \nFecha: ${
    viaje?.response?.salida
      ? new Date(viaje?.response?.salida).toLocaleDateString()
      : ""
  }\nHora: ${
    viaje?.response?.salida
      ? new Date(viaje?.response?.salida).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : ""
  }`;

  useEffect(() => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("MANIFIESTO DEL VIAJE", 14, 20);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(viajeInfo, 14, 30);
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("CONDUCTORES", 14, 60);
    autoTable(doc, {
      startY: 65,
      columns: [
        { dataKey: "conductorDni", header: "DNI" },
        { dataKey: "nombres", header: "Nombres" },
        { dataKey: "apellidos", header: "Apellidos" },
        { dataKey: "numeroLicencia", header: "Numero de Licencia" },
      ],
      body: viaje?.response?.conductores.map((conductor: TConductor) => ({
        conductorDni: conductor.conductorDni,
        nombres: conductor.nombres,
        apellidos: conductor.apellidos,
        numeroLicencia: conductor.numeroLicencia,
      })),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const finalY1 = (doc as any).lastAutoTable.finalY as number;
    doc.setFontSize(14);
    doc.text("PASAJEROS", 14, finalY1 + 15);

    autoTable(doc, {
      startY: finalY1 + 20,
      columns: [
        { dataKey: "pasajeroDni", header: "DNI" },
        { dataKey: "pasajeroNombres", header: "Nombres" },
        { dataKey: "pasajeroApellidos", header: "Apellidos" },
        { dataKey: "asiento", header: "Asiento" },
      ],
      body: viaje?.response?.boletos
        .filter((b: { estado: string }) => b.estado === "PAGADO")
        .map((pasajero: TPasajero) => ({
          pasajeroDni: pasajero.pasajeroDni,
          pasajeroNombres: pasajero.pasajeroNombres,
          pasajeroApellidos: pasajero.pasajeroApellidos,
          asiento: pasajero.asiento,
        })),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const finalY2 = (doc as any).lastAutoTable.finalY as number;
    doc.setFontSize(14);
    doc.text("ENCOMIENDAS", 14, finalY2 + 15);
    autoTable(doc, {
      startY: finalY2 + 20,
      columns: [
        { dataKey: "remitenteDni", header: "DNI Remitente" },
        { dataKey: "destinatarioDni", header: "DNI Destinatario" },
        { dataKey: "descripcion", header: "Descripcion" },
        { dataKey: "fechaEnvio", header: "Fecha Envio" },
      ],
      body: viaje?.response?.encomiendas.map((encomienda: TEncomienda) => ({
        remitenteDni: encomienda.remitenteDni,
        destinatarioDni: encomienda.destinatarioDni,
        descripcion: encomienda.descripcion,
        fechaEnvio: new Date(encomienda.fechaEnvio).toLocaleDateString(),
      })),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const finalY3 = (doc as any).lastAutoTable.finalY as number;
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(
      `Asientos ocupados: ${
        viaje?.response?.boletos.filter(
          (b: { estado: string }) => b.estado === "PAGADO"
        ).length ?? 0
      }`,
      14,
      finalY3 + 20
    );
    doc.text(
      `Encomiendas Registradas: ${viaje?.response?.encomiendas.length ?? 0}`,
      14,
      finalY3 + 25
    );

    doc.save("manifiesto.pdf");
  }, [viaje?.response, viajeInfo]);

  return null;
};

export default TablesToPrint;
