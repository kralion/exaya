import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [];

for (let i = 25; i < 70; i += 5) {
  options.push({
    value: i,
    label: i,
  });
}

const handleChange = (value: number) => {
  console.log(`selected ${value.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  })}
  }`);
};

export default function PriceSelector() {
  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="Lista de Precios"
      onChange={handleChange}
      options={options}
    />
  );
}
