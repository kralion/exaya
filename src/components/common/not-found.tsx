import { Link } from "@tanstack/react-router";
import { Typography } from "antd";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-8">
      <Typography.Title level={3}>Página no encontrada</Typography.Title>
      <Link to="/" className="text-base underline">
        Volver al inicio
      </Link>
    </div>
  );
}
