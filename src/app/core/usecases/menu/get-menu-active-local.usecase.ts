import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { MenuRepository } from '../../repositories/menu.repository';
import { MenuModel } from '../../utils/menu.model';

@Injectable({
  providedIn: 'root',
})
export class GetMenuActiveLocalUsecase implements UseCase<void, MenuModel> {
  constructor(private processoRepository: MenuRepository) {}

  execute(params: void): Observable<MenuModel> {
    return this.processoRepository.getMenuActiveLocal();
  }
}
