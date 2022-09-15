import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { SystemPermissionLookupRepository } from './system-permission-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemPermissionLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: SystemPermissionLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.GetAll();
  }
}
