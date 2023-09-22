// context for Boletos CRUD

import React, { createContext, useState, useEffect } from "react";
import { api } from "@/utils/api";
import type { IBoleto } from "@/interfaces";

interface BoletosContextProps {
  boletos: IBoleto[];
  setBoletos: React.Dispatch<React.SetStateAction<IBoleto[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BoletosContext = createContext<BoletosContextProps>({
  boletos: [],
  setBoletos: () => null,
  loading: false,
  setLoading: () => null,
  error: false,
  setError: () => null,
});

type BoletosProviderProps = {
  children: React.ReactNode;
};

export const BoletosProvider = ({ children }: BoletosProviderProps) => {
  const [boletos, setBoletos] = useState<IBoleto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBoletos = async () => {
      setLoading(true);
      try {
        const { data } = await api.get("/boletos");
        setBoletos(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchBoletos();
  }, []);

  return (
    <BoletosContext.Provider
      value={{ boletos, setBoletos, loading, setLoading, error, setError }}
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
