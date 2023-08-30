import { Black_Ops_One } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Avatar, Space, Typography } from "antd";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppHeader: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <div>
      {!collapsed ? (
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="mt-5 flex cursor-pointer items-center justify-center drop-shadow-md	"
        >
          <Image
            src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
            width={50}
            height={50}
            title="Exaya"
            className="animate__animated animate__flip"
            alt="logo"
          />
          <h3
            className={`  text-left text-xl  leading-none text-[#231335]   ${blackOpsOne.className} `}
          >
            Exaya
          </h3>
        </div>
      ) : (
        <Image
          onClick={() => setCollapsed(!collapsed)}
          className="animate__animated animate__flip ml-1 mt-5  flex cursor-pointer items-center justify-center  drop-shadow-md"
          src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
          width={40}
          height={40}
          alt="logo"
        />
      )}

      <Space wrap size={1} className="my-20 flex flex-col">
        {!collapsed ? (
          <Avatar
            className="box-border border-1 border-gray-400"
            size={60}
            src="https://images.unsplash.com/photo-1503593245033-a040be3f3c82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ca8c652b62b1f14c9c4c969289a8b33c"
          />
        ) : (
          <Avatar
            className="box-border border-1 border-gray-400"
            size={40}
            src="https://images.unsplash.com/photo-1503593245033-a040be3f3c82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ca8c652b62b1f14c9c4c969289a8b33c"
          />
        )}

        {!collapsed && <Typography.Text strong>César Saavedra</Typography.Text>}
      </Space>
    </div>
  );
};

export default AppHeader;
