import { z } from "zod";

/**
 * Server-side environment variables (not exposed to client).
 */
const server = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === "production"
      ? z.string().min(1)
      : z.string().min(1).optional(),
  DATABASE_URL: z.string().min(1),
  API_RENIEC_TOKEN: z.string().min(1),
  API_RENIEC_URL: z.string().min(1),
  CLOUDINARY_API_SECRET: z.string().min(1),
});

/**
 * Client-side environment variables. Use VITE_ prefix for Vite.
 */
const client = z.object({
  VITE_APP_URL: z.string().url().optional(),
  VITE_CLOUDINARY_CLOUD_NAME: z.string().min(1).optional(),
  VITE_CLOUDINARY_API_KEY: z.string().min(1).optional(),
});

const processEnv = {
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  API_RENIEC_TOKEN: process.env.API_RENIEC_TOKEN,
  API_RENIEC_URL: process.env.API_RENIEC_URL,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  VITE_APP_URL: process.env.VITE_APP_URL,
  VITE_CLOUDINARY_CLOUD_NAME: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  VITE_CLOUDINARY_API_KEY: process.env.VITE_CLOUDINARY_API_KEY,
};

const merged = server.merge(client);

let env = /** @type {z.infer<typeof merged>} */ (process.env);

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === "undefined";

  const parsed = /** @type {z.SafeParseReturnType<z.input<typeof merged>, z.infer<typeof merged>>} */ (
    isServer
      ? merged.safeParse(processEnv)
      : client.safeParse(processEnv)
  );

  if (parsed.success === false) {
    console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid environment variables");
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;
      if (!isServer && !prop.startsWith("VITE_"))
        throw new Error(
          process.env.NODE_ENV === "production"
            ? "❌ Attempted to access a server-side environment variable on the client"
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`
        );
      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };
