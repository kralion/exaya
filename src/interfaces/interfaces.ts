export interface PasajesDataType {
  key: string;
  origen: string;
  destino: string;
  placaBus: string;
  horaSalida: string;
  precios: number[];
}
export interface Item {
  viajeId: number;
  ruta: string;
  bus: string;
  fechaSalida: string;
  horaSalida: string;
  estado: string;
}
export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}
