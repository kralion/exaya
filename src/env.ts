import { z } from "zod";

const server = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  API_RENIEC_TOKEN: z.string().min(1),
  API_RENIEC_URL: z.string().min(1),
  CLOUDINARY_API_SECRET: z.string().min(1),
});

const client = z.object({
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1),
  NEXT_PUBLIC_CLOUDINARY_API_KEY: z.string().min(1),
});

const merged = server.merge(client);

type MergedOutput = z.infer<typeof merged>;

const processEnv = {
  NODE_ENV: import.meta.env.NODE_ENV,
  NEXTAUTH_SECRET: import.meta.env.NEXTAUTH_SECRET,
  DATABASE_URL: import.meta.env.DATABASE_URL,
  API_RENIEC_TOKEN: import.meta.env.API_RENIEC_TOKEN,
  API_RENIEC_URL: import.meta.env.API_RENIEC_URL,
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: import.meta.env
    .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  NEXT_PUBLIC_CLOUDINARY_API_KEY: import.meta.env
    .NEXT_PUBLIC_CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: import.meta.env.CLOUDINARY_API_SECRET,
};

const parsed = merged.safeParse(processEnv);

if (!parsed.success) {
  console.error(
    "Invalid environment variables:",
    parsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables");
}

const env: MergedOutput = parsed.data;

export { env };
