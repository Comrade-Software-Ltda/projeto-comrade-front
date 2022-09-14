import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateSystemUserUsecase implements UseCase<SystemUserModel, SystemUserModel> {
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(params: SystemUserModel): Observable<SystemUserModel> {
    return this.systemUserRepository.createSystemUser(params);
  }
}
