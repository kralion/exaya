import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { Avatar, Drawer, List, Progress, Tag, Typography } from "antd";
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
  const { openNotification } = useNotification();
  const [open, setOpen] = useState(false);
  const { data: conductores, isLoading } =
    api.viajes.getConductoresByViajeId.useQuery({
      id: viajeId,
    });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
            <Title className="text-left" level={4}>
              Manifiesto del Viaje
            </Title>
            <button
              onClick={() =>
                openNotification({
                  placement: "top",
                  description:
                    "Se va a imprimir automaticamente, solo redirijase a la impresora",
                  message: "Operación Exitosa",
                  type: "success",
                })
              }
            >
              <Tag
                color="green"
                icon={<AiFillPrinter />}
                className="flex cursor-pointer items-center justify-center gap-2 hover:opacity-80"
                title="Se va a imprimir automaticamente"
                onClick={onClose}
              >
                Imprimir
              </Tag>
            </button>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <div className="flex flex-col gap-2">
          <Progress status="active" percent={50} size={[680, 10]}>
            <Title level={5}>{"Viaje de Lima a Arequipa - 10/10/2021"}</Title>
          </Progress>

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
