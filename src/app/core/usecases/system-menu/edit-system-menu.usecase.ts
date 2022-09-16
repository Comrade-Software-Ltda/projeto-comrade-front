import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemMenuModel } from '../../models/system-menu.model';
import { SystemMenuRepository } from '../../repositories/system-menu.repository';

@Injectable({
  providedIn: 'root',
})
export class EditSystemMenuUsecase implements UseCase<SystemMenuModel, void> {
  constructor(private systemMenuRepository: SystemMenuRepository) {}

  execute(params: SystemMenuModel): Observable<void> {
    console.log(params);
    return this.systemMenuRepository.editSystemMenu(params);
  }
}
