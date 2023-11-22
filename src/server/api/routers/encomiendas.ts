import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { encomiendaSchema } from "@/schemas";

export const encomiendasRouter = createTRPCRouter({
  getAllEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany({
      include: {
        remitente: true,
        destinatario: true,
        viaje: {
          include: {
            ruta: true,
            bus: true,
          },
        },
      },
    });
  }),
  deleteEncomienda: publicProcedure
    .input(
      encomiendaSchema.pick({
        codigo: true,
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.encomienda.delete({
        where: { codigo: input.codigo },
      });
    }),
});
