import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { comradeTokenModel } from '../../../core/utils/tokens/comrade-token.model';
import jwt_decode from 'jwt-decode';
import { ComradeTokenRepository } from 'src/app/core/repositories/comrade-token.repository';

@Injectable({
  providedIn: 'root',
})
export class ComradeTokenWebRepository extends ComradeTokenRepository {
  constructor(private http: HttpClient) {
    super();
  }

  setComradeToken(param: string): Observable<void> {
    localStorage.setItem('comradeToken', param);

    return scheduled([], asyncScheduler);
  }

  getComradeToken(): Observable<comradeTokenModel> {
    const token = localStorage.getItem('comradeToken');

    var tokenDecode = jwt_decode(token || '') as comradeTokenModel;

    if (token) {
      return scheduled([tokenDecode], asyncScheduler);
    } else {
      return scheduled([], asyncScheduler);
    }
  }
}
