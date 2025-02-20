import ParcelTicketPrint from "@/components/ui/encomiendas/parcel-ticket";
import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import { Button, Modal, Popconfirm, Tag } from "antd";
import { useRef, useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { useReactToPrint } from "react-to-print";

type Props = {
  id: string;
  modalActivator: string;
};

export default function EncomiendaDetails({ id, modalActivator }: Props) {
  const [open, setOpen] = useState(false);
  const { openMessage } = useMessageContext();
  const { mutate: statusMutation } =
    api.encomiendas.updateEncomiendaStatus.useMutation();
  const { data: encomienda } = api.encomiendas.getEncomiendaById.useQuery({
    id,
  });
  const ref = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    documentTitle: `Boleto de Encomienda - Remitente ${
      encomienda?.response?.remitenteDni ?? ""
    }`,
    content: () => ref.current,
    pageStyle: "@media print { .page-break { page-break-before: always; } }",
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleOkStatusChange = () => {
    statusMutation(
      { id, pagado: !encomienda?.response?.pagado },
      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
      }
    );
    setOpen(false);
  };

  return (
    <>
      <Button icon={<FaInfo />} title={modalActivator} onClick={showModal} />
      <Modal
        width={600}
        title={
          <div className="mr-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {encomienda?.response?.pagado === true ? "Pagado" : "Por pagar"}
              <Popconfirm
                title="¿Esto se cambiará a PAGADO"
                onConfirm={handleOkStatusChange}
                okText="Sí"
                cancelText="No"
              >
                <Tag
                  className={` cursor-pointer rounded-full font-semibold  hover:opacity-80
                ${encomienda?.response?.pagado === true ? "" : "animate-pulse"}
                  `}
                  color={
                    encomienda?.response?.pagado === true
                      ? "green-inverse"
                      : "red-inverse"
                  }
                >
                  S/. {encomienda?.response?.precio}.00
                </Tag>
              </Popconfirm>
            </div>
            <Button
              type="primary"
              className="hidden lg:block"
              onClick={handlePrint}
            >
              Imprimir
            </Button>
          </div>
        }
        open={open}
        centered
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <ParcelTicketPrint id={encomienda?.response?.id as string} ref={ref} />
      </Modal>
    </>
  );
}
