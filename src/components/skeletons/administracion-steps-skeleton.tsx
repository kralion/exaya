import { Space, Skeleton } from "antd";
import React from "react";

export default function AdministracionStepsSkeleton() {
  return (
    <Space align="end" className="flex flex-col">
      <br />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 280,
          height: 75,
        }}
        active
        size="large"
      />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 280,
          height: 100,
        }}
        active
        size="large"
      />
      <br />
    </Space>
  );
}
