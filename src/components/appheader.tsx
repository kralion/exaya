import { Title } from "@mantine/core";
import { Skeleton, Space } from "antd";
import { Black_Ops_One } from "next/font/google";
import Image from "next/image";
import React, { Suspense, lazy } from "react";

const UserInfoDetails = lazy(() => import("./user-info"));

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppHeader: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
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
            className={` bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-left   text-xl text-transparent     ${blackOpsOne.className} `}
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

      {loading === true ? (
        <Space className="my-16 flex flex-col">
          <Skeleton.Avatar active size={60} />
          <Skeleton.Input active size="small" />
          <Skeleton.Button
            style={{
              borderRadius: 16,
              width: 70,
            }}
            active
            size="small"
          />
        </Space>
      ) : (
        <UserInfoDetails collapsed={collapsed} />
      )}
      {/*
      
      //! Better way to do it, but it's not working using Suspense

      <Suspense
        fallback={
          <Space className="my-16 flex flex-col">
            <Skeleton.Avatar active size={60} />
            <Skeleton.Input active size="small" />
            <Skeleton.Button
              style={{
                borderRadius: 16,
                width: 70,
              }}
              active
              size="small"
            />
          </Space>
        }
      >
        <UserInfoDetails collapsed={collapsed} />
      </Suspense> */}
    </div>
  );
};

export default AppHeader;
