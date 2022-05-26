import { Observable } from 'rxjs';
import { CurtidaModel } from '../models/curtida.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class CurtidaRepository {
  abstract post(curtida: CurtidaModel): Observable<SingleResultModel<CurtidaModel>>;
}
