import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetSystemUserByIdUsecase
  implements UseCase<number, SingleResultModel<SystemUserModel>>
{
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(id: number): Observable<SingleResultModel<SystemUserModel>> {
    return this.systemUserRepository.getSystemUserById(id);
  }
}
