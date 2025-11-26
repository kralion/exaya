import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/dashboard",
    "/encomiendas",
    "/programacion/:path*",
    "/contable",
    "/soporte",
    "/administracion",
    "/pasajes",
  ],
};
