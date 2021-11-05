import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { SystemUserLookupRepository } from '../../lookups/usuario-sistema-lookup.repository';
import { LookupModel } from '../../lookups/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserLookupPorNomeUsecase implements UseCase<string, LookupModel[]> {
  constructor(private lookupRepository: SystemUserLookupRepository) {}

  execute(nome: string): Observable<LookupModel[]> {
    return this.lookupRepository.GetAllByName(nome);
  }
}
