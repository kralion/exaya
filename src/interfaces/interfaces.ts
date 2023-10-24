import type { ColumnProps } from "antd/es/table";
import type { IEncomienda } from "./encomienda";

export interface Item {
  viajeId: number;
  origen: string;
  destino: string;
  bus: string;
  fecha: string;
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
  encomiendas: IEncomienda[];
  setEncomiendas: React.Dispatch<React.SetStateAction<IEncomienda[]>>;
}

export interface TableColumnPropsOption {
  label: string;
  value: any;
}
export interface EncomiendaTableColumnProps<T> extends ColumnProps<T> {
  options?: TableColumnPropsOption[];
}
