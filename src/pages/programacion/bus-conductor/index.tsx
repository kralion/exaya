"use client";
import AppLayout from "@/components/common/layout";
import AppHead from "@/components/common/head";
import {
  BusForm,
  BusesInformacion,
  ConductorForm,
  ConductoresInformacion,
} from "@/components/ui/programacion";
import { Typography } from "antd";
import { useState } from "react";
const { Title } = Typography;
export default function ProgramacionBusConductor() {
  const [conductorIdToEdit, setConductorIdToEdit] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppLayout>
      <AppHead title="Programacion Bus Conductor" />
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-7">
        <div className="space-y-2 lg:space-y-7">
          <Title level={4}>Conductores</Title>
          <ConductorForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            conductorIdToEdit={conductorIdToEdit}
            activator="Agregar Conductor"
          />
          <ConductoresInformacion
            setIsModalOpen={setIsModalOpen}
            setConductorIdToEdit={setConductorIdToEdit}
          />
        </div>
        <div className="space-y-2 lg:space-y-7">
          <Title level={4}>Buses</Title>
          <BusForm activator="Agregar Bus" />
          <BusesInformacion />
        </div>
      </div>
    </AppLayout>
  );
}
