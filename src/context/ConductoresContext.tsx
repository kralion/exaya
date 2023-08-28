import { createContext, useContext, useState } from "react";
import type { ConductorContextProps, IConductor } from "@/interfaces";
import { conductores as INITIAL_DRIVERS } from "@/data";
export const ConductoresContext = createContext<ConductorContextProps>({
  conductoresRegistrados: INITIAL_DRIVERS as IConductor[],
  handleAddConductor: () => {
    throw new Error("handleAddConductor sin inicializar");
  },
  handleDeleteConductor: () => {
    throw new Error("handleDeleteConductor sin inicializar");
  },
  handleUpdateConductor: () => {
    throw new Error("handleUpdateConductor sin inicializar");
  },
});

type Props = {
  children: React.ReactNode;
};

export const EncomiendasContextProvider = ({ children }: Props) => {
  const [conductoresRegistrados, setConductoresRegistrados] =
    useState<IConductor[]>(INITIAL_DRIVERS);

  const handleAddEncomienda = (conductor: IConductor) => {
    setConductoresRegistrados([...conductoresRegistrados, conductor]);
  };
  const handleDeleteEncomienda = (key: string) => {
    const newConductor: IConductor = conductoresRegistrados.filter(
      (conductor) => conductor.id !== key
    );
    setConductoresRegistrados(newConductor);
  };

  return (
    <ConductoresContext.Provider
      value={{
        conductores: conductoresRegistrados,
        handleAddEncomienda,
        handleDeleteEncomienda,
      }}
    >
      {children}
    </ConductoresContext.Provider>
  );
};

export function useConductoresContext() {
  const context = useContext(ConductoresContext);
  if (!context) {
    throw new Error(
      "useConductoresContext debe estar dentro del proveedor EncomiendasContext"
    );
  }
  return context;
}
