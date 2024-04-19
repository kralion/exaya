import { useNotification } from "@/context/NotificationContext";
import { Button, Modal, Popconfirm, Tag, Typography } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import { api } from "@/utils/api";

type Props = {
  id: string;
  modalActivator: string;
};
const { Title, Text } = Typography;

export default function EncomiendaDetails({ id, modalActivator }: Props) {
  const [open, setOpen] = useState(false);
  const { openNotification } = useNotification();
  const [status, setStatus] = useState(false);
  const { data: encomienda } = api.encomiendas.getEncomiendaById.useQuery({
    id,
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleOkStatusChange = () => {
    setStatus(!status);
    openNotification({
      message: "Estado de Encomienda Actualizado",
      description: `El estado de la encomienda ha sido actualizado a ${
        status === true ? "Por Pagar" : "Pagado"
      }`,
      type: "success",
      placement: "topRight",
    });
  };

  return (
    <>
      <Button onClick={showModal}>{modalActivator}</Button>
      <Modal
        width={700}
        title={
          <div>
            <Title level={3}>Detalles de la Encomienda</Title>
            {encomienda && (
              <div>
                <Popconfirm
                  title="¿Está segur@ de cambiar el estado de la encomienda?"
                  onConfirm={handleOkStatusChange}
                  okText="Sí"
                  cancelText="No"
                >
                  <Tag
                    className="cursor-pointer rounded-full px-5 font-semibold  hover:opacity-80 "
                    color={status === true ? "green-inverse" : "red-inverse"}
                  >
                    {status === true ? "Pagado" : "Por Pagar"}
                  </Tag>
                </Popconfirm>
                <Tag
                  color="gold-inverse"
                  className="rounded-full px-5 font-semibold shadow-md"
                >
                  S/. {encomienda.response?.precio}.00
                </Tag>
              </div>
            )}
          </div>
        }
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <hr className="mb-7 mt-3" />
        <div className="px-5 pb-10 ">
          <div className="flex justify-between">
            <div className="space-y-3">
              <p>
                <Text strong>Guía: </Text>
                <Text code>
                  {encomienda?.response?.serie}-{encomienda?.response?.codigo}
                </Text>
              </p>

              <p>
                <Text strong>Remitente: </Text>
                <Text>{encomienda?.response?.remitenteDni}</Text>
              </p>
              <p>
                <Text strong>Receptor: </Text>
                <Text>{encomienda?.response?.destinatarioDni}</Text>
              </p>
              <p>
                <Text strong>Comprobante: </Text>
                {encomienda?.response?.factura ? (
                  <Text code>Factura</Text>
                ) : (
                  <Text code>Boleta</Text>
                )}
              </p>
              <p>
                {/* TODO: Change this to the correct value, to ORIGEN AND DESTINO */}
                <Text strong>Origen: </Text>
                <Text>{encomienda?.response?.viaje.estado}</Text>
              </p>
              <p>
                <Text strong>Destino: </Text>
                <Text>{encomienda?.response?.viaje.estado}</Text>
              </p>
              <p>
                <Text strong>Fecha de Envío: </Text>
                <Text>
                  {encomienda?.response?.viaje.salida.toLocaleString("es-PE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </p>
              <hr className="mb-7 mt-3 w-64" />

              <p className="flex flex-col ">
                <Text strong>Descripción: </Text>
                <Text>{encomienda?.response?.descripcion}</Text>
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
      </Modal>
    </>
  );
}
