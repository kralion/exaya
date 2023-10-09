import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import React, { useMemo } from "react";

type NotificationProps = {
  placement: NotificationPlacement;
  message: string;
  icon: React.ReactNode;
  description?: string;
  type: "success" | "info" | "warning" | "error";
};

const Context = React.createContext({
  openNotification: ({
    placement,
    message,
    icon,
    description,
    type,
  }: NotificationProps) => {
    notification.open({
      message: message,
      description: description,
      icon: icon,
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
      icon,
      description,
      type,
    }: NotificationProps) => {
      api[type]({
        message: message,
        description: description,
        icon: icon,
        placement: placement,
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
