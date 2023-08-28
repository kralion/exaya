import type { ColumnProps } from "antd/es/table";
export interface Pasajes {
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
  title: string;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}
export interface EncomiendasProps {
  encomiendas: Encomienda[];
  setEncomiendas: React.Dispatch<React.SetStateAction<Encomienda[]>>;
}
export interface Encomienda {
  key: string;
  nombreRemitente: string;
  nombreReceptor: string;
  telefonoRemitente: number;
  telefonoReceptor: number;
  destino: string;
  precio: number;
  fechaEnvio: string;
  contenido: string;
  password: string;
  descripcion: string;
  claveRastreo?: string;
  estado: "Pagado" | "Por pagar";
}
export interface EncomiendasContextProps {
  encomiendasRegistradas: Encomienda[];
  handleAddEncomienda: (encomienda: Encomienda) => void;
  handleDeleteEncomienda: (key: string) => void;
}
export interface TableColumnPropsOption {
  label: string;
  value: any;
}
export interface EncomiendaTableColumnProps<T> extends ColumnProps<T> {
  options?: TableColumnPropsOption[];
}
