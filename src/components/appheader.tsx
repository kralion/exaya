import { Avatar, Badge, Space, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";
import { Black_Ops_One } from "next/font/google";
import Image from "next/image";
import React from "react";

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
  const { data: session } = useSession();
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

      <Space wrap size={1} className="my-16 flex flex-col">
        {!collapsed ? (
          <Avatar
            className="box-border border-1 border-gray-400"
            size={60}
            src="https://randomuser.me/api/portraits/men/22.jpg"
          />
        ) : (
          <Avatar
            className="box-border border-1 border-gray-400"
            size={40}
            src="https://randomuser.me/api/portraits/men/22.jpg"
          />
        )}

        {!collapsed && (
          <div className="flex flex-col items-center justify-center">
            <Typography.Text strong>
              {session?.user?.name || "César Córdova"}
            </Typography.Text>
            <Tag
              color={
                session?.user?.role === "admin"
                  ? "volcano-inverse"
                  : "green-inverse"
              }
              className="mt-1 rounded-full"
            >
              admin
            </Tag>
          </div>
        )}
      </Space>
    </div>
  );
};

export default AppHeader;
