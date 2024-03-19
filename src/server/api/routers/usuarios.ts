import { usuarioSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { hash } from "bcrypt";

type Role = "USER" | "ADMIN" | "GUEST";

export const usuariosRouter = createTRPCRouter({
  getAllUsuarios: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.usuario.findMany();
  }),

  createUser: protectedProcedure
    .input(usuarioSchema.omit({ id: true }))
    .mutation(async ({ input, ctx }) => {
      const hashedPassword = await hash(input.password, 10);
      return ctx.prisma.usuario.create({
        data: {
          ...input,
          password: hashedPassword,
          rol: input.rol as Role,
        },
      });
    }),

  deleteUser: protectedProcedure
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
