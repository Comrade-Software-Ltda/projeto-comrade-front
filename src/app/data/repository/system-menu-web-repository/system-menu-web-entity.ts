export interface SystemMenuWebEntity {
  id?: string;
  menuId?: string;
  systemMenu?: SystemMenuWebEntity;
  submenus: SystemMenuWebEntity[];
  text: string;
  icon: string;
  description: string;
  route: string;
}
