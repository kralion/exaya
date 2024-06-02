import { withAuth } from "next-auth/middleware";
const restrictedPages = ["/contable", "/administracion"];

export default withAuth({
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
});
export const config = {
  matcher: (path: string, isUser: boolean) => {
    const isRestrictedPage = [
      "/dashboard",
      "/contable",
      "/programacion/:path*",
      "/encomiendas",
      "/pasajes",
      "/soporte",
    ].includes(path);

    if (path === "/encomiendas/rastreo") {
      return true;
    }

    if (isRestrictedPage && isUser) {
      return false;
    }

    return true;
  },
};
