import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../bases/use-case';
import { SystemUserLookupRepository } from '../../lookups/usuario-sistema-lookup.repository';
import { LookupModel } from '../../lookups/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserLookupByNameUsecase implements UseCase<string, LookupModel[]> {
  constructor(private lookupRepository: SystemUserLookupRepository) {}

  execute(nome: string): Observable<LookupModel[]> {
    return this.lookupRepository.GetAllByName(nome);
  }
}
