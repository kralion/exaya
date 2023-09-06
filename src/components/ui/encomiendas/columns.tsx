import { Button, Popconfirm, Tag, Typography } from "antd";
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
      <Tag
        color="green-inverse"
        className="rounded-full font-semibold shadow-md"
      >
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
      const cancel = () => {
        console.log("Cancelado");
      };
      const { handleDeleteEncomienda } = Context();
      return (
        <div className="flex items-baseline gap-2">
          <EncomiendaDetails
            encomienda={encomienda}
            modalActivator="Ver Detalles"
          >
            <div className="flex items-end justify-between pb-5">
              <div className="mt-7 space-y-3.5">
                <p className="mb-3 flex gap-2">
                  <Typography.Text strong>Guía: </Typography.Text>
                  <Tag> {encomienda.key}</Tag>
                  <Typography.Text strong>Clave: </Typography.Text>
                  <Typography.Text code>
                    {encomienda.claveRastreo?.toUpperCase() ?? "S/N"}
                  </Typography.Text>
                  <Typography.Text strong>Precio: </Typography.Text>
                  <Tag>
                    {encomienda.precio.toLocaleString("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    })}
                  </Tag>
                </p>
                <Typography.Text strong>Receptor: </Typography.Text>
                <Typography.Text>{encomienda.nombreReceptor}</Typography.Text>
                <p>
                  <Typography.Text strong>Remitente: </Typography.Text>
                  <Typography.Text>
                    {encomienda.nombreRemitente}
                  </Typography.Text>
                </p>
                <p>
                  <Typography.Text strong>Destino: </Typography.Text>
                  <Typography.Text>{encomienda.tipo}</Typography.Text>
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

          <Popconfirm
            okButtonProps={{
              style: {
                backgroundColor: "#f5222d",
                color: "white",
                borderRadius: "5px",
                border: "none",
              },
            }}
            title="Estás segur@ ?"
            onConfirm={cancel}
          >
            <Button
              onClick={() => handleDeleteEncomienda(encomienda.key)}
              danger
              type="link"
            >
              Eliminar
            </Button>
          </Popconfirm>
        </div>
      );
    },
  },
];
