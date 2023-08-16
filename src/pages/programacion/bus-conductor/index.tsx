import {
  ConductoresInformacion,
  BusConductorCarousel,
} from "@/components/ui/programacion";
import { Title } from "@mantine/core";
import React from "react";

function ProgramacionBusConductor() {
  return (
    <div className="space-y-7">
      <Title order={4}>Programacion Bus Conductor</Title>
      <section className="flex flex-col gap-7">
        <BusConductorCarousel />
        <ConductoresInformacion />
      </section>
    </div>
  );
}

export default ProgramacionBusConductor;
