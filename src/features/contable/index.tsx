import TableContable from "./components/table";
import { Typography } from "antd";

export function Contable() {
  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Contable</Typography.Title>
      <TableContable />
    </div>
  );
}
