"use client";
import { Avatar, Space, Tag } from "antd";
import { useSession } from "next-auth/react";
import Loader from "./Loader";

export default function UserInfo({ collapsed }: { collapsed: boolean }) {
  const { data, status } = useSession();
  const userData = data?.user || null;
  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    return <p>Accesso Denegado</p>;
  }

  return (
    <Space wrap size={1} className="my-16 flex flex-col">
      <Avatar
        size={collapsed ? 35 : 80}
        src={
          userData?.foto ||
          "https://cdn-icons-png.flaticon.com/128/8509/8509694.png?ga=GA1.1.631442079.1696688262"
        }
      />

      {!collapsed && (
        <div className="flex flex-col items-center justify-center gap-3">
          {userData && (
            <Tag
              color={
                userData.rol === "ADMIN"
                  ? "purple-inverse"
                  : userData.rol === "SUPERVISOR"
                  ? "blue-inverse"
                  : "green-inverse"
              }
              className="mt-1 rounded-full font-semibold lowercase"
            >
              {userData.rol}
            </Tag>
          )}
          <Tag
            color="purple-inverse"
            className="mt-1 rounded-full font-semibold lowercase"
          >
            admin
          </Tag>
          <h5 className="">{userData?.username || "Ramiro Paredes"}</h5>
        </div>
      )}
    </Space>
  );
}
