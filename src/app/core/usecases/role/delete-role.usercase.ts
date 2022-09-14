import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { RoleRepository } from '../../repositories/role.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteRoleUsercase implements UseCase<number, void> {
  constructor(private roleRepository: RoleRepository) {}

  execute(id: number): Observable<void> {
    return this.roleRepository.deleteRole(id);
  }
}
