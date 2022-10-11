import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserSystemRoleManageRepository } from '../../repositories/system-user-system-role-manage.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteSystemUserSystemRoleManageUsecase implements UseCase<string, void> {
  constructor(private systemUserSystemRoleRepository: SystemUserSystemRoleManageRepository) {}

  execute(id: string): Observable<void> {
    return this.systemUserSystemRoleRepository.deleteSystemUserSystemRoleManage(id);
  }
}
