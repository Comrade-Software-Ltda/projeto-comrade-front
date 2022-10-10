import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserSystemRoleManageModel } from '../../models/system-user-system-role-manage.model';
import { SystemUserSystemRoleManageRepository } from '../../repositories/system-user-system-role-manage.repository';

@Injectable({
  providedIn: 'root',
})
export class PostSystemUserSystemRoleManageUsecase
  implements UseCase<SystemUserSystemRoleManageModel, SystemUserSystemRoleManageModel>
{
  constructor(private systemUserSystemRoleRepository: SystemUserSystemRoleManageRepository) {}

  execute(params: SystemUserSystemRoleManageModel): Observable<SystemUserSystemRoleManageModel> {
    console.log('teste 2 Singular');
    return this.systemUserSystemRoleRepository.postSystemUserSystemRoleManage(params);
  }
}
