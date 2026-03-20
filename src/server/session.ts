/**
 * Custom session handling for TanStack Start.
 * Replaces NextAuth - uses JWT in HTTP-only cookie.
 */
import { SignJWT, jwtVerify } from "jose";
import { compare } from "bcrypt";
import { prisma } from "@/server/db";
import { env } from "@/env.mjs";
import type { Rol } from "@/types/auth";
import type { Session, SessionUser } from "@/types/session";

const COOKIE_NAME = "exaya_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret() {
  const secret = env.NEXTAUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is required for auth");
  return new TextEncoder().encode(secret);
}

export async function authorizeUser(
  username: string,
  password: string
): Promise<SessionUser | null> {
  const userFound = await prisma.usuario.findUnique({
    where: { username },
  });
  if (!userFound) return null;

  const userDisabled = await prisma.usuario.findUnique({
    where: { username, isDeleted: true },
  });
  if (userDisabled) return null;

  const matchPassword = await compare(password, userFound.password);
  if (!matchPassword) return null;

  return {
    id: userFound.id,
    nombres: userFound.nombres,
    apellidos: userFound.apellidos,
    rol: userFound.rol as Rol,
    sedeId: userFound.sedeId,
    foto: userFound.foto,
    name: `${userFound.nombres} ${userFound.apellidos}`,
  };
}

export async function createSessionToken(user: SessionUser): Promise<string> {
  const expires = new Date(Date.now() + COOKIE_MAX_AGE * 1000);
  const token = await new SignJWT({
    id: user.id,
    nombres: user.nombres,
    apellidos: user.apellidos,
    rol: user.rol,
    sedeId: user.sedeId,
    foto: user.foto,
    exp: Math.floor(expires.getTime() / 1000),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(getSecret());

  return token;
}

export async function getSessionFromRequest(
  request: Request
): Promise<Session | null> {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;

  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [key, ...v] = c.trim().split("=");
      return [key, v.join("=").trim()];
    })
  );

  const token = cookies[COOKIE_NAME];
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    const exp = payload.exp as number;
    if (exp * 1000 < Date.now()) return null;

    return {
      user: {
        id: payload.id as string,
        nombres: payload.nombres as string,
        apellidos: payload.apellidos as string,
        rol: payload.rol as Rol,
        sedeId: payload.sedeId as string,
        foto: (payload.foto as string) ?? "",
        name: `${payload.nombres} ${payload.apellidos}`,
      },
      expires: new Date(exp * 1000).toISOString(),
    };
  } catch {
    return null;
  }
}

export function createSessionCookie(token: string): string {
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`;
}

export function createSessionClearCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
