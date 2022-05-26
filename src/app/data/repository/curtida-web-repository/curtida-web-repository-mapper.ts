import { Mapper } from '../../../core/utils/bases/mapper';
import { CurtidaWebEntity } from './curtida-web-entity';
import { CurtidaModel } from 'src/app/core/models/curtida.model';

export class CurtidaWebRepositoryMapper extends Mapper<CurtidaWebEntity, CurtidaModel> {
  mapFrom(param: CurtidaWebEntity): CurtidaModel {
    return {
      isCurtida: param.isCurtida,
      usuarioAlvoId: param.usuarioAlvoId,
      usuarioId: param.usuarioId,
    };
  }

  mapTo(param: CurtidaModel): CurtidaWebEntity {
    return {
      isCurtida: param.isCurtida,
      usuarioAlvoId: param.usuarioAlvoId,
      usuarioId: param.usuarioId,
    };
  }
}
