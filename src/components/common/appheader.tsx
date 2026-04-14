import { Tag, Typography } from "antd";
import React from "react";
import SessionInfo from "./session-info";
const { Title } = Typography;

export default function AppHeader() {
  return (
    <div>
      <Tag className="m-2 rounded-full border-orange-300  bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 font-semibold text-white shadow-xl  ">
        Powered with AI
      </Tag>

      <div className=" flex cursor-pointer items-center justify-center drop-shadow-md   	">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
          width={40}
          height={40}
          alt="logo"
          className=" hover:motion-rotate-in-[-0.5turn]  "
        />

        <Title level={3} className="pt-3 font-['Black_Ops_One',sans-serif]">
          Exaya
        </Title>
      </div>

      <SessionInfo />
    </div>
  );
}
