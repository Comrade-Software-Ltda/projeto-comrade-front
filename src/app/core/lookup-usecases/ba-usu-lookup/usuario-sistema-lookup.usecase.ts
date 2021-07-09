import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { SystemUserLookupRepository } from '../../lookup-repository/usuario-sistema-lookup.repository';
import { LookupModel } from '../../utils/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: SystemUserLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.GetAll();
  }
}
