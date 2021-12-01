import { PageResultModel } from '../responses/page-result.model';
import { SingleResultModel } from '../responses/single-result.model';

export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O;

  abstract mapTo(param: O): I;

  mapFromList(param: I[]): O[] {
    const listaRetorno: O[] = [];
    (param || []).forEach((element) => listaRetorno.push(this.mapFrom(element)));
    return listaRetorno;
  }

  responseWebMapFrom(param: SingleResultModel<I>): SingleResultModel<O> {
    return {
      ...param,
      data: param.data ? this.mapFrom(param.data) : undefined,
    };
  }

  responseGridWebMapFrom(param: PageResultModel<I>): PageResultModel<O> {
    return {
      ...param,
      data: param.data?.map(this.mapFrom),
    };
  }
}
