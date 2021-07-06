import { Observable } from 'rxjs';
import { AirplaneModel } from '../domain/airplane.model';
import { PageFilterModel } from '../utils/page-filter.model';
import { PageResultModel } from '../utils/page-result.model';
import { SingleResultModel } from '../utils/single-result.model';

export abstract class AirplaneRepository {
  abstract getAirplaneById(id: number): Observable<SingleResultModel<AirplaneModel>>;
  abstract getAllAirplane(filter: PageFilterModel): Observable<PageResultModel<AirplaneModel>>;
  abstract postAirplane(param: AirplaneModel): Observable<AirplaneModel>;
  abstract putAirplane(param: AirplaneModel): Observable<void>;
  abstract deleteAirplane(id: number): Observable<void>;
}
