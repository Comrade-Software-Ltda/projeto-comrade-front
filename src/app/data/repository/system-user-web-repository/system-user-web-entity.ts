import { RoleModel } from "src/app/core/models/role.model";

export interface SystemUserWebEntity {
  id?: string;
  name: string;
  email: string;
  registration: string;
  registerDate: Date;
  roles:RoleModel[];
}
