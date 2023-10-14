import type { NextApiRequest, NextApiResponse } from "next";
import { getTickets } from "./handler";

export default function ticketsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return getTickets(req, res);
    default:
      return res.status(405).end(`Method Not Allowed`);
  }
}
