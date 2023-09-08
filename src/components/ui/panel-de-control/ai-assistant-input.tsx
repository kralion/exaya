import GlitterIcon from "@/assets/icons/glitter.svg";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import Image from "next/image";
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
              Found {query} on{" "}
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
        dropdownMatchSelectWidth={252}
        style={{
          width: 400,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <TextArea
          style={{
            borderRadius: 0,
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            paddingLeft: 15,
          }}
          autoFocus={true}
          className="flex-1"
          size="large"
          autoSize
          placeholder="Que quieres hacer !"
        />
      </AutoComplete>

      <button className={style.button}>
        <span>
          <Image src={GlitterIcon} width={20} height={20} alt="icon" />
        </span>
      </button>
    </div>
  );
};
