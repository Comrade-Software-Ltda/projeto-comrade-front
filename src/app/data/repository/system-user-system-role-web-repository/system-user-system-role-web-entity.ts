import { SystemRoleWebEntity } from '../system-role-web-repository/system-role-web-entity';
import { SystemUserWebEntity } from '../system-user-web-repository/system-user-web-entity';

export interface SystemUserSystemRoleWebEntity extends SystemUserWebEntity {
  systemRoles: SystemRoleWebEntity[];
}
