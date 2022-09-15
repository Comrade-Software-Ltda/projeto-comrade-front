import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemPermissionModel } from '../../models/system-permission.model';
import { SystemPermissionRepository } from '../../repositories/system-permission.repository';

@Injectable({
  providedIn: 'root',
})
export class PostSystemPermissionUsecase
  implements UseCase<SystemPermissionModel, SystemPermissionModel>
{
  constructor(private systemPermissionRepository: SystemPermissionRepository) {}

  execute(params: SystemPermissionModel): Observable<SystemPermissionModel> {
    console.log('teste 2 Singular');
    return this.systemPermissionRepository.postSystemPermission(params);
  }
}
