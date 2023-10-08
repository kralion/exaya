import { Space, Avatar, Typography, Tag } from "antd";
import { useSession } from "next-auth/react";
import React from "react";
type UserInfoProps = {
  collapsed: boolean;
};

export default function UserInfo({ collapsed }: UserInfoProps) {
  const { data: session } = useSession();

  return (
    <Space wrap size={1} className="my-16 flex flex-col">
      {!collapsed ? (
        <Avatar
          className="box-border border-1 border-gray-400"
          size={60}
          src="https://randomuser.me/api/portraits/men/95.jpg"
        />
      ) : (
        <Avatar
          className="box-border border-1 border-gray-400"
          size={35}
          src="https://randomuser.me/api/portraits/men/95.jpg"
        />
      )}

      {!collapsed && (
        <div className="flex flex-col items-center justify-center">
          <Typography.Text strong>
            {session?.user?.name || "Gerardo Aguirre"}
          </Typography.Text>
          <Tag
            color={
              session?.user?.role === "admin" ? "blue-inverse" : "gold-inverse"
            }
            className="mt-1 rounded-full font-semibold"
          >
            admin
          </Tag>
        </div>
      )}
    </Space>
  );
}
