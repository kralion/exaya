import { supabase } from "@/libs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { data: salidas, error } = await supabase
        .from("viajes")
        .select(`id_viaje, id_ruta:rutas (ciudad_origen, ciudad_destino)`);
      if (error) {
        throw error;
      }
      res.status(200).json(salidas);
    } catch (error) {
      console.error("Error al obtener los viajes:", error);
      res.status(500).json({ error: "Error al obtener los viajes" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
