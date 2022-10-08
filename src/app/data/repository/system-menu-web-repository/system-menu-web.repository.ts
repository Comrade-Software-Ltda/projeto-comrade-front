import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemMenuWebRepositoryMapper as SystemMenuWebRepositoryMapper } from './system-menu-web-repository-mapper';
import { SystemMenuWebEntity } from './system-menu-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemMenuRepository } from 'src/app/core/repositories/system-menu.repository';
import { SystemMenuModel } from 'src/app/core/models/system-menu.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class SystemMenuWebRepository extends SystemMenuRepository {
  mapper = new SystemMenuWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getSystemMenuById(id: string): Observable<SingleResultModel<SystemMenuModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<SystemMenuWebEntity>>(
        `${environment.SYSTEMMENU}system-menu/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  getAllSystemMenu(filter: PageFilterModel): Observable<PageResultModel<SystemMenuModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemMenuWebEntity>>(
        `${environment.SYSTEMMENU}system-menu/get-all${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  getAllMenuSystemMenu(filter: PageFilterModel): Observable<PageResultModel<SystemMenuModel>> {
    var request = this.http
      .getAll<PageResultModel<SystemMenuWebEntity>>(
        `${environment.SYSTEMMENU}system-menu/get-all-menus${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }
  createSystemMenu(param: SystemMenuModel) {
    return this.http
      .post<SystemMenuWebEntity>(
        `${environment.SYSTEMMENU}system-menu/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  editSystemMenu(param: SystemMenuModel) {
    return this.http
      .put<void>(`${environment.SYSTEMMENU}system-menu/edit`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteSystemMenu(id: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.SYSTEMMENU}system-menu/delete/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
