import { useNotification } from "@/context/NotificationContext";
import type { IEncomienda } from "@/interfaces";
import { Button, Modal, Popconfirm, Tag, Typography } from "antd";
import React, { useState } from "react";

type Props = {
  modalActivator: string;
  children: React.ReactNode;
  encomienda: IEncomienda;
  estado: boolean;
};
const { Title } = Typography;

export default function EncomiendaDetails({
  modalActivator,
  children,
  encomienda,
}: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(encomienda.pagado);
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
                  S/. {encomienda.precioEnvio}.00
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
