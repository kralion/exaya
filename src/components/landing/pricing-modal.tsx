import { Modal, Typography } from "antd";
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export function PricingModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="w-full" onClick={showModal}>
        {trigger}
      </div>

      <Modal
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_) => (
          <a
            href=" https://wa.me/+51914019629?text=Quiero%20saber%20más%20sobre%20el%20plan%20:"
            target="_blank"
          >
            <button
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-duration="500"
              className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-white hover:text-white hover:opacity-80"
            >
              <BsWhatsapp size={15} /> Negociar
            </button>
          </a>
        )}
      >
        <div className="mb-10">
          <Typography.Title level={3}>Adquisicion de plan</Typography.Title>
          <p>
            Habla con nosotros para poder adecuar tu plan y tener un acuerdo
            Cliente-Proveedor que se ajuste a tus necesidades.
          </p>
        </div>
      </Modal>
    </>
  );
}
