import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable, Subject } from 'rxjs';
import { kpmgTokenRepository } from '../../repositories/kpmg-token.repository';
import { kpmgPermissaoTokenModel } from '../../utils/kpmg-permissao-token.model';

@Injectable({
  providedIn: 'root',
})
export class GetNomeUsuarioLogadoFormatadoUsecase implements UseCase<void, string> {
  constructor(private kpmgTokenRepository: kpmgTokenRepository) {}

  execute(): Observable<string> {
    const subject = new Subject<string>();

    this.kpmgTokenRepository
      .getkpmgPermissaoToken()
      .subscribe((result: kpmgPermissaoTokenModel) => {
        if (result) {
          let nomeUsuario = result.nome.replace(
            /(\w)(\w*)/g,
            (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
          );

          nomeUsuario = nomeUsuario.replace(/\W*(\w+).*?(\w+)\W*$/, (g0, g1, g2) => g1 + ' ' + g2);

          subject.next(nomeUsuario);
        }
      });

    return subject.asObservable();
  }
}
