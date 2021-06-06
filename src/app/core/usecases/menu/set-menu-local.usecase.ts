import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { MenuRepository } from '../../repositories/menu.repository';
import { MenuModel } from '../../utils/menu.model';

@Injectable({
  providedIn: 'root',
})
export class SetMenuLocalUsecase implements UseCase<MenuModel[], void> {
  constructor(private processoRepository: MenuRepository) {}

  execute(params: MenuModel[]): Observable<void> {
    return this.processoRepository.setMenuLocal(params);
  }
}
