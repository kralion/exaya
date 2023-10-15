import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/libs/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { data: boletos, error } = await supabase
        .from("boleto")
        .select("*");
      if (error) {
        throw error;
      }
      res.status(200).json(boletos);
    } catch (error) {
      console.error("Error al obtener los boletos:", error);
      res.status(500).json({ error: "Error al obtener los boletos" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
