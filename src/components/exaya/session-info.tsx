import { CollapsedContext } from "@/context/MenuContext";
import { Avatar, Space, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import UserSkeleton from "../skeletons/user-info-skeleton";
const { Text } = Typography;

export default function SessionInfo() {
  const { isCollapsed } = useContext(CollapsedContext);
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <UserSkeleton />;
  }
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Space wrap size={1} className="my-14 flex flex-col">
      <Avatar
        className="rounded-full border-4 border-yellow-400"
        size={isCollapsed ? 35 : 80}
        src={sessionData?.user.foto}
      />
      {!isCollapsed && (
        <Space direction="vertical" className="items-center gap-1">
          <Text>
            {capitalizeFirstLetter(sessionData?.user.nombres.split(" ")[0])}{" "}
            {capitalizeFirstLetter(sessionData?.user.apellidos.split(" ")[0])}
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
