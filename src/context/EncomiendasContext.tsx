import { createContext, useContext } from "react";
import type { EncomiendasContextProps } from "@/interfaces";

import { api } from "@/utils/api";
import { useNotification } from "./NotificationContext";
export const EncomiendasContext = createContext<EncomiendasContextProps>({
  encomiendas: [],
  handleDeleteEncomienda: () => null,
});

type Props = {
  children: React.ReactNode;
};

export const EncomiendasContextProvider = ({ children }: Props) => {
  const { openNotification } = useNotification();
  const { data: encomiendas } = api.encomiendas.getAllEncomiendas.useQuery();
  const deleteEncomiendaMutation =
    api.encomiendas.deleteEncomienda.useMutation();

  async function handleDeleteEncomienda(codigo: string) {
    try {
      await deleteEncomiendaMutation.mutateAsync({
        codigo,
      });
      openNotification({
        message: "Encomienda Eliminada",
        description: "La encomienda ha sido eliminada con éxito",
        type: "success",
        placement: "topRight",
      });
    } catch (error) {
      openNotification({
        message: "Error al eliminar la encomienda",
        description: "La encomienda no ha podido ser eliminada",
        type: "error",
        placement: "topRight",
      });
    }
  }

  return (
    <EncomiendasContext.Provider
      value={{
        encomiendas,
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
