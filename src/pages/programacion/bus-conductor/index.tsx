import {
  ConductoresInformacion,
  BusConductorCarousel,
} from "@/components/ui/programacion";
import { Title } from "@mantine/core";
import React from "react";

function ProgramacionBusConductor() {
  return (
    <div>
      <Title order={4}>Programacion Bus Conductor</Title>
      <div className="grid-f grid">
        <BusConductorCarousel />
        <ConductoresInformacion />
      </div>
    </div>
  );
}

export default ProgramacionBusConductor;
