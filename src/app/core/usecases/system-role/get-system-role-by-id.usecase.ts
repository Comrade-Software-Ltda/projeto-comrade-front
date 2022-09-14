import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemRoleModel } from '../../models/system-role.model';
import { SystemRoleRepository } from '../../repositories/system-role.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetSystemRoleByIdUsecase
  implements UseCase<string, SingleResultModel<SystemRoleModel>>
{
  constructor(private systemRoleRepository: SystemRoleRepository) {}

  execute(id: string): Observable<SingleResultModel<SystemRoleModel>> {
    return this.systemRoleRepository.getSystemRoleById(id);
  }
}
