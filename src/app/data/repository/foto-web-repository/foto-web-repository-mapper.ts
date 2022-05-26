import { Mapper } from '../../../core/utils/bases/mapper';
import { FotoWebEntity } from './foto-web-entity';
import { FotoModel } from 'src/app/core/models/foto.model';

export class FotoWebRepositoryMapper extends Mapper<FotoWebEntity, FotoModel> {
  mapFrom(param: FotoWebEntity): FotoModel {
    return {
      url: param.fotoUrl,
      isPrincipal: param.pricipal,
    };
  }

  mapTo(param: FotoModel): FotoWebEntity {
    return {
      fotoUrl: param.url,
      pricipal: param.isPrincipal,
    };
  }
}
