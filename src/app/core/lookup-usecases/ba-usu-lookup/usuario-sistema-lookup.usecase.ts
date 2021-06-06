import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UsuarioSistemaLookupRepository } from '../../lookup-repository/usuario-sistema-lookup.repository';
import { LookupModel } from '../../utils/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioSistemaLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: UsuarioSistemaLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.listar();
  }
}
