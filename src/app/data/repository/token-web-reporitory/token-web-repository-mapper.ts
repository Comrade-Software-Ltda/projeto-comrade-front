import { TokenModel } from 'src/app/core/models/token.model';
import { Mapper } from '../../../core/utils/bases/mapper';
import { TokenWebEntity } from './token-web-entity';

export class TokenWebRepositoryMapper extends Mapper<TokenWebEntity, TokenModel> {
  mapFrom(param: TokenWebEntity): TokenModel {
    return {
      token: param.token,
    };
  }

  mapTo(param: TokenModel): TokenWebEntity {
    return {
      token: param.token,
    };
  }
}
