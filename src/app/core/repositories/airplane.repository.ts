import { Observable } from 'rxjs';
import { AirplaneModel } from '../models/airplane.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class AirplaneRepository {
  abstract getAirplaneById(id: number): Observable<SingleResultModel<AirplaneModel>>;
  abstract getAllAirplane(filter: PageFilterModel): Observable<PageResultModel<AirplaneModel>>;
  abstract postAirplane(param: AirplaneModel): Observable<AirplaneModel>;
  abstract putAirplane(param: AirplaneModel): Observable<void>;
  abstract deleteAirplane(id: number): Observable<void>;
}
