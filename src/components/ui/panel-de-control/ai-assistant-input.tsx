import { useNotification } from "@/context/NotificationContext";
import { Button, Input, Space } from "antd";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { ImSpinner10 } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

const { TextArea } = Input;

export const AIAssistantInput = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  useHotkeys("ctrl+enter", () => {
    inputRef.current?.focus();
  });
  const [value, setValue] = useState("");
  const [generating, setGenerating] = useState(false);

  const { openNotification } = useNotification();

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      openNotification({
        message: "Boleto generado",
        description:
          "El boleto se ha generado correctamente, los detalles se visualizan en el viaje para el que fue creado",
        placement: "topRight",
        type: "success",
      });
    }, 3000);
  };
  const [focused, setFocused] = useState(false);

  const placeholderTexts = [
    "Soy una herramienta de Inteligencia Artificial",
    "Puedo ayudarte con cosas como :",
    "Reservar el asiento 7 para 74845147 para el 15/10/2023 a 50 soles.",
    "Vender el asiento 40 para 35645123 para hoy a 45 soles",
    "Y yo me encargo de generar el boleto, tu solo tienes que imprimirlo...",
  ];

  return (
    <Space className=" items-center justify-center gap-1">
      <TextArea
        style={{ width: 600 }}
        ref={inputRef}
        className={` absolute top-2.5  border-1 ${
          focused
            ? " focus:bg-yellow-100 focus:font-semibold focus:shadow-orange-200"
            : ""
        }`}
        value={value}
        allowClear
        size="large"
        onChange={(e) => {
          setFocused(true);
          setValue(e.target.value);
        }}
        onBlur={() => setFocused(false)}
        autoSize={{ minRows: 1, maxRows: 3 }}
        title="También puedes usar Ctrl + Enter para enfocar el input"
        onPressEnter={handleGenerate}
      />
      {!focused && (
        <TypeAnimation
          preRenderFirstString={true}
          sequence={placeholderTexts}
          speed={15}
          deletionSpeed={70}
          className="absolute left-6 top-0 text-gray-400"
          repeat={4}
        />
      )}
      <Button
        className="left-[595px] top-1 h-10 rounded-lg"
        type="primary"
        onClick={handleGenerate}
      >
        {generating ? (
          <ImSpinner10 className={generating ? "animate-spin" : ""} size={20} />
        ) : (
          <IoMdSend size={20} />
        )}
      </Button>
    </Space>
  );
};
