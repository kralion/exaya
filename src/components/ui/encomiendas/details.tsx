import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Title } from "@mantine/core";

type Props = {
  modalActivator: string;
  children: React.ReactNode;
};

export default function EncomiendaDetails({ modalActivator, children }: Props) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>{modalActivator}</Button>
      <Modal
        width={700}
        title={
          <Title order={3} style={{ marginBottom: 0 }}>
            Detalles de la Encomienda
            <hr className="mt-3 rounded-lg border-[1.5px] border-dashed border-slate-600" />
          </Title>
        }
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
}
