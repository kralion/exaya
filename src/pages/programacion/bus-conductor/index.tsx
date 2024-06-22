"use client";
import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import {
  BusForm,
  BusesInformacion,
  ConductorForm,
  ConductoresInformacion,
} from "@/components/ui/programacion";
import { Space, Typography } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { TbInfoTriangleFilled } from "react-icons/tb";
const { Title } = Typography;
export default function ProgramacionBusConductor() {
  const [conductorIdToEdit, setConductorIdToEdit] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotAdmin, setIsNotAdmin] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  // useEffect(() => {
  //   if (session?.user?.rol !== "ADMIN") {
  //     setIsNotAdmin(true);
  //   }
  // }, [session, router]);

  if (isNotAdmin) {
    return (
      <AppLayout>
        <AppHead title="Administracion" />
        <Space
          direction="vertical"
          className="h-full w-full items-center justify-center gap-2 text-center"
        >
          <TbInfoTriangleFilled className="h-24 w-24 text-red-500 drop-shadow-md" />

          <Title level={5}>Página restringida para Administradores</Title>

          <Link
            className="flex items-center gap-1 text-red-500 underline hover:text-red-400 hover:underline hover:opacity-80"
            href="/dashboard"
          >
            <LuMoveLeft />
            Volver a la página principal
          </Link>
        </Space>
      </AppLayout>
    );
  }

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
