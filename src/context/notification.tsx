import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import React, { useMemo } from "react";

type NotificationProps = {
  placement: NotificationPlacement;
  message: string;
  description?: string;
  type: "success" | "info" | "warning" | "error";
  icon?: React.ReactNode;
};

const Context = React.createContext({
  openNotification: ({
    placement,
    message,
    description,
    type,
  }: NotificationProps) => {
    notification.open({
      message: message,
      description: description,
      placement: placement,
      type: type,
    });
  },
});

export default function Notification() {
  const [api, contextHolder] = notification.useNotification();

  const contextValue = useMemo(() => {
    const openNotification = ({
      placement,
      message,
      description,
      type,
    }: NotificationProps) => {
      api.open({
        message: message,
        description: description,
        placement: placement,
        type: type,
        role: "alert",
      });
    };
    return {
      openNotification,
    };
  }, [api]);

  return (
    <Context.Provider
      value={{
        openNotification: contextValue.openNotification,
      }}
    >
      {contextHolder}
    </Context.Provider>
  );
}

export const useNotification = () => React.useContext(Context);
