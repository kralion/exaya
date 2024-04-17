export interface IBoleto {
  asiento: number;
  pasajeroDni: string;
  pasajeroNombres: string;
  pasajeroApellidos: string;
  codigo: string;
  fechaRegistro: Date;
  equipaje: string;
  id: string;
  precio: number;
  telefonoCliente: string;
  viajeId: string;
}
