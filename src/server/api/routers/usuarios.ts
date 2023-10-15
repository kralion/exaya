import { usuarioSchema } from "@/schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const usuariosRouter = createTRPCRouter({
  getAllUsuarios: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.usuario.findMany();
  }),
  postUser: publicProcedure.input(usuarioSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.usuario.create({
      data: input,
    });
  }),
});
