import type { IEncomienda } from "@/interfaces";
import { Title } from "@mantine/core";
import { Button, Modal, Select, Tag } from "antd";
import React, { useState } from "react";
import { set } from "zod";

const { Option } = Select;

type Props = {
  modalActivator: string;
  children: React.ReactNode;
  encomienda: IEncomienda;
};

export default function EncomiendaDetails({
  modalActivator,
  children,
  encomienda,
}: Props) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [status, setStatus] = useState(true);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    setOpen(false);
  };
  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      <Button onClick={showModal}>{modalActivator}</Button>
      <Modal
        width={600}
        title={
          <div>
            <Title order={3}>Detalles de la Encomienda</Title>
            {encomienda && (
              <div>
                <Tag
                  className="cursor-pointer rounded-full  font-semibold shadow-md "
                  onClick={changeStatus}
                  color={status === true ? "green-inverse" : "red-inverse"}
                >
                  {status === true ? "Pagado" : "Por Pagar"}
                </Tag>
                <Tag
                  className="rounded-full font-semibold shadow-md"
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
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
}
