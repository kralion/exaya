import LandingLayout from "@/components/landing-layout";
import PlanesCard from "@/components/ui/planes/card";
import React from "react";

export default function Planes() {
  return (
    <LandingLayout>
      <p className="space-y-3.5">
        <h1 className="text-4xl font-bold">Planes</h1>
        <h4 className=" text-zinc-500">
          Contamos con planes que se adaptan a tu negocio y necesidades
        </h4>
      </p>
      <div className="my-7 flex flex-col justify-center gap-7 lg:flex-row ">
        <PlanesCard
          planTitle="Plan Básico"
          planPrice="S/. 800.00"
          planTimeCharger="Por Mes"
          planDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          planFeatures={[
            "Lorem ipsum dolor sit amet consectetur ",
            "Lorem ipsum dolor sit amet consectetur ",
            "Lorem ipsum dolor sit amet consectetur",
          ]}
        />
        <PlanesCard
          planTitle="Plan Premium"
          planPrice="S/. 1,100.00"
          planTimeCharger="Por Mes"
          planDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          planFeatures={[
            "Lorem ipsum dolor sit amet consectetur ",
            "Lorem ipsum dolor sit amet consectetur ",
            "Lorem ipsum dolor sit amet consectetur",
          ]}
        />
        <PlanesCard
          planTitle="Customizado"
          planPrice="S/. 1,500.00"
          planTimeCharger="Por Mes"
          planDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          planFeatures={[
            "Lorem ipsum dolor sit amet consectetur ",
            "Lorem ipsum dolor sit amet consectetur ",
            "Lorem ipsum dolor sit amet consectetur",
          ]}
        />
      </div>
    </LandingLayout>
  );
}
