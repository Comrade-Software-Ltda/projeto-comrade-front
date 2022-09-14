import { Mapper } from '../../../core/utils/bases/mapper';
import { RoleWebEntity } from './role-web-entity';
import { RoleModel } from 'src/app/core/models/role.model';

export class RoleWebRepositoryMapper extends Mapper<RoleWebEntity, RoleModel> {
  mapFrom(param: RoleWebEntity): RoleModel {
    return {
      id: param.id,
      name: param.name,
    };
  }

  mapTo(param: RoleModel): RoleWebEntity {
    return {
      id: param.id,
      name: param.name,

    };
  }
}
