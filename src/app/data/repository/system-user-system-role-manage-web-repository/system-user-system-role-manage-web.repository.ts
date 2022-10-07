import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemUserSystemRoleManageWebRepositoryMapper as SystemUserSystemRoleManageWebRepositoryMapper } from './system-user-system-role-manage-web-repository-mapper';
import { SystemUserSystemRoleManageWebEntity } from './system-user-system-role-manage-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemUserSystemRoleManageRepository } from 'src/app/core/repositories/system-user-system-role-manage.repository';
import { SystemUserSystemRoleManageModel } from 'src/app/core/models/system-user-system-role-manage.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserSystemRoleManageWebRepository extends SystemUserSystemRoleManageRepository {
  mapper = new SystemUserSystemRoleManageWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getSystemUserSystemRoleManageById(
    id: string
  ): Observable<SingleResultModel<SystemUserSystemRoleManageModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<SystemUserSystemRoleManageWebEntity>>(
        `${environment.SYSTEMUSERSYSTEMROLE}system-user-system-role-manage/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllSystemUserSystemRoleManage(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemRoleManageModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemUserSystemRoleManageWebEntity>>(
        `${environment.SYSTEMROLE}system-user-system-role-manage/get-all${makeParamFilterGrid(
          filter
        )}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  postSystemUserSystemRoleManage(
    param: SystemUserSystemRoleManageModel
  ): Observable<SystemUserSystemRoleManageModel> {
    return this.http
      .post<SystemUserSystemRoleManageWebEntity>(
        `${environment.SYSTEMROLE}system-user-system-role-manage/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putSystemUserSystemRoleManage(param: SystemUserSystemRoleManageModel) {
    return this.http
      .put<void>(
        `${environment.SYSTEMROLE}system-user-system-role-manage/edit`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deleteSystemUserSystemRoleManage(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMROLE}system-user-system-role-manage/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
