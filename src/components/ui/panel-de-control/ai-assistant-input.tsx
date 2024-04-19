import { useNotification } from "@/context/NotificationContext";
import { AutoComplete, Button, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { ImSpinner10 } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
const { TextArea } = Input;
const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

export const AIAssistantInput = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  useHotkeys("ctrl+enter", () => {
    inputRef.current?.focus();
  });
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);
  const [value, setValue] = useState("");
  const [generating, setGenerating] = useState(false);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };
  const { openNotification } = useNotification();

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      openNotification({
        message: "Boleto generado",
        description: "El boleto se ha generado correctamente",
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
    <>
      <div className="flex">
        <AutoComplete
          style={{
            width: 600,
          }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <div style={{ position: "relative" }}>
            <TextArea
              ref={inputRef}
              className={` rounded-r-none border-2 ${
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
                className="absolute left-3 top-3 text-gray-400"
                repeat={4}
              />
            )}
          </div>
        </AutoComplete>
        <Button onClick={handleGenerate}>
          {generating ? (
            <span>
              <ImSpinner10
                className={generating ? "animate-spin" : ""}
                size={25}
              />
            </span>
          ) : (
            <span>
              <IoMdSend size={25} />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};
