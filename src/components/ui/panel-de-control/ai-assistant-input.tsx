import { useNotification } from "@/context/NotificationContext";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { BiCheckCircle } from "react-icons/bi";
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
        icon: <BiCheckCircle size={25} />,
        placement: "topRight",
        type: "success",
      });
    }, 3000);
  };
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
            placeholder="Soy una IA para generar boletos. Escribe los datos clave, yo hago el resto."
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
