import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: [
    "/dashboard",
    "/contable",
    "/programacion/:path*",
    "/encomiendas",
    "/pasajes",
    "/soporte",
  ],
};

const restrictedPages = ["/contable", "/administracion"];

export default withAuth(
  async function middleware(req: NextRequest) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const isRestrictedPage = restrictedPages.includes(req.nextUrl.pathname);
    const isAdmin = session?.rol === "ADMIN";

    if (isRestrictedPage && !isAdmin) {
      return NextResponse.redirect("/dashboard");
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const isRestrictedPage = restrictedPages.includes(req.nextUrl.pathname);
        const isUser = token?.rol === "USER";

        if (isRestrictedPage && isUser) {
          return false;
        }

        return true;
      },
    },
  }
);
