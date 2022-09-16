import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemMenuModel } from '../../models/system-menu.model';
import { SystemMenuRepository } from '../../repositories/system-menu.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetSystemMenuByIdUsecase
  implements UseCase<string, SingleResultModel<SystemMenuModel>>
{
  constructor(private systemMenuRepository: SystemMenuRepository) {}

  execute(id: string): Observable<SingleResultModel<SystemMenuModel>> {
    return this.systemMenuRepository.getSystemMenuById(id);
  }
}
