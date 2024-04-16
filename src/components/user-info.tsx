import { Avatar, Space, Tag } from "antd";
import { useSession } from "next-auth/react";
import UserSkeleton from "./skeletons/user-info-skeleton";

export default function UserInfo({ collapsed }: { collapsed: boolean }) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <UserSkeleton />;
  }

  if (status === "unauthenticated") {
    return (
      <div className="my-16 flex flex-col items-center justify-center gap-3">
        <Avatar
          size={collapsed ? 35 : 80}
          src={
            "https://cdn-icons-png.flaticon.com/128/8509/8509694.png?ga=GA1.1.631442079.1696688262"
          }
        />
        {collapsed ? (
          <Tag color="red-inverse"></Tag>
        ) : (
          <Tag color="red-inverse">No autenticado</Tag>
        )}
      </div>
    );
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
              className="w-16 rounded-md text-center lowercase"
            >
              {sessionData?.user.rol}
            </Tag>
          )}
        </div>
      )}
    </Space>
  );
}
