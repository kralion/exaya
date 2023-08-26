import {
  ConductoresInformacion,
  BusConductorCarousel,
} from "@/components/ui/programacion";
import { Title } from "@mantine/core";
import React from "react";
import { ConductoresForm } from "@/components/ui/programacion";

export default function ProgramacionBusConductor() {
  return (
    <div className="space-y-7">
      <Title order={4}>Programacion Bus Conductor</Title>
      <ConductoresForm activator="Agregar Conductor" />
      <ConductoresInformacion />
      <BusConductorCarousel />
    </div>
  );
}
