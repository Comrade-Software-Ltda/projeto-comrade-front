import { SystemRoleModel } from './system-role.model';
import { SystemUserModel } from './system-user.model';

export interface SystemUserSystemRoleModel extends SystemUserModel {
  systemRoles: SystemRoleModel[];
}
