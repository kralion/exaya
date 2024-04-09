import { usuarioSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { hash } from "bcrypt";
import { z } from "zod";

export const usuariosRouter = createTRPCRouter({
  getAllUsuarios: publicProcedure.query(({ ctx }) => {
    const usuarios = ctx.prisma.usuario.findMany();
    return usuarios;
  }),
  getUsuarioById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const usuario = await ctx.prisma.usuario.findUnique({
          where: { id: input.id },
        });
        return {
          status: "success",
          response: usuario,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener el usuario",
        };
      }
    }),

  createUser: protectedProcedure
    .input(usuarioSchema)
    .mutation(async ({ input, ctx }) => {
      const hashedPassword = await hash(input.password, 10);
      try {
        await ctx.prisma.usuario.create({
          data: {
            ...input,
            password: hashedPassword,
          },
        });
        return {
          status: "success",
          message: "Usuario creado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al crear el usuario",
        };
      }
    }),

  deleteUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.usuario.delete({
          where: { id: input.id },
        });
        return {
          status: "success",
          message: "Usuario eliminado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al eliminar el usuario",
        };
      }
    }),

  updateUser: protectedProcedure
    .input(usuarioSchema.extend({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const hashedPassword = await hash(input.password, 10);
      try {
        await ctx.prisma.usuario.update({
          where: { id: input.id },
          data: {
            ...input,
            password: hashedPassword,
          },
        });
        return {
          status: "success",
          message: "Usuario actualizado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al actualizar el usuario",
        };
      }
    }),
});
