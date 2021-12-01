import { Observable } from 'rxjs';
import { AirplaneModel } from '../domains/airplane.model';
import { PageFilterModel } from '../filters/page-filter.model';
import { PageResultModel } from '../response-results/page-result.model';
import { SingleResultModel } from '../response-results/single-result.model';

export abstract class AirplaneRepository {
  abstract getAirplaneById(id: number): Observable<SingleResultModel<AirplaneModel>>;
  abstract getAllAirplane(filter: PageFilterModel): Observable<PageResultModel<AirplaneModel>>;
  abstract postAirplane(param: AirplaneModel): Observable<AirplaneModel>;
  abstract putAirplane(param: AirplaneModel): Observable<void>;
  abstract deleteAirplane(id: number): Observable<void>;
}
