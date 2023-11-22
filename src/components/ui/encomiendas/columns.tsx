import type { ICliente, IEncomienda, IViaje } from "@/interfaces";
import { Button, Popconfirm, Tag, Typography } from "antd";
import EncomiendaDetails from "./detalles-encomienda";
import Image from "next/image";
import { useEncomiendasContext } from "@/context/EncomiendasContext";

export function DeleteEncomienda({ codigo }: { codigo: string }) {
  const { handleDeleteEncomienda } = useEncomiendasContext();
  return (
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
      onConfirm={() => handleDeleteEncomienda(codigo)}
    >
      <Button danger type="link">
        Eliminar
      </Button>
    </Popconfirm>
  );
}

export const columns = [
  {
    title: "Receptor",
    dataIndex: "destinatario",
    key: "destinatario",
    render: (destinatario: ICliente) => (
      <span>
        {destinatario.nombres} {""}
        {destinatario.apellidoPaterno}
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
        {remitente.apellidoPaterno}
      </span>
    ),
  },
  {
    title: "Precio",
    dataIndex: "precioEnvio",
    key: "precio",
    render: (precioEnvio: number) => (
      <Tag color="green-inverse" className=" font-semibold shadow-md">
        S/. {precioEnvio}.00
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
    render: (viaje: IViaje) => (
      <span>
        {viaje.fechaSalida.toLocaleString("es-PE", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </span>
    ),
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
            estado={encomienda.pagado}
          >
            <div className="px-5 pb-10 ">
              <div className="flex justify-between">
                <div className="space-y-3">
                  <p>
                    <Typography.Text strong>Guía: </Typography.Text>
                    <Typography.Text code> {encomienda.codigo}</Typography.Text>
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
                    <Typography.Text strong>Origen: </Typography.Text>
                    <Typography.Text>
                      {encomienda.viaje.ruta.ciudadOrigen}
                    </Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Destino: </Typography.Text>
                    <Typography.Text>
                      {encomienda.viaje.ruta.ciudadDestino}
                    </Typography.Text>
                  </p>
                  <p>
                    <Typography.Text strong>Fecha de Envío: </Typography.Text>
                    <Typography.Text>
                      {encomienda.viaje.fechaSalida.toLocaleString("es-PE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography.Text>
                  </p>
                  <hr className="mb-7 mt-3 w-64" />

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

          <DeleteEncomienda codigo={encomienda.codigo} />
        </div>
      );
    },
  },
];
