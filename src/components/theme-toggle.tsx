import React from "react";
import { FloatButton } from "antd";
import { TiWeatherSunny } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { useEffect } from "react";

export default function ThemeToggle({
  setTheme,
}: {
  setTheme: (theme: string) => void;
}) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(savedTheme);
    }
  }, []);
  return (
    <FloatButton.Group
      trigger="hover"
      style={{ left: 5, bottom: 5 }}
      icon={<FaRegEye />}
    >
      <FloatButton
        onClick={() => {
          setTheme("dark");
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.toggle("dark");
        }}
        icon={<IoMdMoon title="Modo Oscuro" />}
      />
      <FloatButton
        onClick={() => {
          setTheme("defaultAlgorithm");
          localStorage.setItem("theme", "defaultAlgorithm");
          document.documentElement.classList.remove("dark");
        }}
        icon={<TiWeatherSunny />}
      />
    </FloatButton.Group>
  );
}
