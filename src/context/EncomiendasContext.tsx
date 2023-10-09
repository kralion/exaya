import { createContext, useContext, useState } from "react";
import type { EncomiendasContextProps, IEncomienda } from "@/interfaces";
import { encomiendasRegistradas as INITIAL_ENCOMIENDAS } from "@/data";
export const EncomiendasContext = createContext<EncomiendasContextProps>({
  encomiendasRegistradas: INITIAL_ENCOMIENDAS as IEncomienda[],
  handleAddEncomienda: () => void 0,
  handleDeleteEncomienda: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

export const EncomiendasContextProvider = ({ children }: Props) => {
  const [encomiendasRegistradas, setEncomiendasRegistradas] = useState<
    IEncomienda[]
  >(INITIAL_ENCOMIENDAS as IEncomienda[]);

  const handleAddEncomienda = (encomienda: IEncomienda) => {
    setEncomiendasRegistradas([...encomiendasRegistradas, encomienda]);
  };
  const handleDeleteEncomienda = (key: string) => {
    const newEncomienda = encomiendasRegistradas.filter(
      (encomienda) => encomienda.key !== key
    );
    setEncomiendasRegistradas(newEncomienda);
  };

  return (
    <EncomiendasContext.Provider
      value={{
        encomiendasRegistradas,
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
