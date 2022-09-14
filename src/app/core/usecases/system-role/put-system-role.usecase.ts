import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemRoleModel } from '../../models/system-role.model';
import { SystemRoleRepository } from '../../repositories/system-role.repository';

@Injectable({
  providedIn: 'root',
})
export class PutSystemRoleUsecase implements UseCase<SystemRoleModel, void> {
  constructor(private systemRoleRepository: SystemRoleRepository) {}

  execute(params: SystemRoleModel): Observable<void> {
    return this.systemRoleRepository.putSystemRole(params);
  }
}
