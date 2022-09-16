import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemPermissionModel } from '../../models/system-permission.model';
import { SystemPermissionRepository } from '../../repositories/system-permission.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetSystemPermissionByIdUsecase
  implements UseCase<string, SingleResultModel<SystemPermissionModel>>
{
  constructor(private systemPermissionRepository: SystemPermissionRepository) {}

  execute(id: string): Observable<SingleResultModel<SystemPermissionModel>> {
    return this.systemPermissionRepository.getSystemPermissionById(id);
  }
}
