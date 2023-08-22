export interface IRuta {
  id: number;
  ciudad_origen: string;
  ciudad_destino: string;
  duracion_estimada?: number | null;
  tarifas?: number[];
}
