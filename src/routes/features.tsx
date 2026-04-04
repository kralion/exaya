import LandingLayout from "@/components/landing/landing-layout";
import Card from "@/components/ui/features/card";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
});

const cards = [
  {
    cardTitle: "Operaciones en tiempo real",
    cardDescription:
      "Visualiza viajes, ocupación y ventas con información actualizada.",
    cardImage: "https://cdn-icons-png.flaticon.com/128/3659/3659899.png",
    delay: "0",
  },
  {
    cardTitle: "Encomiendas y rastreo",
    cardDescription:
      "Registra envíos y permite a tus clientes consultar el estado.",
    cardImage: "https://cdn-icons-png.flaticon.com/128/709/709790.png",
    delay: "100",
  },
  {
    cardTitle: "Roles y sedes",
    cardDescription:
      "Administra usuarios, permisos y agencias desde un solo lugar.",
    cardImage: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    delay: "200",
  },
];

function FeaturesPage() {
  return (
    <LandingLayout>
      <Typography.Title level={2}>Features</Typography.Title>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 pb-16">
        {cards.map((c) => (
          <Card key={c.cardTitle} {...c} />
        ))}
      </div>
    </LandingLayout>
  );
}
