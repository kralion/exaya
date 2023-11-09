import { Space, Skeleton } from "antd";
import React from "react";

export default function GeneralStatisticsSkeleton() {
  return (
    <Space align="start" className="flex flex-col">
      <br />
      <Skeleton.Input active />
      <br />
      <br />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 360,
        }}
        active
        size="large"
      />
      <br />
      <Space>
        <Skeleton.Button
          style={{
            borderRadius: 5,
            width: 115,
            height: 40,
          }}
          active
          size="small"
        />
        <Skeleton.Button
          style={{
            borderRadius: 5,
            width: 115,
            height: 40,
          }}
          active
          size="small"
        />
        <Skeleton.Button
          style={{
            borderRadius: 5,
            width: 115,
            height: 40,
          }}
          active
          size="small"
        />
      </Space>
    </Space>
  );
}
