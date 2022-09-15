import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemPermissionModel } from '../../models/system-permission.model';
import { SystemPermissionRepository } from '../../repositories/system-permission.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemPermissionUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemPermissionModel>>
{
  constructor(private systemPermissionRepository: SystemPermissionRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemPermissionModel>> {
    return this.systemPermissionRepository.getAllSystemPermission(filter);
  }
}
