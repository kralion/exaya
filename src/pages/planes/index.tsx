import LandingLayout from "@/components/landing-layout";
import PlanesCard from "@/components/ui/planes/card";
import React from "react";

export default function Planes() {
  return (
    <LandingLayout>
      <p className="space-y-3.5">
        <h1 className="text-4xl font-bold">Planes</h1>
        <h4 className=" text-zinc-700">
          Contamos con planes que se adaptan a tu negocio y necesidades
        </h4>
      </p>
      <div className="my-7 flex flex-col justify-center gap-7 lg:flex-row ">
        <PlanesCard
          planTitle="Exaya Essentials"
          planPrice="S/. 800.00"
          planTimeCharger="Por Mes"
          planDescription="Todas las características fundamentales de Exaya para pequeñas y medianas empresas."
          planFeatures={[
            "Rendimiento eficiente para necesidades estándar. ",
            "Respuesta rápida en tiempos de consulta. ",
            "Soporte en tiempo hábil.",
          ]}
        />
        <PlanesCard
          planTitle="Exaya Premium "
          planPrice="S/. 1,100.00"
          planTimeCharger="Por Mes"
          planDescription="Mayor capacidad de respuesta y soporte premium para empresas en crecimiento."
          planFeatures={[
            "Mayor capacidad de respuesta.",
            "Consumo de recursos optimizado.",
            "Posibilidad de Feedback.",
            "Prioridad en el soporte.",
          ]}
        />
        <PlanesCard
          planTitle="Exaya Elite "
          planPrice="S/. 1,500.00"
          planTimeCharger="Por Mes"
          planDescription=" Máxima capacidad de respuesta, actualizaciones y atención personalizada para empresas de envergadura."
          planFeatures={[
            "Máxima capacidad de respuesta.",
            "Consumo de recursos optimizado.",
            "Máxima capacidad de respuesta.",
            "Atención personalizada y capacitación especializada.",
          ]}
        />
      </div>
    </LandingLayout>
  );
}
