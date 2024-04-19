import React from "react";
import { FloatButton } from "antd";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { VscSymbolColor } from "react-icons/vsc";

export default function ThemeToggle({
  setTheme,
}: {
  setTheme: (theme: string) => void;
}) {
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ left: 14, bottom: 14 }}
      icon={<VscSymbolColor />}
    >
      <FloatButton
        onClick={() => {
          setTheme("dark");
          document.documentElement.classList.toggle("dark");
        }}
        icon={<IoMoonOutline />}
      />
      <FloatButton
        onClick={() => {
          setTheme("defaultAlgorithm");
          document.documentElement.classList.remove("dark");
        }}
        icon={<TiWeatherSunny />}
      />
    </FloatButton.Group>
  );
}
