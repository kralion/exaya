import { Alert, AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import style from "./frame.module.css";
import { useHotkeys } from "react-hotkeys-hook";
import { useRef } from "react";
import { BiCheckCircle } from "react-icons/bi";
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
  const [showNotification, setShowNotification] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };
  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 3000);
  };
  return (
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
          placeholder="Soy tu asistente de IA para generar boletos. Escribe los datos clave, yo hago el resto."
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

      <Alert
        message="Operacion Exitosa"
        description="Puedes revisar el registro en la base de datos"
        type="warning"
        icon={<BiCheckCircle size={25} />}
        showIcon
        className={`fixed right-0 top-0 z-50 m-4 shadow-xl  ${
          showNotification
            ? "scale-x-100 opacity-100 duration-500"
            : "scale-y-0 opacity-0 duration-500"
        }`}
      />
    </div>
  );
};
