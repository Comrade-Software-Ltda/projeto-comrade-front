import { SystemRoleModel } from 'src/app/core/models/system-role.model';

export interface SystemUserWebEntity {
  id?: string;
  name: string;
  email: string;
  registration: string;
  registerDate: Date;
}
