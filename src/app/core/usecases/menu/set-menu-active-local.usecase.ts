import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { MenuRepository } from '../../repositories/menu.repository';

@Injectable({
  providedIn: 'root',
})
export class SetMenuActiveLocalUsecase implements UseCase<string, void> {
  constructor(private processoRepository: MenuRepository) {}

  execute(params: string): Observable<void> {
    return this.processoRepository.setMenuActiveLocal(params);
  }
}
