import { client } from "@/libs";
import { supabase } from "@/libs";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getTickets(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dataCached = await client.get("tickets");
    if (dataCached) {
      return res.status(200).json(JSON.parse(dataCached));
    }
    const { data, error } = await supabase.from("tickets").select();
    if (error) {
      return res.status(500).json({ error: "Error fetching tickets" });
    }
    await client.set("tickets", JSON.stringify(data));
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error fetching tickets" });
  }
}
