import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserRepository } from '../../repositories/system-user.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteSystemUserUsecase implements UseCase<string, void> {
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(id: string): Observable<void> {
    return this.systemUserRepository.deleteSystemUser(id);
  }
}
