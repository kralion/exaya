import { Title } from "@mantine/core";
import { Avatar, Space, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";
import { Black_Ops_One } from "next/font/google";
import Image from "next/image";
import React from "react";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
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
          className="mt-5 flex cursor-pointer items-center justify-center   drop-shadow-md	"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            width={40}
            height={40}
            title="Exaya"
            className="animate__animated animate__flip"
            alt="logo"
          />

          <Title
            className={`  bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-left   text-xl text-transparent     ${blackOpsOne.className} `}
          >
            Exaya
          </Title>
        </div>
      ) : (
        <Image
          onClick={() => setCollapsed(!collapsed)}
          className="animate__animated animate__flip ml-1 mt-5  flex cursor-pointer items-center justify-center  drop-shadow-md"
          src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
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
                  ? "blue-inverse"
                  : "gold-inverse"
              }
              className="mt-1 rounded-full font-semibold"
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
