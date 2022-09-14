import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemRoleModel } from '../../models/system-role.model';
import { SystemRoleRepository } from '../../repositories/system-role.repository';

@Injectable({
  providedIn: 'root',
})
export class PostSystemRoleUsecase implements UseCase<SystemRoleModel, SystemRoleModel> {
  constructor(private systemRoleRepository: SystemRoleRepository) {}

  execute(params: SystemRoleModel): Observable<SystemRoleModel> {
    console.log('teste 2 Singular');
    return this.systemRoleRepository.postSystemRole(params);
  }
}
