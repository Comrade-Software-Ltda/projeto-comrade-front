import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserSystemRoleManageModel } from '../../models/system-user-system-role-manage.model';
import { SystemUserSystemRoleManageRepository } from '../../repositories/system-user-system-role-manage.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetSystemUserSystemRoleManageByIdUsecase
  implements UseCase<string, SingleResultModel<SystemUserSystemRoleManageModel>>
{
  constructor(private systemUserSystemRoleRepository: SystemUserSystemRoleManageRepository) {}

  execute(id: string): Observable<SingleResultModel<SystemUserSystemRoleManageModel>> {
    return this.systemUserSystemRoleRepository.getSystemUserSystemRoleManageById(id);
  }
}
