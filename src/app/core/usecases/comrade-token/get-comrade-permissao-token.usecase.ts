import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { comradeTokenModel } from '../../utils/tokens/comrade-token.model';
import { ComradeTokenRepository } from '../../repositories/comrade-token.repository';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class GetComradeTokenUsecase implements UseCase<void, comradeTokenModel> {
  constructor(private comradeTokenRepository: ComradeTokenRepository) {}

  execute(): Observable<comradeTokenModel> {
    const token = localStorage.getItem('comradeToken');

    var tokenDecode = jwt_decode(token || '') as comradeTokenModel;

    if (token) {
      return scheduled([tokenDecode], asyncScheduler);
    } else {
      return scheduled([], asyncScheduler);
    }
  }
}
