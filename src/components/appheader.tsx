import { Black_Ops_One } from "next/font/google";
import Image from "next/image";
import React, { Suspense } from "react";
import UserInfoDetails from "./user-info";
import UserSkeleton from "./skeletons/user-info-skeleton";
import { Typography } from "antd";

const { Title } = Typography;

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
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
          className="mt-5 flex cursor-pointer items-center justify-center   drop-shadow-md	"
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

          <Title level={3} className={`  pt-3   ${blackOpsOne.className} `}>
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

      <Suspense fallback={<UserSkeleton />}>
        <UserInfoDetails collapsed={collapsed} />
      </Suspense>
    </div>
  );
};

export default AppHeader;
