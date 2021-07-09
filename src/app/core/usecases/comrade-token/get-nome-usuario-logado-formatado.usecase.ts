import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable, Subject } from 'rxjs';
import { comradeTokenRepository } from '../../repositories/comrade-token.repository';
import { comradePermissaoTokenModel } from '../../utils/comrade-permissao-token.model';

@Injectable({
  providedIn: 'root',
})
export class GetNomeUsuarioLogadoFormatadoUsecase implements UseCase<void, string> {
  constructor(private comradeTokenRepository: comradeTokenRepository) {}

  execute(): Observable<string> {
    const subject = new Subject<string>();

    this.comradeTokenRepository
      .getComradePermissaoToken()
      .subscribe((result: comradePermissaoTokenModel) => {
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
