import { Observable } from 'rxjs';
import { SystemUserSystemRoleModel } from '../models/system-user-system-role.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemUserSystemRoleRepository {
  abstract getSystemUserById(id: string): Observable<SingleResultModel<SystemUserSystemRoleModel>>;
  abstract getAllSystemUserSystemRole(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemRoleModel>>;
  abstract createSystemUserSystemRole(
    param: SystemUserSystemRoleModel
  ): Observable<SystemUserSystemRoleModel>;
  abstract editSystemUserSystemRole(param: SystemUserSystemRoleModel): Observable<void>;
  abstract deleteSystemUserSystemRole(id: string): Observable<void>;
}
