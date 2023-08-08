import React, { useState } from "react";
import { AutoComplete, Button, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { SendOutlined, AudioOutlined } from "@ant-design/icons";
import CustomIcon from "./custom-icon";
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
    <div className="flex ">
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 400,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        size="large"
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
      <Button
        title="Exaya AI"
        onClick={() => {
          alert("Exaya AI");
        }}
        type="primary"
        className="flex  animate-pulse items-center justify-center  backdrop-blur-2xl"
        style={{
          height: 40,
          width: 40,
          borderRadius: 0,
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
        }}
        icon={<CustomIcon />}
      />
    </div>
  );
};
