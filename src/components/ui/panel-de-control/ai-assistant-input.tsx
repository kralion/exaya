import { useNotification } from "@/context/NotificationContext";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { ImSpinner10 } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import style from "./frame.module.css";
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
  const [placeholder, setPlaceholder] = useState("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const placeholderTexts = [
    "Soy una IA para generar boletos. Escribe los datos clave, yo hago el resto. Por ejemplo :",
    "Reservar el asiento 7 para 74845147 para el 15/10/2023 a 50 soles.",
    "Vender el asiento 40 para 35645123 para hoy a 45 soles",
    "Y yo me encargo de generar el boleto, tu solo tienes que imprimirlo...",
  ];

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (
        currentStringIndex < placeholderTexts.length &&
        i < placeholderTexts[currentStringIndex].length
      ) {
        setPlaceholder(
          (prev) => prev + placeholderTexts[currentStringIndex][i]
        );
        i++;
      } else {
        clearInterval(typing);
        if (currentStringIndex < placeholderTexts.length - 1) {
          setCurrentStringIndex(currentStringIndex + 1);
          setPlaceholder("");
        }
      }
    }, 50); // adjust the speed of typing here
    return () => clearInterval(typing);
  }, [currentStringIndex]);
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
          <TextArea
            ref={inputRef}
            className=" border-2 focus:border-none focus:bg-yellow-100  focus:font-semibold focus:shadow-orange-200"
            style={{
              borderRadius: 0,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              paddingBottom: 1,
            }}
            value={value}
            allowClear
            size="large"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            autoSize={{ minRows: 1, maxRows: 3 }}
            title="También puedes usar Ctrl + Enter para enfocar el input"
            placeholder={placeholder}
            onPressEnter={handleGenerate}
          />
        </AutoComplete>
        <button onClick={handleGenerate} className={style.button}>
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
        </button>
      </div>
    </>
  );
};
