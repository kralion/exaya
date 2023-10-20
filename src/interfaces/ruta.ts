export interface IRuta {
  id: string;
  ciudadOrigen: string;
  ciudadDestino: string;
  terminalOrigen: string;
  terminalDestino: string;
  duracionEstimada?: number;
}
