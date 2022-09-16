export interface SystemMenuWebEntity {
  id?: string;
  menuId?: string;
  systemMenu?: SystemMenuWebEntity;
  submenus: SystemMenuWebEntity[];
  title: string;
  description: string;
  route: string;
}
