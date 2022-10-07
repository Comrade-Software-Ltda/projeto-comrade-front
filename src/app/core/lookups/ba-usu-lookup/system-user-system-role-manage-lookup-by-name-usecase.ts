import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { SystemUserSystemRoleManageLookupRepository } from './system-user-system-role-manage-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserSystemRoleManageLookupByNameUsecase
  implements UseCase<string, LookupModel[]>
{
  constructor(private lookupRepository: SystemUserSystemRoleManageLookupRepository) {}
  execute(nome: string): Observable<LookupModel[]> {
    return this.lookupRepository.GetAllByName(nome);
  }
}
