import { supabase } from "@/libs";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getTickets(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await supabase.from("tickets").select();
    if (error) {
      return res.status(500).json({ error: "Error fetching tickets" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
