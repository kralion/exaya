import { Empty, Typography } from "antd";

export default function EmptyCustomized() {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <Typography.Text type="secondary">
          No hay datos para mostrar
        </Typography.Text>
      }
    />
  );
}
