import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UsuarioSistemaLookupRepository } from '../../lookup-repository/usuario-sistema-lookup.repository';
import { LookupModel } from '../../utils/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioSistemaLookupPorNomeUsecase implements UseCase<string, LookupModel[]> {
  constructor(private lookupRepository: UsuarioSistemaLookupRepository) {}

  execute(nome: string): Observable<LookupModel[]> {
    return this.lookupRepository.listarPorNome(nome);
  }
}
