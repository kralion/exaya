import type { ICliente, IEncomienda, IViaje } from "@/interfaces";
import { Tag, Typography } from "antd";
import EncomiendaDetails from "./detalles-encomienda";
import Image from "next/image";
import DeleteEncomienda from "./deleteEncomienda";

export const columns = [
  {
    title: "Receptor",
    dataIndex: "destinatario",
    key: "destinatario",
    render: (destinatario: ICliente) => (
      <span>
        {destinatario.nombres} {""}
        {destinatario.apellidos}
      </span>
    ),
  },
  {
    title: "Remitente",
    dataIndex: "remitente",
    key: "remitente",
    render: (remitente: ICliente) => (
      <span>
        {remitente.nombres} {""}
        {remitente.apellidos}
      </span>
    ),
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
    dataIndex: "viaje",
    key: "destino",
    render: (viaje: IViaje) => <span>{viaje.ruta.ciudadOrigen}</span>,
  },
  {
    title: "Fecha de Envío",
    dataIndex: "viaje",
    key: "fechaEnvio",
    render: (viaje: IViaje) => <span>{viaje.fechaSalida}</span>,
  },
  {
    title: "Acciones",
    key: "action",
    render: (encomienda: IEncomienda) => {
      return (
        <div className="flex items-baseline gap-2">
          <EncomiendaDetails
            encomienda={encomienda}
            modalActivator="Ver Detalles"
            estado={encomienda.estado}
          >
            <div className="px-5 pb-10 ">
              <div className="flex justify-between">
                <div className="space-y-3">
                  <p>
                    <Typography.Text strong>Guía: </Typography.Text>
                    <Typography.Text code> {encomienda.guia}</Typography.Text>
                  </p>

                  <p>
                    <Typography.Text strong>Remitente: </Typography.Text>
                    <Typography.Text>
                      {encomienda.remitente.nombres}
                    </Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Receptor: </Typography.Text>
                    <Typography.Text>
                      {encomienda.destinatario.nombres}
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
                    <Typography.Text>
                      {encomienda.viaje.ruta.ciudadOrigen}
                    </Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Fecha de Envío: </Typography.Text>
                    <Typography.Text>
                      {encomienda.viaje.fechaSalida}
                    </Typography.Text>
                  </p>
                  <hr className="mb-7 mt-3 w-64" />

                  <p>
                    <Typography.Text strong>Contenido: </Typography.Text>
                    <Typography.Text>{encomienda.contenido}</Typography.Text>
                  </p>
                  <p className="flex flex-col ">
                    <Typography.Text strong>Descripción: </Typography.Text>
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

          {/* <Popconfirm
            okButtonProps={{
              style: {
                backgroundColor: "#f5222d",
                color: "white",
                borderRadius: "5px",
                border: "none",
              },
            }}
            title="Estás segur@ ?"
            onConfirm={() => console.log("Eliminado")}
            onCancel={cancel}
          >
            <Button danger type="link">
              Eliminar
            </Button>
          </Popconfirm> */}
          <DeleteEncomienda keyEncomienda={encomienda.guia} />
        </div>
      );
    },
  },
];
