import { z } from "zod";
import { env } from "@/env.mjs";
import { createTRPCRouter, publicProcedure } from "../trpc";

type ReniecResponse = {
  dni: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
};
export const clientesRouter = createTRPCRouter({
  validateDni: publicProcedure
    .input(
      z.object({
        dni: z.string().length(8, "El DNI debe tener 8 dígitos"),
      })
    )
    .query(async ({ input }) => {
      const { dni } = input;
      if (dni.length !== 8) {
        return { status: "error", help: "El DNI debe tener 8 dígitos" };
      }
      try {
        const response = await fetch(`${env.API_RENIEC_URL}${dni}`, {
          headers: {
            Authorization: `Bearer ${env.API_RENIEC_TOKEN}`,
          },
        });
        if (response.status === 200) {
          return {
            status: "success",
            help: "DNI Encontrado",
            data: (await response.json()) as ReniecResponse,
          };
        } else {
          return { status: "error", help: "DNI no existe" };
        }
      } catch (error) {
        return { status: "error", help: "Error al validar DNI" };
      }
    }),
});
