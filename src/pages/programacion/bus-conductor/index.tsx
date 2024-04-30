import AppHead from "@/components/landing/head";
import AppLayout from "@/components/exaya/layout";
import {
  ConductorForm,
  BusForm,
  ConductoresInformacion,
  BusesInformacion,
} from "@/components/ui/programacion";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const { Title } = Typography;
export default function ProgramacionBusConductor() {
  const [conductorIdToEdit, setConductorIdToEdit] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.token.rol !== "ADMIN") {
      router.replace("/dashboard");
    }
  }, [session, router]);
  return (
    <AppLayout>
      <AppHead title="Programacion Bus Conductor" />
      <div className="flex gap-7">
        <div className="space-y-7">
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
        <div className="space-y-7">
          <Title level={4}>Buses</Title>
          <BusForm activator="Agregar Bus" />
          <BusesInformacion />
        </div>
      </div>
    </AppLayout>
  );
}
