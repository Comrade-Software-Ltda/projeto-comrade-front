import { Observable } from 'rxjs';
import { ContratoVerbaModel } from '../domain/contrato-verba-model/contrato-verba.model';
import { PageFilterModel } from '../utils/page-filter.model';
import { PageResultModel } from '../utils/page-result.model';
import { SingleResultModel } from '../utils/single-result.model';

export abstract class ContratoVerbaRepository {
  abstract postContratoVerba(
    param: ContratoVerbaModel
  ): Observable<SingleResultModel<ContratoVerbaModel>>;
  abstract getAllContratoVerba(
    filter: PageFilterModel
  ): Observable<PageResultModel<ContratoVerbaModel>>;
}
