import { Space, Skeleton } from "antd";
import React from "react";

export default function GaugeSkeleton({ loading }: { loading: boolean }) {
  return (
    <Skeleton loading={loading}>
      <Space className=" flex flex-col">
        <Skeleton.Avatar size={150} />
        <Skeleton.Button
          style={{
            borderRadius: 5,
            width: 170,
            height: 30,
          }}
          active
          size="small"
        />
      </Space>
    </Skeleton>
  );
}
