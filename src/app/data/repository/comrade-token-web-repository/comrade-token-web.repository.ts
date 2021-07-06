import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { comradeTokenRepository } from '../../../core/repositories/comrade-token.repository';
import { comradePermissaoTokenModel } from '../../../core/utils/comrade-permissao-token.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class comradeTokenWebRepository extends comradeTokenRepository {
  constructor(private http: HttpClient) {
    super();
  }

  setComradePermissaoToken(param: string): Observable<void> {
    localStorage.setItem('comradePermissaoToken', param);

    return scheduled([], asyncScheduler);
  }

  getComradePermissaoToken(): Observable<comradePermissaoTokenModel> {
    const token = localStorage.getItem('comradePermissaoToken');

    var tokenDecode = jwt_decode(token || '') as comradePermissaoTokenModel;

    if (token) {
      return scheduled([tokenDecode], asyncScheduler);
    } else {
      return scheduled([], asyncScheduler);
    }
  }
}
