import { AuthenticationModel } from 'src/app/core/domain/authentication.model';
import { Mapper } from '../../../core/base/mapper';
import { AuthenticationWebEntity } from './authentication-web-entity';

export class AuthenticationWebRepositoryMapper extends Mapper<
  AuthenticationWebEntity,
  AuthenticationModel
> {
  mapFrom(param: AuthenticationWebEntity): AuthenticationModel {
    return {
      key: param.key,
      password: param.password,
    };
  }

  mapTo(param: AuthenticationModel): AuthenticationWebEntity {
    return {
      key: param.key,
      password: param.password,
    };
  }
}
