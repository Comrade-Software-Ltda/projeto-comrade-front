import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemUserSystemRoleManageWebEntity } from './system-user-system-role-manage-web-entity';
import { SystemUserSystemRoleManageModel } from 'src/app/core/models/system-user-system-role-manage.model';
export class SystemUserSystemRoleManageWebRepositoryMapper extends Mapper<
  SystemUserSystemRoleManageWebEntity,
  SystemUserSystemRoleManageModel
> {
  mapFrom(param: SystemUserSystemRoleManageWebEntity): SystemUserSystemRoleManageModel {
    return {
      id: param.id,
      systemRoles: param.systemRoles,
    };
  }

  mapTo(param: SystemUserSystemRoleManageModel): SystemUserSystemRoleManageWebEntity {
    return {
      id: param.id,
      systemRoles: param.systemRoles,
    };
  }
}
