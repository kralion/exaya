import AdministracionSteps from "./components/steps";
import KpiGraphs from "./components/kpi-graphs";
import { UsuarioForm } from "./components/usuario-form";
import UsuariosTable from "./components/usuarios-table";
import { api } from "@/utils/api";
import { Space, Typography } from "antd";
import { useMemo, useState } from "react";

export function Administracion() {
  const [usuarioIdToEdit, setUsuarioIdToEdit] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: boletos, isLoading } = api.boletos.getAllBoletos.useQuery();

  const { totalIncomeCurrentViaje, totalVendidos, totalAsientos } =
    useMemo(() => {
      const paid = boletos?.filter((b) => b.estado === "PAGADO") ?? [];
      const income = paid.reduce((sum, b) => sum + b.precio, 0);
      return {
        totalIncomeCurrentViaje: income,
        totalVendidos: paid.length,
        totalAsientos: 40,
      };
    }, [boletos]);

  return (
    <Space direction="vertical" size="large" className="w-full">
      <Typography.Title level={3}>Administración</Typography.Title>
      <UsuarioForm
        activator="Agregar usuario"
        usuarioIdToEdit={usuarioIdToEdit}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <UsuariosTable
        setUsuarioIdToEdit={setUsuarioIdToEdit}
        setIsModalOpen={setIsModalOpen}
      />
      <AdministracionSteps
        totalVendidos={totalVendidos}
        totalAsientos={totalAsientos}
        totalIncomeCurrentViaje={totalIncomeCurrentViaje}
        isLoading={isLoading}
      />
      <KpiGraphs
        totalIncome={totalIncomeCurrentViaje}
        totalAsientos={totalAsientos}
        totalVendidos={totalVendidos}
        isLoading={isLoading}
      />
    </Space>
  );
}
