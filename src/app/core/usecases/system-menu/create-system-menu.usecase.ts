import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemMenuModel } from '../../models/system-menu.model';
import { SystemMenuRepository } from '../../repositories/system-menu.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateSystemMenuUsecase implements UseCase<SystemMenuModel, SystemMenuModel> {
  constructor(private systemMenuRepository: SystemMenuRepository) {}

  execute(params: SystemMenuModel): Observable<SystemMenuModel> {
    return this.systemMenuRepository.createSystemMenu(params);
  }
}
