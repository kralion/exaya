import { Skeleton, Space } from "antd";
import React from "react";
import { BsTruck } from "react-icons/bs";

export default function ParcelSkeleton() {
  return (
    <div className="grid gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex aspect-square w-12 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
            <BsTruck className="h-6 w-6" />
          </div>
          <Space direction="vertical">
            <Skeleton.Input active size="small" />

            <Skeleton.Input active size="small" />
          </Space>
        </div>
        <div className="flex items-center gap-2">
          <Skeleton.Button
            style={{
              borderRadius: 16,
              width: 70,
            }}
            active
            size="small"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Ubicación Actual
          </div>

          <div className="font-medium">
            <Skeleton.Input active size="small" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Estimación de Llegada
          </div>

          <div className="font-medium">
            <Skeleton.Input active size="small" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Importe Total
          </div>

          <div className="font-medium">
            <Skeleton.Input active size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
