import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { GiAbstract067 } from "react-icons/gi";
import { useState } from "react";
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
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <div className="flex">
      <AutoComplete
        dropdownMatchSelectWidth
        style={{
          width: 700,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <TextArea
          className="border-none bg-orange-100 shadow-md shadow-orange-200"
          style={{
            borderRadius: 0,
            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
          }}
          autoFocus={true}
          size="large"
          autoSize
          placeholder="Que quieres hacer !"
        />
      </AutoComplete>

      <button className={style.button}>
        <span>
          <GiAbstract067 className="animate-spin" size={25} />
        </span>
      </button>
    </div>
  );
};
