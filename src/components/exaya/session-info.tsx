import { Avatar, Space, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";
import UserSkeleton from "../skeletons/user-info-skeleton";
const { Text } = Typography;

export default function SessionInfo({ collapsed }: { collapsed: boolean }) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <UserSkeleton />;
  }
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    const lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  }

  return (
    <Space wrap size={1} className="my-14 flex flex-col">
      <Avatar size={collapsed ? 35 : 80} src={sessionData?.user.foto} />
      {!collapsed && (
        <Space direction="vertical" className="items-center gap-1">
          <Text>
            {capitalizeFirstLetter(
              sessionData?.user.nombres.slice(
                0,
                sessionData?.user.nombres.indexOf(" ")
              )
            )}{" "}
            {capitalizeFirstLetter(
              sessionData?.user.apellidos.slice(
                0,
                sessionData?.user.apellidos.indexOf(" ")
              )
            )}
          </Text>
          {sessionData?.user && (
            <Tag
              color={
                sessionData?.user.rol === "ADMIN"
                  ? "cyan-inverse"
                  : sessionData?.user.rol === "USER"
                  ? "gold-inverse"
                  : "volcano-inverse"
              }
              className="w-16 rounded-md text-center text-xs font-semibold"
            >
              {sessionData?.user.rol}
            </Tag>
          )}
        </Space>
      )}
    </Space>
  );
}
