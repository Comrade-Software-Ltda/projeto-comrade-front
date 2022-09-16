import { Observable } from 'rxjs';
import { SystemMenuModel } from '../models/system-menu.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemMenuRepository {
  abstract getSystemMenuById(id: string): Observable<SingleResultModel<SystemMenuModel>>;
  abstract getAllSystemMenu(filter: PageFilterModel): Observable<PageResultModel<SystemMenuModel>>;
  abstract createSystemMenu(param: SystemMenuModel): Observable<SystemMenuModel>;
  abstract editSystemMenu(param: SystemMenuModel): Observable<void>;
  abstract deleteSystemMenu(id: string): Observable<void>;
}
