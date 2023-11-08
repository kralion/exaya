import { Space, Skeleton } from "antd";
import React from "react";

export default function UserSkeleton() {
  return (
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
  );
}
