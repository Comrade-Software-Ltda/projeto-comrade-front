import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleWebRepositoryMapper as RoleWebRepositoryMapper } from './role-web-repository-mapper';
import { RoleWebEntity } from './role-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { RoleRepository } from 'src/app/core/repositories/role.repository';
import { RoleModel } from 'src/app/core/models/role.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class RoleWebRepository extends RoleRepository {
  mapper = new RoleWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getRoleById(id: number): Observable<SingleResultModel<RoleModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<RoleWebEntity>>(
        `${environment.ROLE}role/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllRole(filter: PageFilterModel): Observable<PageResultModel<RoleModel>> {
    var request = this.http
      .getAll<PageResultModel<RoleWebEntity>>(
        `${environment.ROLE}role/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postRole(param: RoleModel) {
    return this.http
      .post<RoleWebEntity>(
        `${environment.ROLE}role/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putRole(param: RoleModel) {
    return this.http
      .put<void>(`${environment.ROLE}role/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteRole(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.ROLE}role/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
