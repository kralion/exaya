import { Empty, Typography } from "antd";

export default function EmptyCustomized() {
  return (
    <Empty
      description={
        <Typography.Text type="secondary">
          No hay datos para mostrar
        </Typography.Text>
      }
    />
  );
}
