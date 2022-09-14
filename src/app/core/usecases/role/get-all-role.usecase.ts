import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { RoleModel } from '../../models/role.model';
import { RoleRepository } from '../../repositories/role.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllRoleUsecase
  implements UseCase<PageFilterModel, PageResultModel<RoleModel>>
{
  constructor(private roleRepository: RoleRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<RoleModel>> {
    return this.roleRepository.getAllRole(filter);
  }
}
