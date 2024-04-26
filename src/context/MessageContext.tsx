import React, { createContext, useContext, useMemo } from "react";
import { message } from "antd";

const MessageContext = createContext(
  {} as {
    openMessage: ({
      content,
      duration,
      key,
      type,
    }: {
      content: string;
      key?: "updatable";
      duration?: number;
      type: "success" | "error" | "info" | "warning" | "loading";
    }) => void;
  }
);

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const contextValue = useMemo(() => {
    const openMessage = ({
      content,
      duration,
      key,
      type,
    }: {
      content: string;
      duration?: number;
      type: "success" | "error" | "info" | "warning" | "loading";
      className?: string;
      key?: "updatable";
    }) => {
      void messageApi.open({
        content,
        duration,
        type,
        key,
        className:
          type === "error"
            ? "text-red-600 dark:text-red-300"
            : type === "success"
            ? "text-green-600 dark:text-green-300"
            : type === "warning"
            ? "text-yellow-600 dark:text-yellow-300"
            : "text-blue-600 dark:text-blue-300",
      });
    };
    return { openMessage };
  }, [messageApi]);

  return (
    <>
      {contextHolder}
      <MessageContext.Provider value={contextValue}>
        {children}
      </MessageContext.Provider>
    </>
  );
};

// Create a useMessageContext hook for convenience
export const useMessageContext = () => useContext(MessageContext);
