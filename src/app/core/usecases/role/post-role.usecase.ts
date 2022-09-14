import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { RoleRepository } from '../../repositories/role.repository';

@Injectable({
  providedIn: 'root',
})
export class PostRoleUsecase implements UseCase<RoleModel, RoleModel> {
  constructor(private roleRepository: RoleRepository) {}

  execute(params: RoleModel): Observable<RoleModel> {
    return this.roleRepository.postRole(params);
  }
}
