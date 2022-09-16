import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemPermissionWebRepositoryMapper as SystemPermissionWebRepositoryMapper } from './system-permission-web-repository-mapper';
import { SystemPermissionWebEntity } from './system-permission-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemPermissionRepository } from 'src/app/core/repositories/system-permission.repository';
import { SystemPermissionModel } from 'src/app/core/models/system-permission.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class SystemPermissionWebRepository extends SystemPermissionRepository {
  mapper = new SystemPermissionWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getSystemPermissionById(id: string): Observable<SingleResultModel<SystemPermissionModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<SystemPermissionWebEntity>>(
        `${environment.SYSTEMPERMISSION}system-permission/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllSystemPermission(filter: PageFilterModel): Observable<PageResultModel<SystemPermissionModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemPermissionWebEntity>>(
        `${environment.SYSTEMPERMISSION}system-permission/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postSystemPermission(param: SystemPermissionModel) {
    return this.http
      .post<SystemPermissionWebEntity>(
        `${environment.SYSTEMPERMISSION}system-permission/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putSystemPermission(param: SystemPermissionModel) {
    return this.http
      .put<void>(`${environment.SYSTEMPERMISSION}system-permission/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteSystemPermission(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMPERMISSION}system-permission/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
