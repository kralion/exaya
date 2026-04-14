import { prisma } from "@/server/db";
import { authEmailToUsername } from "@/shared/auth/auth-email";
import type { AppSession } from "@/shared/auth/session";
import { createSupabaseServerClient } from "@/server/supabase/server-client";
import type { Rol } from "@/types/auth";

export type { AppSession };

export async function getAppSession(
  req: Request,
  resHeaders: Headers
): Promise<AppSession | null> {
  const supabase = createSupabaseServerClient(req, resHeaders);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  let usuario = await prisma.usuario.findFirst({
    where: { supabaseUserId: user.id },
  });

  if (!usuario && user.email) {
    const username = authEmailToUsername(user.email);
    const byUsername = await prisma.usuario.findUnique({
      where: { username },
    });
    if (byUsername) {
      usuario = await prisma.usuario.update({
        where: { id: byUsername.id },
        data: { supabaseUserId: user.id },
      });
    }
  }

  if (!usuario || usuario.isDeleted) {
    return null;
  }

  return {
    user: {
      id: usuario.id,
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      rol: usuario.rol as Rol,
      sedeId: usuario.sedeId,
      foto: usuario.foto,
    },
  };
}
