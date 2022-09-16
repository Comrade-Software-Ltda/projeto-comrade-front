import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemMenuModel } from '../../models/system-menu.model';
import { SystemMenuRepository } from '../../repositories/system-menu.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemMenuUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemMenuModel>>
{
  constructor(private systemMenuRepository: SystemMenuRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemMenuModel>> {
    return this.systemMenuRepository.getAllSystemMenu(filter);
  }
}
