import React from "react";
import { FloatButton } from "antd";
import { TiWeatherSunny } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

// import {switchOffSound} from "@/assets/sounds/switch-off.mp3";
// import switchOnSound from "@/assets/sounds/switch-on.mp3";
// import useSound from "use-sound";

// TODO: Add sound to the toggle

export default function ThemeToggle({
  setTheme,
}: {
  setTheme: (theme: string) => void;
}) {
  // const [playOn] = useSound(switchOnSound);
  // const [playOff] = useSound(switchOffSound);
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
          // playOff();
        }}
        icon={<IoMdMoon title="Modo Oscuro" />}
      />
      <FloatButton
        onClick={() => {
          setTheme("defaultAlgorithm");
          document.documentElement.classList.remove("dark");
          // playOn();
        }}
        icon={<TiWeatherSunny title="Modo Claro" />}
      />
    </FloatButton.Group>
  );
}
