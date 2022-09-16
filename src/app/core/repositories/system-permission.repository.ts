import { Observable } from 'rxjs';
import { SystemPermissionModel } from '../models/system-permission.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemPermissionRepository {
  abstract getSystemPermissionById(id: string): Observable<SingleResultModel<SystemPermissionModel>>;
  abstract getAllSystemPermission(filter: PageFilterModel): Observable<PageResultModel<SystemPermissionModel>>;
  abstract postSystemPermission(param: SystemPermissionModel): Observable<SystemPermissionModel>;
  abstract putSystemPermission(param: SystemPermissionModel): Observable<void>;
  abstract deleteSystemPermission(id: string): Observable<void>;
}
