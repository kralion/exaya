export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/administracion",
    "/contable",
    "/programacion/*",
    "/encomiendas",
    "/pasajes",
    "/soporte",
  ],
};
