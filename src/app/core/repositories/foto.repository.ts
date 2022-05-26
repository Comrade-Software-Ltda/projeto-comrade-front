import { Observable } from 'rxjs';
import { FotoModel } from '../models/foto.model';
import { PageResultModel } from '../utils/responses/page-result.model';

export abstract class FotoRepository {
  abstract getAllFotosByUserId(userId: number): Observable<PageResultModel<FotoModel>>;
}
