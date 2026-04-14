import { createFileRoute, Link } from "@tanstack/react-router";
import { Typography } from "antd";

export const Route = createFileRoute("/_app/soporte")({
  component: SoportePage,
});

function SoportePage() {
  return (
    <div className="space-y-4">
      <Typography.Title level={3}>Soporte</Typography.Title>
      <Typography.Paragraph>
        Para ayuda o consultas, visita la página de{" "}
        <Link to="/contacto" className="underline">
          contacto
        </Link>
        .
      </Typography.Paragraph>
    </div>
  );
}
