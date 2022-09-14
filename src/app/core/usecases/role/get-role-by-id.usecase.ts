import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { RoleRepository } from '../../repositories/role.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetRoleByIdUsecase
  implements UseCase<number, SingleResultModel<RoleModel>>
{
  constructor(private roleRepository: RoleRepository) {}

  execute(id: number): Observable<SingleResultModel<RoleModel>> {
    return this.roleRepository.getRoleById(id);
  }
}
