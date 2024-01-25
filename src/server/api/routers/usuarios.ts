import { usuarioSchema } from "@/schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const usuariosRouter = createTRPCRouter({
  getAllUsuarios: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.usuario.findMany({
      include: {
        cliente: true,
      },
    });
  }),
  getUsuarioByUsername: publicProcedure
    .input(
      usuarioSchema.pick({
        username: true,
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.usuario.findFirst({
        where: {
          username: input.username,
        },
        include: {
          cliente: true,
        },
      });
    }),

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
