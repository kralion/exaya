import React, { useMemo } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Tag, notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";

const manifiestoData = {
  turno: "2",
  fechaSalida: "18-12-2023",
  horaSalida: "20:30",
  placaBus: "B9Y-123",
};

const Context = React.createContext({ manifiestoData });

export default function ImprimirNotification({
  printerButton,
}: {
  printerButton: React.ReactNode;
}) {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Operación Existosa`,
      icon: <CheckCircleOutlined className="text-green-500" />,
      description: (
        <Context.Consumer>
          {({ manifiestoData }) => (
            <div>Impreso el {manifiestoData.fechaSalida}</div>
          )}
        </Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(() => ({ manifiestoData }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}

      <Button
        title="Imprimir"
        className="flex items-center"
        onClick={() => openNotification("bottomLeft")}
      >
        {printerButton}
      </Button>
    </Context.Provider>
  );
}
