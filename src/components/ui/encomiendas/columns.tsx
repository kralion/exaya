import { Button, Tag, Typography } from "antd";
import type { Encomienda } from "@/interfaces/interfaces";
import { useEncomiendasContext as Context } from "@/context/EncomiendasContext";

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
          <Typography.Link>
            <Button>Editar</Button>
          </Typography.Link>
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
