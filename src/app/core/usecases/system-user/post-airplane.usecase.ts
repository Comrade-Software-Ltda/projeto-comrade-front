import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { UseCase } from '../../utils/bases/use-case';
@Injectable({
  providedIn: 'root',
})
export class PostSystemUserUsecase implements UseCase<SystemUserModel, SystemUserModel> {
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(params: SystemUserModel): Observable<SystemUserModel> {
    return this.systemUserRepository.postSystemUser(params);
  }
}
