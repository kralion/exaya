import { useNotification } from "@/context/NotificationContext";
import type { IEncomienda } from "@/interfaces";
import { Title } from "@mantine/core";
import { Button, Modal, Popconfirm, Tag } from "antd";
import React, { useState } from "react";

type Props = {
  modalActivator: string;
  children: React.ReactNode;
  encomienda: IEncomienda;
  estado: boolean;
};

export default function EncomiendaDetails({
  modalActivator,
  children,
  encomienda,
  estado,
}: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(estado);
  const { openNotification } = useNotification();

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
            <Title order={3}>Detalles de la Encomienda</Title>
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
                  className="rounded-full px-5 font-semibold"
                  color="gold-inverse"
                >
                  {encomienda.precio.toLocaleString("es-PE", {
                    style: "currency",
                    currency: "PEN",
                  })}
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
        {children}
      </Modal>
    </>
  );
}
