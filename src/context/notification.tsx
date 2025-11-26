import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
import React, { useMemo } from "react";

type NotificationPlacement = NotificationArgsProps["placement"];

type NotificationProps = {
  placement: NotificationPlacement;
  title: string;
  description?: string;
  type: "success" | "info" | "warning" | "error";
  icon?: React.ReactNode;
};

const Context = React.createContext({
  openNotification: ({
    placement,
    title,
    description,
    type,
  }: NotificationProps) => {
    // No-op: real implementation provided by Notification component
    // This is just a placeholder for the context default value
    void { placement, title, description, type };
  },
});

export default function Notification() {
  const [api, contextHolder] = notification.useNotification();

  const contextValue = useMemo(() => {
    const openNotification = ({
      placement,
      title,
      description,
      type,
    }: NotificationProps) => {
      api[type]({
        title: title,
        description: description,
        placement: placement,
      } as unknown as NotificationArgsProps);
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
