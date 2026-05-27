import { Administracion } from "@/features/administracion";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/administracion")({
  component: AdministracionPage,
});

function AdministracionPage() {
  return <Administracion />;
}
