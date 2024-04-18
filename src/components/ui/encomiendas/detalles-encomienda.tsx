import { useNotification } from "@/context/NotificationContext";
import { Button, Modal, Popconfirm, Tag, Typography } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import { api } from "@/utils/api";

type Props = {
  codigo: string;
  modalActivator: string;
};
const { Title } = Typography;

export default function EncomiendaDetails({ codigo, modalActivator }: Props) {
  const [open, setOpen] = useState(false);
  const { openNotification } = useNotification();
  const [status, setStatus] = useState(false);
  const { data: encomienda } = api.encomiendas.getEncomiendaByCodigo.useQuery({
    codigo,
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
                  title="¿Está seguro de cambiar el estado de la encomienda?"
                  onConfirm={handleOkStatusChange}
                  okText="Si"
                  okButtonProps={
                    status === true
                      ? { className: "bg-red-500" }
                      : { className: "bg-green-500" }
                  }
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
                <Typography.Text strong>Guía: </Typography.Text>
                <Typography.Text code> {codigo}</Typography.Text>
              </p>

              <p>
                <Typography.Text strong>Remitente: </Typography.Text>
                <Typography.Text>
                  {encomienda?.response?.remitenteDni}
                </Typography.Text>
              </p>
              <p>
                <Typography.Text strong>Receptor: </Typography.Text>
                <Typography.Text>
                  {encomienda?.response?.destinatarioDni}
                </Typography.Text>
              </p>
              <p>
                <Typography.Text strong>Comprobante: </Typography.Text>
                {encomienda?.response?.factura ? (
                  <Typography.Text code>Factura</Typography.Text>
                ) : (
                  <Typography.Text code>Boleta</Typography.Text>
                )}
              </p>
              <p>
                {/* TODO: Change this to the correct value, to ORIGEN AND DESTINO */}
                <Typography.Text strong>Origen: </Typography.Text>
                <Typography.Text>
                  {encomienda?.response?.viaje.estado}
                </Typography.Text>
              </p>
              <p>
                <Typography.Text strong>Destino: </Typography.Text>
                <Typography.Text>
                  {encomienda?.response?.viaje.estado}
                </Typography.Text>
              </p>
              <p>
                <Typography.Text strong>Fecha de Envío: </Typography.Text>
                <Typography.Text>
                  {encomienda?.response?.viaje.salida.toLocaleString("es-PE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography.Text>
              </p>
              <hr className="mb-7 mt-3 w-64" />

              <p className="flex flex-col ">
                <Typography.Text strong>Descripción: </Typography.Text>
                <Typography.Text>
                  {encomienda?.response?.descripcion}
                </Typography.Text>
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
