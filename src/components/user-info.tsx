import { Avatar, Space, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";

export default function UserInfo({ collapsed }: { collapsed: boolean }) {
  const { data: sessionData } = useSession();
  console.log(sessionData?.user.name);

  return (
    <Space wrap size={1} className="my-16 flex flex-col">
      <Avatar
        className=""
        size={collapsed ? 35 : 80}
        src={
          sessionData?.user?.image ||
          // "https://cdn-icons-png.flaticon.com/128/8509/8509694.png?ga=GA1.1.631442079.1696688262"
          "https://randomuser.me/api/portraits/men/85.jpg"
        }
      />

      {!collapsed && (
        <div className="flex flex-col items-center justify-center gap-3">
          {sessionData?.user?.rol && (
            <Tag
              color={
                sessionData?.user?.rol === "ADMIN"
                  ? "purple-inverse"
                  : sessionData?.user?.rol === "SUPERVISOR"
                  ? "blue-inverse"
                  : "green-inverse"
              }
              className="mt-1 rounded-full font-semibold lowercase"
            >
              {sessionData?.user?.rol}
            </Tag>
          )}
          <Tag
            color="purple-inverse"
            className="mt-1 rounded-full font-semibold lowercase"
          >
            admin
          </Tag>
          <h5 className="">
            {sessionData?.user?.name} {`Ramiro Paredes`}
          </h5>
        </div>
      )}
    </Space>
  );
}
