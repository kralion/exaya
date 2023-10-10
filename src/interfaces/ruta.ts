export interface IRuta {
  id: number;
  ciudadOrigen: string;
  ciudadDestino: string;
  duracionEstimada?: number | null;
  tarifas?: number[];
}
