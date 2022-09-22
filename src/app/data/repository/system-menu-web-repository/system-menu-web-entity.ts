export interface SystemMenuWebEntity {
  id?: string;
  menuId?: string;
  systemMenu?: SystemMenuWebEntity;
  submenus: SystemMenuWebEntity[];
  title: string;
  icon: string;
  description: string;
  route: string;
}
