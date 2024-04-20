import React from "react";
import { FloatButton } from "antd";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { VscSymbolColor } from "react-icons/vsc";
// import switchOffSound from "@/assets/sounds/switch-off.mp3";
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
      trigger="click"
      type="primary"
      style={{ left: 14, bottom: 14 }}
      icon={<VscSymbolColor />}
    >
      <FloatButton
        onClick={() => {
          setTheme("dark");
          document.documentElement.classList.toggle("dark");
          // playOff();
        }}
        icon={<IoMoonOutline />}
      />
      <FloatButton
        onClick={() => {
          setTheme("defaultAlgorithm");
          document.documentElement.classList.remove("dark");
          // playOn();
        }}
        icon={<TiWeatherSunny />}
      />
    </FloatButton.Group>
  );
}
