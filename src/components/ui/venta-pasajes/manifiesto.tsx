import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import { Avatar, Drawer, List, Progress, Space, Tag, Typography } from "antd";
import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { EncomiendasManifiestoTable } from "./encomiendas-table";
import { PasajerosManifiestoTable } from "./pasajeros-table";
const { Title } = Typography;
type TConductor = {
  id: string;
  nombres: string;
  apellidos: string;
  foto: string;
  numeroLicencia: string;
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
    openMessage({
      key: "updatable",
      content: "Cargando el manifiesto...",
      type: "loading",
    });
    setTimeout(() => {
      openMessage({
        content: "Impresión realizada con éxito",
        type: "success",
      });
    }, 3000);
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
            <Space>
              <Title level={5}>
                {viajeCurrent?.response?.ruta?.ciudadOrigen} -{" "}
                {viajeCurrent?.response?.ruta?.ciudadDestino}
              </Title>
              <Title level={5}>
                {viajeCurrent?.response?.salida.toLocaleDateString()} -{" "}
                {viajeCurrent?.response?.salida.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Title>
            </Space>

            <Tag
              color="green"
              icon={<AiFillPrinter />}
              className="flex cursor-pointer items-center justify-center gap-2 hover:opacity-80"
              onClick={handlePrint}
            >
              Imprimir
            </Tag>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <div className="flex flex-col gap-2">
          <Progress
            status={
              viajeStatus === "DISPONIBLE"
                ? "active"
                : viajeStatus === "CANCELADO"
                ? "exception"
                : "success"
            }
            percent={percent}
            size={[680, 10]}
          />

          <Title level={4}>Conductores</Title>

          <List
            dataSource={conductores?.response || []}
            bordered
            // TODO: Try this
            // header={<Title level={5}>Conductores</Title>}
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
                  description={`Conductor con licencia ${conductor.numeroLicencia}`}
                />
              </List.Item>
            )}
          />
          <Title className="mt-7" level={4}>
            Pasajeros
          </Title>
          <PasajerosManifiestoTable viajeId={viajeId} />
          <Title className="mt-7" level={4}>
            Encomiendas
          </Title>
          <EncomiendasManifiestoTable viajeId={viajeId} />
        </div>
      </Drawer>
    </>
  );
}
