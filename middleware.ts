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
  matcher: [
    "/dashboard",
    "/contable",
    "/programacion/:path*",
    "/encomiendas",
    "/pasajes",
    "/soporte",
  ],
};
