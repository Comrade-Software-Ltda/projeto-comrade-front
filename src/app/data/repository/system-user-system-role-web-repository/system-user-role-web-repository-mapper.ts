import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemUserSystemRoleWebEntity } from './system-user-system-role-web-entity';
import { SystemUserSystemRoleModel } from 'src/app/core/models/system-user-system-role.model';

export class SystemUserSystemRoleWebRepositoryMapper extends Mapper<
  SystemUserSystemRoleWebEntity,
  SystemUserSystemRoleModel
> {
  mapFrom(param: SystemUserSystemRoleWebEntity): SystemUserSystemRoleModel {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      registration: param.registration,
      registerDate: param.registerDate,
      systemRoles: param.systemRoles,
    };
  }

  mapTo(param: SystemUserSystemRoleModel): SystemUserSystemRoleWebEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      registration: param.registration,
      registerDate: param.registerDate,
      systemRoles: param.systemRoles,
    };
  }
}
