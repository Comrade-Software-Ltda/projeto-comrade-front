import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemRoleRepository } from '../../repositories/system-role.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteSystemRoleUsecase implements UseCase<string, void> {
  constructor(private systemRoleRepository: SystemRoleRepository) {}

  execute(id: string): Observable<void> {
    return this.systemRoleRepository.deleteSystemRole(id);
  }
}
