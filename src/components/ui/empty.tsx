import { Empty, Typography } from "antd";

export default function EmptyCustomized() {
  return (
    <Empty
      image="https://img.icons8.com/?size=48&id=pMqR06nxZSFn&format=png"
      imageStyle={{ height: 50 }}
      description={
        <Typography.Text type="secondary">
          No hay datos para mostrar
        </Typography.Text>
      }
    />
  );
}
