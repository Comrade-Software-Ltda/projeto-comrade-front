import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemMenuRepository } from '../../repositories/system-menu.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteSystemMenuUsecase implements UseCase<string, void> {
  constructor(private systemMenuRepository: SystemMenuRepository) {}

  execute(id: string): Observable<void> {
    return this.systemMenuRepository.deleteSystemMenu(id);
  }
}
