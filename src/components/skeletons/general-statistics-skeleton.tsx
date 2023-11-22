import { Space, Skeleton } from "antd";
import React from "react";

export default function GeneralStatisticsSkeleton() {
  return (
    <Space align="start" className="flex flex-col">
      <br />
      <Skeleton.Input active />
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
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 160,
          height: 25,
        }}
        active
        size="large"
      />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 400,
          height: 40,
        }}
        active
        size="large"
      />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 160,
          height: 25,
        }}
        active
        size="large"
      />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 400,
          height: 40,
        }}
        active
        size="large"
      />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 160,
          height: 25,
        }}
        active
        size="large"
      />
      <Skeleton.Button
        style={{
          borderRadius: 5,
          width: 400,
          height: 40,
        }}
        active
        size="large"
      />
    </Space>
  );
}
