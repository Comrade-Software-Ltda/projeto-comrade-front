import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { comradeTokenRepository } from '../../repositories/comrade-token.repository';
import { comradePermissaoTokenModel } from '../../utils/comrade-permissao-token.model';

@Injectable({
  providedIn: 'root',
})
export class GetComradePermissaoTokenUsecase implements UseCase<void, comradePermissaoTokenModel> {
  constructor(private comradeTokenRepository: comradeTokenRepository) {}

  execute(): Observable<comradePermissaoTokenModel> {
    return this.comradeTokenRepository.getComradePermissaoToken();
  }
}
