import TableContable from "@/components/ui/contable/table";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";

export const Route = createFileRoute("/_app/contable")({
  component: ContablePage,
});

function ContablePage() {
  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Contable</Typography.Title>
      <TableContable />
    </div>
  );
}
