import { createFileRoute } from "@tanstack/react-router";
import { AdministracionPage } from "@/features/administracion/AdministracionPage";

export const Route = createFileRoute("/administracion")({
  component: AdministracionPage,
});
