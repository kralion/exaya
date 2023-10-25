import { createContext, useContext, useState } from "react";
import type { ConductorContextProps, IConductor } from "@/interfaces";
import { conductores as INITIAL_DRIVERS } from "@/data";
export const ConductorContext = createContext<ConductorContextProps>({
  conductoresRegistrados: INITIAL_DRIVERS as IConductor[],
  handleAddConductor: () => void 0,
  handleDeleteConductor: () => void 0,
  handleUpdateConductor: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

export const ConductorContextProvider = ({ children }: Props) => {
  const [conductoresRegistrados, setConductoresRegistrados] =
    useState<IConductor[]>(INITIAL_DRIVERS);
  const handleAddConductor = (conductor: IConductor) => {
    setConductoresRegistrados([...conductoresRegistrados, conductor]);
  };
  const handleDeleteConductor = (key: number) => {
    conductoresRegistrados.filter((conductor) => conductor.id !== key);
  };
  const handleUpdateConductor = (conductor: IConductor) => {
    const newConductor = conductoresRegistrados.filter(
      (conductor) => conductor.id !== conductor.id
    );
    setConductoresRegistrados([...newConductor, conductor]);
  };

  return (
    <ConductorContext.Provider
      value={{
        conductoresRegistrados: conductoresRegistrados,
        handleAddConductor,
        handleDeleteConductor,
        handleUpdateConductor,
      }}
    >
      {children}
    </ConductorContext.Provider>
  );
};

export function useConductorContext() {
  const context = useContext(ConductorContext);
  if (!context) {
    throw new Error(
      "useConductoresContext debe estar dentro del proveedor EncomiendasContext"
    );
  }
  return context;
}
