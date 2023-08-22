import { client } from "@/libs";
import { supabase } from "@/libs";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getTickets(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dataCached = await client.get("boletos");
    if (dataCached) {
      return res.status(200).json(JSON.parse(dataCached));
    }
    const { data, error } = await supabase.from("boletos").select();
    if (error) {
      return res.status(500).json({ error: "Error fetching boletos" });
    }
    await client.set("boletos", JSON.stringify(data));
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error fetching boletos" });
  }
}
