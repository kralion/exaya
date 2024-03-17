import type { IBus } from "@/interfaces";
import { v2 as cloudinary } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: "diaqourr9",
  api_key: "712722267327564",
  api_secret: "SDNZRMxkdsQ2rkIWGAK8HYCPOVM",
});

export default async function uploadHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as IBus;
  const image = data.foto;

  if (!image) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const bytes: ArrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "buses",
        },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      )
      .end(buffer);
  });

  return NextResponse.json({ message: "Image uploaded" });
}
