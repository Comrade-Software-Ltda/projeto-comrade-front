import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemPermissionRepository } from '../../repositories/system-permission.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteSystemPermissionUsecase implements UseCase<string, void> {
  constructor(private systemPermissionRepository: SystemPermissionRepository) {}

  execute(id: string): Observable<void> {
    return this.systemPermissionRepository.deleteSystemPermission(id);
  }
}
