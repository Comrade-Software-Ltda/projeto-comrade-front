export interface SystemMenuModel {
  id?: string;
  menuId?: string;
  systemMenu?: SystemMenuModel;
  submenus: SystemMenuModel[];
  title: string;
  description: string;
  route: string;
}
