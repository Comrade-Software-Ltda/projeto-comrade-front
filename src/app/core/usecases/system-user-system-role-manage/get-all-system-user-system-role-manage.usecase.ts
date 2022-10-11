import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemUserSystemRoleManageModel } from '../../models/system-user-system-role-manage.model';
import { SystemUserSystemRoleManageRepository } from '../../repositories/system-user-system-role-manage.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemUserSystemRoleManageUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemUserSystemRoleManageModel>>
{
  constructor(private systemUserSystemRoleRepository: SystemUserSystemRoleManageRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemUserSystemRoleManageModel>> {
    return this.systemUserSystemRoleRepository.getAllSystemUserSystemRoleManage(filter);
  }
}
