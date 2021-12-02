import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { ComradeTokenRepository } from '../../repositories/comrade-token.repository';

@Injectable({
  providedIn: 'root',
})
export class SetComradeTokenUsecase implements UseCase<string, void> {
  constructor(private comradeTokenRepository: ComradeTokenRepository) {}

  execute(param: string): Observable<void> {
    localStorage.setItem('comradeToken', param);

    return scheduled([], asyncScheduler);
  }
}
