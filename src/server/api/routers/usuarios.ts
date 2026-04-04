import { usuarioSchema } from "@/schemas";
import { createSupabaseAdminClient } from "@/server/supabase/admin-client";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { usernameToAuthEmail } from "@/shared/auth/auth-email";
import { hashSync } from "bcrypt";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

/** Prisma requires a password column; auth is enforced by Supabase only. */
const PLACEHOLDER_PASSWORD_HASH = hashSync("supabase-auth-only", 10);

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
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al obtener el usuario",
        });
      }
    }),

  createUser: protectedProcedure
    .input(usuarioSchema)
    .mutation(async ({ input, ctx }) => {
      const admin = createSupabaseAdminClient();
      const existingUsername = await ctx.prisma.usuario.findUnique({
        where: { username: input.username },
      });
      if (existingUsername) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "El nombre de usuario ya existe",
        });
      }

      const email = usernameToAuthEmail(input.username);
      const { data: created, error } = await admin.auth.admin.createUser({
        email,
        password: input.password,
        email_confirm: true,
      });

      if (error || !created.user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: error?.message ?? "No se pudo crear el usuario en auth",
        });
      }

      try {
        await ctx.prisma.usuario.create({
          data: {
            ...input,
            password: PLACEHOLDER_PASSWORD_HASH,
            supabaseUserId: created.user.id,
          },
        });
        return {
          status: "success",
          message: "Usuario Creado",
        };
      } catch {
        await admin.auth.admin.deleteUser(created.user.id);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al crear el usuario",
        });
      }
    }),

  disableUser: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const admin = createSupabaseAdminClient();
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
          message: "Error, no se puede deshabilitar a si mismo",
        });
      }

      if (user.supabaseUserId) {
        const { error } = await admin.auth.admin.updateUserById(
          user.supabaseUserId,
          { ban_duration: "876000h" }
        );
        if (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: error.message,
          });
        }
      }

      await ctx.prisma.usuario.update({
        where: { id: input.id },
        data: {
          isDeleted: true,
        },
      });
      return {
        status: "success",
        message: "Usuario deshabilitado",
      };
    }),

  deleteUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const admin = createSupabaseAdminClient();
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
          message: "No es posible borrar a un administrador",
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

      if (user.supabaseUserId) {
        const { error } = await admin.auth.admin.deleteUser(user.supabaseUserId);
        if (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: error.message,
          });
        }
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
      const admin = createSupabaseAdminClient();
      const existing = await ctx.prisma.usuario.findUnique({
        where: { id: input.id },
      });
      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "El usuario no existe",
        });
      }

      if (existing.username !== input.username && existing.supabaseUserId) {
        const { error } = await admin.auth.admin.updateUserById(
          existing.supabaseUserId,
          { email: usernameToAuthEmail(input.username) }
        );
        if (error) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: error.message,
          });
        }
      }

      if (input.password && existing.supabaseUserId) {
        const { error } = await admin.auth.admin.updateUserById(
          existing.supabaseUserId,
          { password: input.password }
        );
        if (error) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: error.message,
          });
        }
      }

      try {
        const { id, password: _password, ...rest } = input;
        await ctx.prisma.usuario.update({
          where: { id },
          data: {
            ...rest,
            password: PLACEHOLDER_PASSWORD_HASH,
          },
        });
        return {
          status: "success",
          message: "Usuario actualizado exitosamente",
        };
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al actualizar el usuario",
        });
      }
    }),
});
