import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirplaneWebRepositoryMapper as AirplaneWebRepositoryMapper } from './airplane-web-repository-mapper';
import { AirplaneWebEntity } from './airplane-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { AirplaneRepository } from 'src/app/core/repositories/airplane.repository';
import { AirplaneModel } from 'src/app/core/domain/airplane.model';
import { PageResultModel } from 'src/app/core/utils/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class AirplaneWebRepository extends AirplaneRepository {
  mapper = new AirplaneWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getAirplaneById(id: number): Observable<SingleResultModel<AirplaneModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<AirplaneWebEntity>>(`${environment.COMRADE}airplane/get-by-id`, id)
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllAirplane(filter: PageFilterModel): Observable<PageResultModel<AirplaneModel>> {
    var request = this.http
      .getAll<PageResultModel<AirplaneWebEntity>>(
        `${environment.COMRADE}airplane/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postAirplane(param: AirplaneModel) {
    return this.http
      .post<AirplaneWebEntity>(`${environment.COMRADE}airplane/create`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putAirplane(param: AirplaneModel) {
    return this.http
      .put<void>(`${environment.COMRADE}airplane/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteAirplane(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.COMRADE}airplane/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
