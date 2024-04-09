import AppHead from "@/components/head";
import LandingLayout from "@/components/landing-layout";
import Card from "@/components/ui/features/card";
import React from "react";

export default function Index() {
  return (
    <LandingLayout>
      <AppHead title="Features" />
      <div className=" relative space-y-3.5">
        <h1 className="bg-gradient-to-r from-zinc-700 to-black bg-clip-text text-2xl font-bold tracking-tight text-transparent  lg:text-5xl">
          Features
        </h1>
        <h4 className=" tracking-tigh px-5 dark:text-zinc-800 lg:px-[400px]">
          Exaya cuenta con funcionalidades que empoderan tu negocio con
          tecnologias modernas y herramientas del ahora.
        </h4>
      </div>
      <div className="flex items-center justify-center">
        <div className="my-7 grid grid-cols-1 items-center justify-center gap-5 lg:my-20 lg:grid-cols-3">
          <Card
            delay="200"
            cardTitle="Analíticas en Tiempo Real"
            cardDescription="Datos instantáneos para tomar decisiones precisas y oportunas para el crecimiento de tu empresa"
            cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573116.png"
          />
          {/* https://www.freepik.com/icon/infographics_2572756#fromView=search&term=analytics&page=4&position=1 */}
          <Card
            delay="300"
            cardTitle="Experiencia Personalizada"
            cardDescription="Herramientas adaptadas a tu personal para una gestión interna más efectiva con una interfaz intuitiva."
            cardImage="https://cdn-icons-png.flaticon.com/128/2572/2572963.png"
          />
          <Card
            delay="400"
            cardTitle="Seguridad y Confianza"
            cardDescription="Protege la información y garantiza transacciones seguras para tu organización y empleados."
            cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573108.png"
          />
          <Card
            delay="500"
            cardTitle="Actualizaciones"
            cardDescription="Protege la información y garantiza transacciones seguras para tu organización y empleados."
            cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573099.png"
          />
          <Card
            delay="600"
            cardTitle="Entrega de Valor"
            cardDescription="Cada función aporta eficiencia y calidad a tus operaciones internas para hacerlas más productivas. "
            cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573051.png"
          />

          <Card
            delay="700"
            cardTitle="Soporte de Primera"
            cardDescription=" Asistencia dedicada para resolver las necesidades de tus empleados y garantizar el éxito continuo."
            cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573060.png"
          />
        </div>
      </div>
    </LandingLayout>
  );
}
