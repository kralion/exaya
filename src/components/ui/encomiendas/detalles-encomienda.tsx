import type { Encomienda } from "@/interfaces/interfaces";
import { Title } from "@mantine/core";
import { Button, Modal, Tag } from "antd";
import React, { useState } from "react";
import Notification from "../notification";
import styles from "./frame.module.css";

type Props = {
  modalActivator: string;
  children: React.ReactNode;
  encomienda: Encomienda;
};

export default function EncomiendaDetails({
  modalActivator,
  children,
  encomienda,
}: Props) {
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
    setOpen(false);
  };
  const changeStatus = () => {
    alert("Cambiar estado");
  };

  return (
    <>
      <Button onClick={showModal}>{modalActivator}</Button>
      <Modal
        width={700}
        title={
          <Title order={3}>
            <div className=" flex justify-between">
              Detalles de la Encomienda
              {encomienda && (
                <Tag
                  onClick={changeStatus}
                  color={encomienda.estado === "Pagado" ? "green" : "red"}
                  className="mr-5 flex cursor-pointer items-center hover:opacity-80"
                >
                  {encomienda.estado}
                </Tag>
              )}
            </div>
            <hr className="mt-3 rounded-lg border-[1.5px] border-dashed border-slate-600" />
          </Title>
        }
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        footer={
          <div className="flex justify-end gap-3">
            <Notification
              printerButton={
                <button className={styles.basicButton} onClick={handleOk}>
                  Guardar Cambios
                </button>
              }
            />
          </div>
        }
      >
        {children}
      </Modal>
    </>
  );
}
