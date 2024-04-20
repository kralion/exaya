import AppHead from "@/components/landing/head";
import LandingLayout from "@/components/landing/landing-layout";
import PlanesCard from "@/components/ui/planes/card";
import React from "react";

export default function Planes() {
  return (
    <LandingLayout>
      <AppHead title="Membresías" />
      <div className="relative space-y-5 pb-10">
        <h1 className="bg-gradient-to-r from-zinc-700 to-black bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-white dark:to-zinc-300  lg:text-5xl">
          Planes a Medida
        </h1>
        <h4 className=" px-6 tracking-tight  text-zinc-700 dark:text-zinc-200 lg:px-[450px]">
          Contamos con planes que se adaptan a tu negocio y necesidades, para
          que puedas elegir el que mejor se adapte a ti.
        </h4>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-7 space-y-3.5 lg:my-7 lg:flex-row ">
        <PlanesCard
          planTitle="Exaya Essentials"
          planPrice="S/. 600.00"
          planTimeCharger="Por Mes"
          planDescription="Todas las características esenciales de Exaya para pequeñas y medianas empresas."
          planFeatures={[
            "Rendimiento eficiente para necesidades estándar. ",
            "Respuesta rápida en tiempos de consulta. ",
            "Soporte en tiempo hábil.",
          ]}
        />
        <div className="relative">
          <span
            color="red-inverse"
            className="absolute -top-4 left-4 rounded-lg border border-orange-800 bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wide  text-white shadow-md shadow-orange-500"
          >
            Popular
          </span>

          <PlanesCard
            planTitle="Exaya Premium "
            planPrice="S/. 850.00"
            planTimeCharger="Por Mes"
            planDescription="Mayor capacidad de respuesta y soporte premium para empresas prometedoras en crecimiento."
            planFeatures={[
              "Mayor capacidad de respuesta.",
              "Consumo de recursos optimizado.",
              "Posibilidad de Feedback.",
              "Prioridad en el soporte.",
            ]}
          />
        </div>
        <PlanesCard
          planTitle="Exaya Elite "
          planPrice="S/. 1000.00"
          planTimeCharger="Por Mes"
          planDescription=" Máxima capacidad de respuesta, actualizaciones y atención personalizada para empresas con presencia a nivel macro."
          planFeatures={[
            "Actualizaciones con nuevas features",
            "Consumo de recursos optimizado.",
            "Máxima capacidad de respuesta.",
            "Atención personalizada y capacitación",
          ]}
        />
      </div>
    </LandingLayout>
  );
}
