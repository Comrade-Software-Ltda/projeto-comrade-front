import { Observable } from 'rxjs';
import { ContratoVerbaModel } from '../domain/contrato-verba-model/contrato-verba.model';
import { PageFilterModel } from '../utils/page-filter.model';
import { PageResponseModel } from '../utils/page-response.model';
import { SinglecomradeResponseModel } from '../utils/single-comrade-response-model';

export abstract class ContratoVerbaRepository {
  abstract postContratoVerba(
    param: ContratoVerbaModel
  ): Observable<SinglecomradeResponseModel<ContratoVerbaModel>>;
  abstract getAllContratoVerba(
    filter: PageFilterModel
  ): Observable<PageResponseModel<ContratoVerbaModel>>;
}
