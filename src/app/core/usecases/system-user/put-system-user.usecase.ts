import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';

@Injectable({
  providedIn: 'root',
})
export class PutSystemUserUsecase implements UseCase<SystemUserModel, void> {
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(params: SystemUserModel): Observable<void> {
    return this.systemUserRepository.putSystemUser(params);
  }
}
