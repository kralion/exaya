import { useEncomiendasContext as Context } from "@/context/EncomiendasContext";
import type { IEncomienda } from "@/interfaces";
import { Button, Popconfirm, Tag, Typography } from "antd";
import EncomiendaDetails from "./detalles-encomienda";
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
    render: (encomienda: IEncomienda) => {
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
            <div className="px-5 pb-10 ">
              <div className="flex items-center justify-between space-y-2">
                <div className="space-y-3">
                  <p>
                    <Typography.Text strong>Guía: </Typography.Text>
                    <Typography.Text code> {encomienda.key}</Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Clave: </Typography.Text>
                    <Typography.Text color="red" code>
                      {encomienda.claveRastreo?.toUpperCase() ?? "S/N"}
                    </Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Remitente: </Typography.Text>
                    <Typography.Text>
                      {encomienda.nombreRemitente}
                    </Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Receptor: </Typography.Text>
                    <Typography.Text>
                      {encomienda.nombreReceptor}
                    </Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Comprobante: </Typography.Text>
                    <Typography.Text code>
                      {encomienda.comprobante}
                    </Typography.Text>
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
                    <Typography.Text>{encomienda.contenido}</Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Contenido: </Typography.Text>
                    <Typography.Text>{encomienda.descripcion}</Typography.Text>
                  </p>
                </div>
                <Image
                  src="https://img.freepik.com/free-vector/post-office-abstract-concept-vector-illustration_335657-5688.jpg?size=626&ext=jpg"
                  alt="logo"
                  height={50}
                  width={300}
                />
              </div>
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
