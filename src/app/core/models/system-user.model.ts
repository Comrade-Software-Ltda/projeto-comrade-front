import { SystemRoleModel } from './system-role.model';

export interface SystemUserModel {
  id?: string;
  name: string;
  email: string;
  registration: string;
  registerDate: Date;
  systemRoles: SystemRoleModel[];
}
