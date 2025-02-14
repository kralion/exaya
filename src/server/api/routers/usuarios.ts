import { usuarioSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { hash } from "bcrypt";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const usuariosRouter = createTRPCRouter({
  getAllUsuarios: publicProcedure.query(({ ctx }) => {
    const usuarios = ctx.prisma.usuario.findMany({
      include: { sede: true },
    });
    return usuarios;
  }),
  getUsuarioById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const usuario = await ctx.prisma.usuario.findUnique({
          where: { id: input.id },
          include: { sede: true },
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
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "El nombre de usuario ya existe",
          });
        }
        await ctx.prisma.usuario.create({
          data: {
            ...input,
            password: hashedPassword,
          },
        });
        return {
          status: "success",
          message: "Usuario Creado",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al crear el usuario",
        });
      }
    }),

  disableUser: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.usuario.findUnique({
        where: { id: input.id },
      });

      const currentUser = await ctx.prisma.usuario.findUnique({
        where: { id: ctx.session.user.id },
      });
      if (currentUser?.rol !== "ADMIN") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Solo los administradores pueden deshabilitar usuarios",
        });
      }

      if (!user)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "El usuario no existe",
        });

      if (user.rol === "ADMIN") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "No es posible deshabilitar a un usuario administrador",
        });
      }

      const sessionUserId = ctx.session.user.id;
      if (sessionUserId === user.id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "No es posible deshabilitar el usuario con el que se ha iniciado sesión",
        });
      }

      await ctx.prisma.usuario.update({
        where: { id: input.id },
        data: {
          isDeleted: false,
        },
      });
      return {
        status: "success",
        message: "Usuario deshabilitado exitosamente",
      };
    }),

  deleteUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.usuario.findUnique({
        where: { id: input.id },
      });

      const currentUser = await ctx.prisma.usuario.findUnique({
        where: { id: ctx.session.user.id },
      });
      if (currentUser?.rol !== "ADMIN") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Solo los administradores pueden eliminar usuarios",
        });
      }

      if (!user)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "El usuario no existe",
        });

      if (user.rol === "ADMIN") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "No es posible borrar a un usuario administrador",
        });
      }

      const sessionUserId = ctx.session.user.id;
      if (sessionUserId === user.id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "No es posible borrar el usuario con el que se ha iniciado sesión",
        });
      }

      const boletos = await ctx.prisma.boleto.findMany({
        where: { usuarioId: input.id },
      });

      if (boletos.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "No es posible borrar este usuario, tiene actividad registrada en el sistema",
        });
      }

      await ctx.prisma.usuario.delete({
        where: { id: input.id },
      });
      return {
        status: "success",
        message: "Usuario eliminado exitosamente",
      };
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
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al actualizar el usuario",
        });
      }
    }),
});
