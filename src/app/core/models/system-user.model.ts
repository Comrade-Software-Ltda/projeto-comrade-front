import { RoleModel } from "./role.model";

export interface SystemUserModel {
  id?: string;
  name: string;
  email: string;
  registration: string;
  registerDate: Date;
  roles:RoleModel[];
}
