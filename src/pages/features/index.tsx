import LandingLayout from "@/components/landing-layout";
import Card from "@/components/ui/features/card";
import React from "react";

export default function Index() {
  return (
    <LandingLayout>
      <p className="space-y-3.5">
        <h1 className="text-4xl font-bold">Features</h1>
        <h4 className=" text-zinc-500">
          Empoderando tu negocio con tecnologias modernas <br /> y herramientas
          del ahora.
        </h4>
      </p>
      <div className="my-20 grid w-fit grid-cols-1 gap-4 lg:grid-cols-3">
        <Card
          cardTitle="Analiticas en Tiempo Real"
          cardDescription="Desarrollamos tu sitio web con las ultimas tecnologias del mercado."
          cardImage="https://cdn-icons-png.flaticon.com/128/2572/2572756.png"
        />
        {/* https://www.freepik.com/icon/infographics_2572756#fromView=search&term=analytics&page=4&position=1 */}
        <Card
          cardTitle="Clasificacion por Sedes"
          cardDescription="Desarrollamos tu sitio web con las ultimas tecnologias del mercado."
          cardImage="https://cdn-icons-png.flaticon.com/128/2572/2572963.png"
        />
        <Card
          cardTitle="Analiticas en Tiempo Real"
          cardDescription="Desarrollamos tu sitio web con las ultimas tecnologias del mercado."
          cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573140.png"
        />
        <Card
          cardTitle="Analiticas en Tiempo Real"
          cardDescription="Desarrollamos tu sitio web con las ultimas tecnologias del mercado."
          cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573051.png"
        />
        <Card
          cardTitle="Analiticas en Tiempo Real"
          cardDescription="Desarrollamos tu sitio web con las ultimas tecnologias del mercado."
          cardImage="https://cdn-icons-png.flaticon.com/128/2573/2573070.png"
        />
      </div>
    </LandingLayout>
  );
}
