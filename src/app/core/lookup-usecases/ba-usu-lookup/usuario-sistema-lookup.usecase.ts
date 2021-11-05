import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { SystemUserLookupRepository } from '../../lookups/usuario-sistema-lookup.repository';
import { LookupModel } from '../../lookups/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: SystemUserLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.GetAll();
  }
}
