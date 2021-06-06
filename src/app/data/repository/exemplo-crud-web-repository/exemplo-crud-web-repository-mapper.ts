import { ExemploCrudWebEntity } from './exemplo-crud-web-entity';
import { ExemploCrudModel } from '../../../core/domain/exemplo-crud.model';
import { Mapper } from '../../../core/base/mapper';

export class ExemploCrudWebRepositoryMapper extends Mapper<ExemploCrudWebEntity, ExemploCrudModel> {
  mapFrom(param: ExemploCrudWebEntity): ExemploCrudModel {
    return {
      id: param.id,
      nome: param.nome,
    };
  }

  mapTo(param: ExemploCrudModel): ExemploCrudWebEntity {
    return {
      id: param.id,
      nome: param.nome,
    };
  }
}
