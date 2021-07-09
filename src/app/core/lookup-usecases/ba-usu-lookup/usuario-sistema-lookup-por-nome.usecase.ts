import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { SystemUserLookupRepository } from '../../lookup-repository/usuario-sistema-lookup.repository';
import { LookupModel } from '../../utils/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemUserLookupPorNomeUsecase implements UseCase<string, LookupModel[]> {
  constructor(private lookupRepository: SystemUserLookupRepository) {}

  execute(nome: string): Observable<LookupModel[]> {
    return this.lookupRepository.GetAllByName(nome);
  }
}
