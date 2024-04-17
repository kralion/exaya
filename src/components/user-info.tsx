import { Avatar, Space, Tag } from "antd";
import { useSession } from "next-auth/react";
import UserSkeleton from "./skeletons/user-info-skeleton";

export default function UserInfo({ collapsed }: { collapsed: boolean }) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <UserSkeleton />;
  }

  return (
    <Space wrap size={1} className="my-14 flex flex-col">
      <Avatar size={collapsed ? 35 : 80} src={sessionData?.user.foto} />
      {!collapsed && (
        <div className="flex flex-col items-center justify-center gap-2">
          <h5 className="font-semibold">
            {sessionData?.user.nombres}{" "}
            {sessionData?.user.apellidos.slice(
              0,
              sessionData?.user.apellidos.indexOf(" ")
            )}
          </h5>
          {sessionData?.user && (
            <Tag
              color={
                sessionData?.user.rol === "ADMIN"
                  ? "purple-inverse"
                  : sessionData?.user.rol === "USER"
                  ? "green-inverse"
                  : "blue-inverse"
              }
              className="w-16 rounded-md text-center uppercase"
            >
              {sessionData?.user.rol}
            </Tag>
          )}
        </div>
      )}
    </Space>
  );
}
