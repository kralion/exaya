import { Button, Tag, Typography } from "antd";
import type { Encomienda } from "@/interfaces/interfaces";
import { useEncomiendasContext as Context } from "@/context/EncomiendasContext";
import EncomiendaDetails from "./details";
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
    render: (record: Encomienda) => {
      const { handleDeleteEncomienda } = Context();
      return (
        <div className="flex items-baseline gap-5">
          <EncomiendaDetails modalActivator="Ver Detalles">
            <div className="flex items-end justify-between pb-5">
              <div className="mt-7 space-y-3.5">
                <p>
                  <Typography.Text strong>Receptor: </Typography.Text>
                  <Typography.Text>{record.nombreReceptor}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Remitente: </Typography.Text>
                  <Typography.Text>{record.nombreRemitente}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Precio: </Typography.Text>
                  <Tag color="green">
                    {record.precio.toLocaleString("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    })}
                  </Tag>
                </p>
                <p>
                  <Typography.Text strong>Destino: </Typography.Text>
                  <Typography.Text>{record.destino}</Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Fecha de Envío: </Typography.Text>
                  <Typography.Text>{record.fechaEnvio}</Typography.Text>
                </p>
              </div>
              <Image
                src={ShippingBoxAssets}
                alt="Shipping Box"
                width={200}
                height={200}
              />
            </div>
          </EncomiendaDetails>

          <Button
            onClick={() => handleDeleteEncomienda(record.key)}
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
