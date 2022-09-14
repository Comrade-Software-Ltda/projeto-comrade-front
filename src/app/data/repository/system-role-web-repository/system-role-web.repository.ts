import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemRoleWebRepositoryMapper as SystemRoleWebRepositoryMapper } from './system-role-web-repository-mapper';
import { SystemRoleWebEntity } from './system-role-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemRoleRepository } from 'src/app/core/repositories/system-role.repository';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class SystemRoleWebRepository extends SystemRoleRepository {
  mapper = new SystemRoleWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getSystemRoleById(id: string): Observable<SingleResultModel<SystemRoleModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<SystemRoleWebEntity>>(
        `${environment.SYSTEMROLE}system-role/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllSystemRole(filter: PageFilterModel): Observable<PageResultModel<SystemRoleModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemRoleWebEntity>>(
        `${environment.SYSTEMROLE}system-role/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postSystemRole(param: SystemRoleModel): Observable<SystemRoleModel> {
    return this.http
      .post<SystemRoleWebEntity>(
        `${environment.SYSTEMROLE}system-role/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putSystemRole(param: SystemRoleModel) {
    return this.http
      .put<void>(`${environment.SYSTEMROLE}system-role/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteSystemRole(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMROLE}system-role/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
