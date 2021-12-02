import { Mapper } from '../../../core/utils/bases/mapper';
import { AirplaneWebEntity } from './airplane-web-entity';
import { AirplaneModel } from 'src/app/core/models/airplane.model';

export class AirplaneWebRepositoryMapper extends Mapper<AirplaneWebEntity, AirplaneModel> {
  mapFrom(param: AirplaneWebEntity): AirplaneModel {
    return {
      id: param.id,
      code: param.code,
      model: param.model,
      passengerQuantity: param.passengerQuantity,
      registerDate: new Date(param.registerDate),
    };
  }

  mapTo(param: AirplaneModel): AirplaneWebEntity {
    return {
      id: param?.id,
      code: param.code,
      model: param.model,
      passengerQuantity: param.passengerQuantity,
      registerDate: param.registerDate,
    };
  }
}
