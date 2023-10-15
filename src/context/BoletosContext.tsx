// context for Boletos CRUD

import React, { createContext, useState, useEffect } from "react";
import { api } from "@/utils/api";
import type { IBoleto } from "@/interfaces";
import { boletosRouter } from "@/server/api/routers";

interface BoletosContextProps {
  boletos: IBoleto[];
  setBoletos: React.Dispatch<React.SetStateAction<IBoleto[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddBoleto: (boleto: IBoleto) => void;
}

export const BoletosContext = createContext<BoletosContextProps>({
  boletos: [],
  setBoletos: () => null,
  loading: false,
  setLoading: () => null,
  error: false,
  setError: () => null,
  handleAddBoleto: () => null,
});

type BoletosProviderProps = {
  children: React.ReactNode;
};

export const BoletosProvider = ({ children }: BoletosProviderProps) => {
  const [boletos, setBoletos] = useState<IBoleto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleAddBoleto = async (boleto: IBoleto) => {
    try {
      setLoading(true);
      setError(false);

      // Make the request to create a boleto
      const newBoleto = await api.boletos.createBoletos.useQuery(boleto);

      // Update the boletos state
      setBoletos((prevBoletos) => [...prevBoletos, newBoleto]);

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <BoletosContext.Provider
      value={{
        boletos,
        setBoletos,
        loading,
        setLoading,
        error,
        handleAddBoleto,
        setError,
      }}
    >
      {children}
    </BoletosContext.Provider>
  );
};

export const useBoletosContext = () => {
  const context = React.useContext(BoletosContext);
  if (!context) {
    throw new Error(
      "useBoletosContext debe estar dentro del proveedor BoletosContext"
    );
  }
  return context;
};
