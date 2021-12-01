import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable, Subject } from 'rxjs';
import { comradeTokenModel } from '../../utils/tokens/comrade-token.model';
import { ComradeTokenRepository } from '../../repositories/comrade-token.repository';

@Injectable({
  providedIn: 'root',
})
export class GetNomeUsuarioLogadoFormatadoUsecase implements UseCase<void, string> {
  constructor(private comradeTokenRepository: ComradeTokenRepository) {}

  execute(): Observable<string> {
    const subject = new Subject<string>();

    this.comradeTokenRepository.getComradeToken().subscribe((result: comradeTokenModel) => {
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
