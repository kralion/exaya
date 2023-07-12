import { createContext, useContext, useState } from "react";
import type {
  EncomiendasContextProps,
  Encomienda,
} from "@/interfaces/interfaces";
import { encomiendasDEFAULT } from "@/data";
export const EncomiendasContext = createContext<EncomiendasContextProps>({
  encomiendas: encomiendasDEFAULT,
  handleAddEncomienda: () => void 0,
  handleDeleteEncomienda: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

export const EncomiendasContextProvider = ({ children }: Props) => {
  const [encomiendas, setEncomiendas] = useState<Encomienda[]>(
    encomiendasDEFAULT as Encomienda[]
  );

  const handleAddEncomienda = (encomienda: Encomienda) => {
    setEncomiendas([...encomiendas, encomienda]);
  };
  const handleDeleteEncomienda = (key: string) => {
    const newEncomiendas = encomiendas.filter(
      (encomienda) => encomienda.key !== key
    );
    setEncomiendas(newEncomiendas);
  };

  return (
    <EncomiendasContext.Provider
      value={{
        encomiendas,
        handleAddEncomienda,
        handleDeleteEncomienda,
      }}
    >
      {children}
    </EncomiendasContext.Provider>
  );
};

export function useEncomiendasContext() {
  const context = useContext(EncomiendasContext);
  if (!context) {
    throw new Error(
      "useEncomiendasContext debe estar dentro del proveedor EncomiendasContext"
    );
  }
  return context;
}
