import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { SystemUserSystemRoleManageLookupRepository } from './system-user-system-role-manage-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserSystemRoleManageLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: SystemUserSystemRoleManageLookupRepository) {}
  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.GetAll();
  }
}
