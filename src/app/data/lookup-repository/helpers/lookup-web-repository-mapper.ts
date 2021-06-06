import { Mapper } from 'src/app/core/base/mapper';
import { LookupModel } from 'src/app/core/utils/lookup.model';
import { LookupWebEntity } from './lookup-web-entity';

export class LookupWebRepositoryMapper extends Mapper<LookupWebEntity, LookupModel> {
  mapFrom(param: LookupWebEntity): LookupModel {
    return {
      key: param.key,
      value: param.value,
    };
  }

  mapTo(param: LookupModel): LookupWebEntity {
    return {
      key: param.key,
      value: param.value,
    };
  }
}
