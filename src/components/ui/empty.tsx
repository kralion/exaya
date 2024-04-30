import { Empty, Space, Typography } from "antd";
import React from "react";

export default function EmptyCustomized() {
  return (
    <Space direction="vertical" className="items-center justify-center">
      <Empty
        className="drop-shadow-xl"
        image="https://img.icons8.com/?size=80&id=rAcqajy3zM5W&format=png"
        imageStyle={{ height: 60 }}
      />
      <Typography.Text type="secondary">
        Se deben registrar datos para visualizar información.
      </Typography.Text>
    </Space>
  );
}
