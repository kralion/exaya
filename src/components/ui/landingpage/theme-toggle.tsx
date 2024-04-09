import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle({
  isChecked,
  handleCheckboxChange,
}: {
  isChecked: boolean;
  handleCheckboxChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer select-none items-center dark:text-black">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div
          className={`box block h-8 w-14 rounded-full ${
            isChecked ? "bg-orange-500" : "bg-zinc-700"
          }`}
        ></div>
        <div
          className={`group absolute left-1 top-1  flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
            isChecked ? "translate-x-full duration-500" : " duration-500"
          }`}
        >
          {isChecked ? (
            <IoSunnyOutline
              className={
                isChecked
                  ? " "
                  : " z-10 translate-x-0 text-gray-800 duration-500 group-active:rotate-180"
              }
            />
          ) : (
            <IoMoonOutline className="duratiton-500 z-10  group-active:-rotate-45" />
          )}
        </div>
      </div>
    </label>
  );
}
