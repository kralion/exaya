export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/administracion",
    "/contable",
    "/programacion/:path*",
    "/encomiendas",
    "/pasajes",
    "/soporte",
  ],
};
