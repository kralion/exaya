import React, { createContext, useContext, useMemo } from "react";
import { message } from "antd";

const MessageContext = createContext(
  {} as {
    openMessage: ({
      content,
      duration,
      type,
    }: {
      content: string;
      duration: number;
      type: "success" | "error" | "info" | "warning";
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
      type,
    }: {
      content: string;
      duration: number;
      type: "success" | "error" | "info" | "warning";
      className?: string;
    }) => {
      void messageApi.open({
        content,
        duration,
        type,
        className:
          type === "error"
            ? "text-red-500 dark:text-red-300"
            : type === "success"
            ? "text-green-500 dark:text-green-300"
            : type === "info"
            ? "text-blue-500 dark:text-blue-300"
            : "text-yellow-500 dark:text-yellow-300",
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
