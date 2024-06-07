import { FloatButton } from "antd";
import { useEffect } from "react";
import { BsPaintBucket } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { TiWeatherSunny } from "react-icons/ti";

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
      style={{ left: 7, bottom: 7 }}
      icon={<BsPaintBucket />}
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
