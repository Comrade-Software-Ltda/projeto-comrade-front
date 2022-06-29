import { Observable } from 'rxjs';
import { SystemUserModel } from '../models/system-user.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class SystemUserRepository {
  abstract getSystemUserById(id: string): Observable<SingleResultModel<SystemUserModel>>;
  abstract getAllSystemUser(filter: PageFilterModel): Observable<PageResultModel<SystemUserModel>>;
  abstract createSystemUser(param: SystemUserModel): Observable<SystemUserModel>;
  abstract updateSystemUser(param: SystemUserModel): Observable<void>;
  abstract deleteSystemUser(id: string): Observable<void>;
}
