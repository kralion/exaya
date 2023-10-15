import { useContext, createContext, useState } from "react";
import { boletosRouter } from "@/server/api/routers";

import type { IUsuario } from "@/interfaces";

type UsuarioContextType = {
  usuarios: IUsuario[];
  setUsuarios: (usuarios: IUsuario[]) => void;
  handleAddUsuario: (usuario: IUsuario) => void;
};

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

  const handleAddUsuario = (usuario: IUsuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <UsuarioContext.Provider
      value={{ usuarios, setUsuarios, handleAddUsuario }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export function useUsuario() {
  const context = useContext(UsuarioContext);
  if (context === undefined) {
    throw new Error(
      "useUsuario debe estar dentro del proveedor UsuarioContext"
    );
  }
  return context;
}
