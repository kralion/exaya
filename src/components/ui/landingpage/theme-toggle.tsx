import React, { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div
          className={`box block h-8 w-14 rounded-full ${
            isChecked ? "bg-gray-800" : "bg-orange-500"
          }`}
        ></div>
        <div
          className={`group absolute left-1 top-1  flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
            isChecked ? "translate-x-full duration-500" : " duration-500"
          }`}
        >
          {isChecked ? (
            <IoMoonOutline
              className={
                isChecked
                  ? " text-orange-500"
                  : " z-10 translate-x-0 text-gray-800 duration-500 group-active:rotate-180"
              }
            />
          ) : (
            <IoSunnyOutline className="duratiton-500 z-10  group-active:-rotate-45" />
          )}
        </div>
      </div>
    </label>
  );
}
