export interface MenuModel {
  icon: string;
  label: string;
  link: string;
  transacoes: string[];
  children?: MenuModel[];
  show?: boolean;
  collapsed?: boolean;
}
