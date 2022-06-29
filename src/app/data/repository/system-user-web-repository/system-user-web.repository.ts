import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemUserWebRepositoryMapper as SystemUserWebRepositoryMapper } from './system-user-web-repository-mapper';
import { SystemUserWebEntity } from './system-user-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemUserRepository } from 'src/app/core/repositories/system-user.repository';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserWebRepository extends SystemUserRepository {
  mapper = new SystemUserWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getSystemUserById(id: string): Observable<SingleResultModel<SystemUserModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<SystemUserWebEntity>>(
        `${environment.SYSTEMUSER}system-user/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllSystemUser(filter: PageFilterModel): Observable<PageResultModel<SystemUserModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemUserWebEntity>>(
        `${environment.SYSTEMUSER}system-user/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  createSystemUser(param: SystemUserModel) {
    return this.http
      .post<SystemUserWebEntity>(
        `${environment.SYSTEMUSER}system-user/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  updateSystemUser(param: SystemUserModel) {
    return this.http
      .put<void>(`${environment.SYSTEMUSER}system-user/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteSystemUser(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMUSER}system-user/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
