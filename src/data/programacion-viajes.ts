import type { Item } from "@/interfaces/interfaces";
export const originData: Item[] = [];
for (let i = 0; i < 20; i++) {
  originData.push({
    viajeId: i,
    origen: `Huancayo ${i}`,
    destino: `Lima ${i}`,
    bus: `CV0-9T${i}`,
    fechaSalida: `2021-09-0${i}`,
    horaSalida: `0${i}:00`,
    estado: `Disponible`,
  });
}
