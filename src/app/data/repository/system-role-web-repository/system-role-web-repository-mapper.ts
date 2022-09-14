import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemRoleWebEntity } from './system-role-web-entity';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
export class SystemRoleWebRepositoryMapper extends Mapper<SystemRoleWebEntity, SystemRoleModel> {
  mapFrom(param: SystemRoleWebEntity): SystemRoleModel {
    return {
      id: param.id,
      name: param.name,
    };
  }

  mapTo(param: SystemRoleModel): SystemRoleWebEntity {
    return {
      id: param.id,
      name: param.name,
    };
  }
}
