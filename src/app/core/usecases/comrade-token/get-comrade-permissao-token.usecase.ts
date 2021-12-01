import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { comradeTokenModel } from '../../utils/tokens/comrade-token.model';
import { ComradeTokenRepository } from '../../repositories/comrade-token.repository';

@Injectable({
  providedIn: 'root',
})
export class GetComradeTokenUsecase implements UseCase<void, comradeTokenModel> {
  constructor(private comradeTokenRepository: ComradeTokenRepository) {}

  execute(): Observable<comradeTokenModel> {
    return this.comradeTokenRepository.getComradeToken();
  }
}
