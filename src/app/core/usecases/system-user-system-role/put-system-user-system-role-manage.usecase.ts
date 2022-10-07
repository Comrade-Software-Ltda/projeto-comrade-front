import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserSystemRoleManageModel } from '../../models/system-user-system-role-manage.model';
import { SystemUserSystemRoleManageRepository } from '../../repositories/system-user-system-role-manage.repository';

@Injectable({
  providedIn: 'root',
})
export class PutSystemUserSystemRoleManageUsecase
  implements UseCase<SystemUserSystemRoleManageModel, void>
{
  constructor(private systemUserSystemRoleManageRepository: SystemUserSystemRoleManageRepository) {}

  execute(params: SystemUserSystemRoleManageModel): Observable<void> {
    return this.systemUserSystemRoleManageRepository.putSystemUserSystemRoleManage(params);
  }
}
