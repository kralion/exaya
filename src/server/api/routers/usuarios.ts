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
        const existingUsername = await ctx.prisma.usuario.findUnique({
          where: { username: input.username },
        });
        if (existingUsername) {
          return {
            status: "error",
            message: "El nombre de usuario ya existe",
          };
        }
        await ctx.prisma.usuario.create({
          data: {
            ...input,
            password: hashedPassword,
          },
        });
        return {
          status: "success",
          message:
            "Todos los detalles del usuario creado se pueden visualizar haciendo click sobre el nombre de usuario",
        };
      } catch (error) {
        return {
          status: "error",
          message:
            "Ocurrió un error al crear el usuario, por favor recargue la página e intente nuevamente",
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
          message:
            "Todos los datos relacionados con el usuario han sido eliminados",
        };
      } catch (error) {
        return {
          status: "error",
          message:
            "Ocurrió un error al eliminar el usuario, por favor recargue la página e intente nuevamente",
        };
      }
    }),

  updateUser: protectedProcedure
    .input(usuarioSchema.extend({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const existingUsername = await ctx.prisma.usuario.findUnique({
        where: { username: input.username },
      });
      if (existingUsername) {
        return {
          status: "error",
          message: "El nombre de usuario ya existe",
        };
      }
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
