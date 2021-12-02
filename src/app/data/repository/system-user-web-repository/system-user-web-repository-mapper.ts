import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemUserWebEntity } from './system-user-web-entity';
import { SystemUserModel } from 'src/app/core/models/system-user.model';

export class SystemUserWebRepositoryMapper extends Mapper<SystemUserWebEntity, SystemUserModel> {
  mapFrom(param: SystemUserWebEntity): SystemUserModel {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      password: param.password,
      registration: param.registration,
      registerDate: new Date(param.registerDate),
    };
  }

  mapTo(param: SystemUserModel): SystemUserWebEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      password: param.password,
      registration: param.registration,
      registerDate: param.registerDate,
    };
  }
}
