import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/libs/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { data: rutas, error } = await supabase.from("Ruta").select("*");
      if (error) {
        throw error;
      }
      res.status(200).json(rutas);
    } catch (error) {
      console.error("Error al obtener las rutas:", error);
      res.status(500).json({ error: "Error al obtener las rutas" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
