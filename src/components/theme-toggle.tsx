import React from "react";
import { FloatButton } from "antd";
import { TiWeatherSunny } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

export default function ThemeToggle({
  setTheme,
}: {
  setTheme: (theme: string) => void;
}) {
  return (
    <FloatButton.Group
      trigger="hover"
      style={{ left: 5, bottom: 5 }}
      icon={<FaRegEye />}
    >
      <FloatButton
        onClick={() => {
          setTheme("dark");
          document.documentElement.classList.toggle("dark");
        }}
        icon={<IoMdMoon title="Modo Oscuro" />}
      />
      <FloatButton
        onClick={() => {
          setTheme("defaultAlgorithm");
          document.documentElement.classList.remove("dark");
        }}
        icon={<TiWeatherSunny title="Modo Claro" />}
      />
    </FloatButton.Group>
  );
}
