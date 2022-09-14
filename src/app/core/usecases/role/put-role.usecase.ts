import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { RoleRepository } from '../../repositories/role.repository';

@Injectable({
  providedIn: 'root',
})
export class PutRoleUsecase implements UseCase<RoleModel, void> {
  constructor(private roleRepository: RoleRepository) {}

  execute(params: RoleModel): Observable<void> {
    return this.roleRepository.putRole(params);
  }
}
