import { v2 as cloudinary } from "cloudinary";
import { env } from "@/env.mjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { paramsToSign } = (await req.body) as {
    paramsToSign: Record<string, string>;
  };

  try {
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      env.CLOUDINARY_API_SECRET
    );
    res.status(200).json({
      signature,
    });
  } catch (error: unknown) {
    const { message } = error as Error;
    res.status(500).json({
      error: message,
    });
  }
}
