import { useNotification } from "@/context/NotificationContext";
import {
  Alert,
  Button,
  Divider,
  Modal,
  Popconfirm,
  Tag,
  Typography,
} from "antd";
import React, { useState } from "react";
import Image from "next/image";
import { api } from "@/utils/api";
import EncomiendaAsset from "@/assets/images/encomienda.png";
import { CgDetailsMore } from "react-icons/cg";

type Props = {
  id: string;
  modalActivator: string;
};
const { Title, Text } = Typography;

export default function EncomiendaDetails({ id, modalActivator }: Props) {
  const [open, setOpen] = useState(false);
  const { openNotification } = useNotification();
  const { mutate: statusMutation } =
    api.encomiendas.updateEncomiendaStatus.useMutation();
  const { data: encomienda } = api.encomiendas.getEncomiendaById.useQuery({
    id,
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleOkStatusChange = () => {
    statusMutation(
      { id, pagado: !encomienda?.response?.pagado },
      {
        onSuccess: (response) => {
          openNotification({
            type: "success",
            message: "Operación Exitosa",
            description: response.message,
            placement: "bottomRight",
          });
        },
        onError: (error) => {
          openNotification({
            type: "error",
            message: "Error de Actualización",
            description: error.message,
            placement: "bottomRight",
          });
        },
      }
    );
    setOpen(false);
  };

  return (
    <>
      <Button
        icon={<CgDetailsMore />}
        title={modalActivator}
        onClick={showModal}
        type="primary"
      />
      <Modal
        width={700}
        title={
          <div>
            <Title level={3}>Detalles de la Encomienda</Title>
            {encomienda?.response?.pagado === true ? "" : <Tag>Por Pagar</Tag>}
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
        }
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div>
          <Divider />
          <div className="flex justify-between">
            <div className="space-y-3">
              <p>
                <Text strong>Guía : </Text>
                <Text code>
                  {encomienda?.response?.serie}-{encomienda?.response?.codigo}
                </Text>
              </p>
              <p>
                <Text strong>Remitente: </Text>
                <Text>
                  {encomienda?.response?.remitenteNombres}{" "}
                  {encomienda?.response?.remitenteApellidos}
                </Text>
              </p>
              <p>
                <Text strong>Destinatario: </Text>
                <Text>
                  {encomienda?.response?.destinatarioNombres}{" "}
                  {encomienda?.response?.destinatarioApellidos}
                </Text>
              </p>
              <p>
                <Text strong>Origen: </Text>
                <Text>{encomienda?.response?.viaje.ruta.ciudadOrigen}</Text>
              </p>{" "}
              <p>
                <Text strong>Destino: </Text>
                <Text>{encomienda?.response?.viaje.ruta.ciudadDestino}</Text>
              </p>
              {encomienda?.response?.factura && (
                <>
                  <p>
                    <Text strong>Empresa: </Text>
                    {encomienda?.response?.empresa}
                  </p>
                  <p>
                    <Text strong>RUC: </Text>
                    {encomienda?.response?.ruc}
                  </p>
                </>
              )}
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
            </div>
            <Image
              src={EncomiendaAsset}
              alt="asset"
              className="drop-shadow-xl"
              width={250}
              height={250}
            />
          </div>
          <Divider />
          <Alert
            showIcon
            description={encomienda?.response?.descripcion}
            type="info"
          />
        </div>
      </Modal>
    </>
  );
}
