import LandingLayout from "@/components/landing/landing-layout";
import PlanesCard from "@/components/ui/planes/card";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";

export const Route = createFileRoute("/planes")({
  component: PlanesPage,
});

const planes = [
  {
    planTitle: "Básico",
    planPrice: "S/. 0",
    planTimeCharger: "por mes",
    planDescription: "Ideal para comenzar con funciones esenciales.",
    planFeatures: ["Ventas de pasajes", "Reportes básicos", "Soporte por email"],
  },
  {
    planTitle: "Profesional",
    planPrice: "S/. 49",
    planTimeCharger: "por mes",
    planDescription: "Para operaciones que requieren más control.",
    planFeatures: [
      "Todo lo del plan Básico",
      "Encomiendas",
      "Programación avanzada",
    ],
  },
];

function PlanesPage() {
  return (
    <LandingLayout>
      <Typography.Title level={2}>Membresías</Typography.Title>
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 pb-16">
        {planes.map((p) => (
          <PlanesCard key={p.planTitle} {...p} />
        ))}
      </div>
    </LandingLayout>
  );
}
