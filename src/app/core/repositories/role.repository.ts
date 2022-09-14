import { Observable } from 'rxjs';
import { RoleModel } from '../models/role.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class RoleRepository {
  abstract getRoleById(id: number): Observable<SingleResultModel<RoleModel>>;
  abstract getAllRole(filter: PageFilterModel): Observable<PageResultModel<RoleModel>>;
  abstract postRole(param: RoleModel): Observable<RoleModel>;
  abstract putRole(param: RoleModel): Observable<void>;
  abstract deleteRole(id: number): Observable<void>;
}
