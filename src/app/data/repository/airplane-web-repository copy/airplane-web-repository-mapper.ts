import { Mapper } from '../../../core/base/mapper';
import { AirplaneWebEntity } from './airplane-web-entity';
import { AirplaneModel } from 'src/app/core/domain/airplane.model';

export class AirplaneWebRepositoryMapper extends Mapper<AirplaneWebEntity, AirplaneModel> {
  mapFrom(param: AirplaneWebEntity): AirplaneModel {
    return {
      id: param.id,
      codigo: param.codigo,
      modelo: param.modelo,
      quantidadePassageiro: param.quantidadePassageiro,
      dataRegistro: new Date(param.dataRegistro),
    };
  }

  mapTo(param: AirplaneModel): AirplaneWebEntity {
    return {
      id: param?.id,
      codigo: param.codigo,
      modelo: param.modelo,
      quantidadePassageiro: param.quantidadePassageiro,
      dataRegistro: param.dataRegistro.toISOString(),
    };
  }
}
