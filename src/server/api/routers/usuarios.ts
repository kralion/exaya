import { usuarioSchema } from "@/schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const usuariosRouter = createTRPCRouter({
  getAllUsuarios: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.usuario.findMany();
  }),
  createUser: publicProcedure
    .input(usuarioSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.usuario.create({
        data: input,
      });
    }),
  deleteUser: publicProcedure
    .input(usuarioSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.usuario.delete({
        where: { id: input.id },
      });
    }),
  updateUser: publicProcedure
    .input(usuarioSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.usuario.update({
        where: { id: input.id },
        data: input,
      });
    }),
});
