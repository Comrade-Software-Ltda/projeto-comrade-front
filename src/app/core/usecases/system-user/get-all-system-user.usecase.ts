import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllSystemUserUsecase
  implements UseCase<PageFilterModel, PageResultModel<SystemUserModel>>
{
  constructor(private systemUserRepository: SystemUserRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<SystemUserModel>> {
    return this.systemUserRepository.getAllSystemUser(filter);
  }
}
