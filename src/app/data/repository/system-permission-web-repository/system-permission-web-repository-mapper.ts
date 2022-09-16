import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemPermissionWebEntity } from './system-permission-web-entity';
import { SystemPermissionModel } from 'src/app/core/models/system-permission.model';

export class SystemPermissionWebRepositoryMapper extends Mapper<SystemPermissionWebEntity, SystemPermissionModel> {
  mapFrom(param: SystemPermissionWebEntity): SystemPermissionModel {
    return {
      id: param.id,
      name: param.name,
      tag: param.tag,
 
    };
  }

  mapTo(param: SystemPermissionModel): SystemPermissionWebEntity {
    return {
      id: param.id,
      name: param.name,
      tag: param.tag,
 
    };
  }
}
