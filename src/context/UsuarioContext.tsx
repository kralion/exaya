import { useContext, createContext, useState } from "react";

import type { IPersona, IUsuario } from "@/interfaces";
import { api } from "@/utils/api";

type UsuarioContextType = {
  usuarios: IUsuario[];
  setUsuarios: (usuarios: IUsuario[]) => void;
  handleAddUsuario: (usuario: IUsuario) => void;
  usuario: IPersona;
};

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
  const usuario = api.personas.getPersonaById.useQuery({ id: 1 });

  const handleAddUsuario = (usuario: IUsuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <UsuarioContext.Provider
      value={{ usuarios, setUsuarios, handleAddUsuario, usuario }}
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
