import { Button, Tag, Typography } from "antd";
import type { Encomienda } from "@/interfaces/interfaces";
import { useEncomiendasContext as Context } from "@/context/EncomiendasContext";
import EncomiendaDetails from "./detalles-encomienda";
import ShippingBoxAssets from "@/assets/shipping-box.png";
import Image from "next/image";

export const columns = [
  {
    title: "Receptor",
    dataIndex: "nombreReceptor",
    key: "nombreReceptor",
  },
  {
    title: "Remitente",
    dataIndex: "nombreRemitente",
    key: "nombreRemitente",
  },
  {
    title: "Precio",
    dataIndex: "precio",
    key: "precio",
    render: (precio: number) => (
      <Tag color="green">
        {precio.toLocaleString("es-PE", { style: "currency", currency: "PEN" })}
      </Tag>
    ),
  },
  {
    title: "Destino",
    dataIndex: "destino",
    key: "destino",
  },
  {
    title: "Fecha de Envío",
    dataIndex: "fechaEnvio",
    key: "fechaEnvio",
  },
  {
    title: "Acciones",
    key: "action",
    render: (encomienda: Encomienda) => {
      const { handleDeleteEncomienda } = Context();
      return (
        <div className="flex items-baseline gap-5">
          <EncomiendaDetails modalActivator="Ver Detalles">
            <div className="flex items-center justify-between pb-5">
              <div className="mt-7 space-y-3.5">
                <p>
                  <Typography.Text strong>Guía: </Typography.Text>
                  <Tag color="red-inverse"> {encomienda.key}</Tag>
                </p>
                <p>
                  <Typography.Text strong>Receptor: </Typography.Text>
                  <Typography.Text>{encomienda.nombreReceptor}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Remitente: </Typography.Text>
                  <Typography.Text>
                    {encomienda.nombreRemitente}
                  </Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Precio: </Typography.Text>
                  <Tag color="green">
                    {encomienda.precio.toLocaleString("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    })}
                  </Tag>
                </p>
                <p>
                  <Typography.Text strong>Destino: </Typography.Text>
                  <Typography.Text>{encomienda.destino}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Fecha de Envío: </Typography.Text>
                  <Typography.Text>{encomienda.fechaEnvio}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Descripción: </Typography.Text>
                  <Typography.Text>{encomienda.descripcion}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Contenido: </Typography.Text>
                  <Typography.Text>{encomienda.contenido}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Clave de Rastreo: </Typography.Text>
                  <Typography.Text code>
                    {encomienda.claveRastreo?.toUpperCase() ?? "Sin clave"}
                  </Typography.Text>
                </p>
              </div>
              <Image
                src={ShippingBoxAssets}
                className="drop-shadow-xl"
                alt="Shipping Box"
                width={300}
                height={300}
              />
            </div>
          </EncomiendaDetails>

          <Button
            onClick={() => handleDeleteEncomienda(encomienda.key)}
            danger
            type="link"
          >
            Eliminar
          </Button>
        </div>
      );
    },
  },
];
