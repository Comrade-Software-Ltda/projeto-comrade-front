import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemUserSystemRoleWebRepositoryMapper as SystemUserSystemRoleWebRepositoryMapper } from './system-user-system-role-web-repository-mapper';
import { SystemUserSystemRoleWebEntity } from './system-user-system-role-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemUserSystemRoleRepository } from 'src/app/core/repositories/system-user-system-role.repository';
import { SystemUserSystemRoleModel } from 'src/app/core/models/system-user-system-role.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserSystemRoleWebRepository extends SystemUserSystemRoleRepository {
  getSystemUserById(id: string): Observable<SingleResultModel<SystemUserSystemRoleModel>> {
    throw new Error('Method not implemented.');
  }
  getAllSystemUser(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemRoleModel>> {
    throw new Error('Method not implemented.');
  }
  createSystemUser(param: SystemUserSystemRoleModel): Observable<SystemUserSystemRoleModel> {
    throw new Error('Method not implemented.');
  }
  editSystemUser(param: SystemUserSystemRoleModel): Observable<void> {
    throw new Error('Method not implemented.');
  }
  deleteSystemUser(id: string): Observable<void> {
    throw new Error('Method not implemented.');
  }
  mapper = new SystemUserSystemRoleWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getSystemUserSystemRoleById(
    id: string
  ): Observable<SingleResultModel<SystemUserSystemRoleModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<SystemUserSystemRoleWebEntity>>(
        `${environment.SYSTEMUSER}system-user/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllSystemUserSystemRole(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemRoleModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemUserSystemRoleWebEntity>>(
        `${environment.SYSTEMUSER}system-user/get-all-with-roles${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  createSystemUserSystemRole(param: SystemUserSystemRoleModel) {
    return this.http
      .post<SystemUserSystemRoleWebEntity>(
        `${environment.SYSTEMUSER}system-user/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  editSystemUserSystemRole(param: SystemUserSystemRoleModel) {
    return this.http
      .put<void>(`${environment.SYSTEMUSER}system-user/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteSystemUserSystemRole(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMUSER}system-user/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
