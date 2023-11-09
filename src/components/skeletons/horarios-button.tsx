import { Space, Skeleton } from "antd";
import React from "react";

export default function ScheduleSkeleton() {
  return (
    <Space className=" flex flex-col">
      <Skeleton.Button
        style={{
          borderRadius: 16,
          width: 100,
          height: 30,
        }}
        active
        size="small"
      />
    </Space>
  );
}
