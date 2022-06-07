import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirplaneWebRepositoryMapper as AirplaneWebRepositoryMapper } from './airplane-web-repository-mapper';
import { AirplaneWebEntity } from './airplane-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { AirplaneRepository } from 'src/app/core/repositories/airplane.repository';
import { AirplaneModel } from 'src/app/core/models/airplane.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class AirplaneWebRepository extends AirplaneRepository {
  mapper = new AirplaneWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getAirplaneById(id: string): Observable<SingleResultModel<AirplaneModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<AirplaneWebEntity>>(`${environment.SYSTEMUSER}airplane/get-by-id`, id)
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllAirplane(filter: PageFilterModel): Observable<PageResultModel<AirplaneModel>> {
    var request = this.http
      .getAll<PageResultModel<AirplaneWebEntity>>(
        `${environment.SYSTEMUSER}airplane/get-all${makeParamFilterGrid(filter)}`
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
      .post<AirplaneWebEntity>(`${environment.SYSTEMUSER}airplane/create`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putAirplane(param: AirplaneModel) {
    return this.http
      .put<void>(`${environment.SYSTEMUSER}airplane/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteAirplane(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMUSER}airplane/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
