import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirplaneWebRepositoryMapper as AirplaneWebRepositoryMapper } from './airplane-web-repository-mapper';
import { AirplaneWebEntity } from './airplane-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { AirplaneRepository } from 'src/app/core/repositories/airplane.repository';
import { AirplaneModel } from 'src/app/core/domain/airplane.model';
import { PageResponseModel } from 'src/app/core/utils/page-response.model';
import { PageFilterModel } from 'src/app/core/utils/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SinglekpmgResponseModel } from '../../../core/utils/single-kpmg-response-model';

@Injectable({
  providedIn: 'root',
})
export class AirplaneWebRepository extends AirplaneRepository {
  mapper = new AirplaneWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getAirplaneById(id: number): Observable<SinglekpmgResponseModel<AirplaneModel>> {
    PageResponseModel;
    return this.http
      .get<SinglekpmgResponseModel<AirplaneWebEntity>>(
        `${environment.AUTORIZACAO}Airplane/obter`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllAirplane(filter: PageFilterModel): Observable<PageResponseModel<AirplaneModel>> {
    var request = this.http
      .getAll<PageResponseModel<AirplaneWebEntity>>(
        `${environment.AUTORIZACAO}Airplane/listar${makeParamFilterGrid(filter)}`
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
      .post<AirplaneWebEntity>(
        `${environment.AUTORIZACAO}Airplane/incluir`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putAirplane(param: AirplaneModel) {
    return this.http
      .put<void>(`${environment.AUTORIZACAO}Airplane/editar`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteAirplane(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.AUTORIZACAO}Airplane/excluir/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
