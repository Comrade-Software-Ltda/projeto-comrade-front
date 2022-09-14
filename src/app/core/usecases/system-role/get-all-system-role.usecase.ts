import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemRoleModel } from '../../models/system-role.model';
import { SystemRoleRepository } from '../../repositories/system-role.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemRoleUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemRoleModel>>
{
  constructor(private systemRoleRepository: SystemRoleRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemRoleModel>> {
    return this.systemRoleRepository.getAllSystemRole(filter);
  }
}
