import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { SystemUserLookupRepository } from './system-user-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: SystemUserLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.GetAll();
  }
}
