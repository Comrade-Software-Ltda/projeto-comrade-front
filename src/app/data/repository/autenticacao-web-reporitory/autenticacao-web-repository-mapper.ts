import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';
import { Mapper } from '../../../core/base/mapper';
import { AutenticacaoWebEntity } from './autenticacao-web-entity';

export class AutenticacaoWebRepositoryMapper extends Mapper<
  AutenticacaoWebEntity,
  AutenticacaoModel
> {
  mapFrom(param: AutenticacaoWebEntity): AutenticacaoModel {
    return {
      chave: param.chave,
      senha: param.senha,
    };
  }

  mapTo(param: AutenticacaoModel): AutenticacaoWebEntity {
    return {
      chave: param.chave,
      senha: param.senha,
    };
  }
}
