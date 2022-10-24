export interface SystemMenuModel {
  id?: string;
  menuId?: string;
  systemMenu?: SystemMenuModel;
  submenus: SystemMenuModel[];
  text: string;
  icon: string;
  description: string;
  route: string;
}
