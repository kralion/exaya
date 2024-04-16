import { Tag, Typography } from "antd";
import { Black_Ops_One } from "next/font/google";
import Image from "next/image";
import React from "react";
import UserInfoDetails from "./user-info";

const { Title } = Typography;

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppHeader: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <div>
      {!collapsed ? (
        <Tag className="m-2 rounded-full border-orange-300  bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 font-semibold text-white shadow-md shadow-slate-200 ">
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
            className="animate__animated animate__flip"
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
          className="animate__animated animate__flip ml-1 mt-5  flex cursor-pointer items-center justify-center text-center  drop-shadow-md"
          src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
          width={40}
          height={40}
          alt="logo"
        />
      )}

      <UserInfoDetails collapsed={collapsed} />
    </div>
  );
};

export default AppHeader;
