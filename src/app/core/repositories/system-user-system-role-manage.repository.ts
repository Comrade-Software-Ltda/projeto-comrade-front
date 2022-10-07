import { Observable } from 'rxjs';
import { SystemUserSystemRoleManageModel } from '../models/system-user-system-role-manage.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemUserSystemRoleManageRepository {
  abstract getSystemUserSystemRoleManageById(
    id: string
  ): Observable<SingleResultModel<SystemUserSystemRoleManageModel>>;
  abstract getAllSystemUserSystemRoleManage(
    filter: PageFilterModel
  ): Observable<PageResultModel<SystemUserSystemRoleManageModel>>;
  abstract postSystemUserSystemRoleManage(
    param: SystemUserSystemRoleManageModel
  ): Observable<SystemUserSystemRoleManageModel>;
  abstract putSystemUserSystemRoleManage(param: SystemUserSystemRoleManageModel): Observable<void>;
  abstract deleteSystemUserSystemRoleManage(id: string): Observable<void>;
}
