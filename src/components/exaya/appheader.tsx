import { Tag, Typography } from "antd";
import { Black_Ops_One } from "next/font/google";
import Image from "next/image";
import React from "react";
import SessionInfo from "./session-info";

const { Title } = Typography;

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppHeader({ collapsed, setCollapsed }: Props) {
  return (
    <div>
      {!collapsed ? (
        <Tag className="m-2 rounded-full border-orange-300  bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 font-semibold text-white shadow-xl  ">
          Powered with AI
        </Tag>
      ) : null}
      {!collapsed ? (
        <div
          onClick={() => setCollapsed(!collapsed)}
          className=" flex cursor-pointer items-center justify-center   drop-shadow-md	"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            width={40}
            height={40}
            title="Exaya"
            alt="logo"
            priority
          />

          <Title level={3} className={` pt-3    ${blackOpsOne.className} `}>
            Exaya
          </Title>
        </div>
      ) : (
        <Image
          onClick={() => setCollapsed(!collapsed)}
          className="ml-1 mt-5  flex cursor-pointer items-center justify-center text-center  drop-shadow-md"
          src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
          width={40}
          height={40}
          alt="logo"
        />
      )}

      <SessionInfo collapsed={collapsed} />
    </div>
  );
}
