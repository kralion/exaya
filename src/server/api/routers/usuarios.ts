import { usuarioSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const usuariosRouter = createTRPCRouter({
  getAllUsuarios: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.usuario.findMany();
  }),

  createUser: protectedProcedure
    .input(usuarioSchema)
    .mutation(({ input, ctx }) =>
      ctx.prisma.usuario.create({
        data: input,
      })
    ),

  deleteUser: publicProcedure
    .input(
      usuarioSchema.pick({
        id: true,
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.usuario.delete({
        where: { id: input.id },
      });
    }),
});
