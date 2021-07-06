import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { comradeTokenRepository } from '../../repositories/comrade-token.repository';

@Injectable({
  providedIn: 'root',
})
export class SetComradePermissaoTokenUsecase implements UseCase<string, void> {
  constructor(private comradeTokenRepository: comradeTokenRepository) {}

  execute(param: string): Observable<void> {
    return this.comradeTokenRepository.setComradePermissaoToken(param);
  }
}
