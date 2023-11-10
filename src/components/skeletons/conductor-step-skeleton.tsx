import { Skeleton } from "antd";
import React from "react";

export default function ConductorInfoStepSkeleton() {
  return (
    <Skeleton.Button
      style={{
        borderRadius: 5,
        width: 500,
        height: 65,
      }}
      active
      size="small"
    />
  );
}
