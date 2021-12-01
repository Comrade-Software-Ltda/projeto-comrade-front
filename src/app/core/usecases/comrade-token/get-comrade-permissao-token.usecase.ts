import { Injectable } from '@angular/core';
import { UseCase } from '../../bases/use-case';
import { Observable } from 'rxjs';
import { comradePermissaoTokenModel } from '../../tokens/comrade-permissao-token.model';
import { ComradeTokenRepository } from '../../repositories/comrade-token.repository';

@Injectable({
  providedIn: 'root',
})
export class GetComradePermissaoTokenUsecase implements UseCase<void, comradePermissaoTokenModel> {
  constructor(private comradeTokenRepository: ComradeTokenRepository) {}

  execute(): Observable<comradePermissaoTokenModel> {
    return this.comradeTokenRepository.getComradePermissaoToken();
  }
}
