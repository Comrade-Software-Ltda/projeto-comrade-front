import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { RoleRepository } from '../../repositories/role.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteRoleUsercase implements UseCase<string, void> {
  constructor(private roleRepository: RoleRepository) {}

  execute(id: string): Observable<void> {
    return this.roleRepository.deleteRole(id);
  }
}
