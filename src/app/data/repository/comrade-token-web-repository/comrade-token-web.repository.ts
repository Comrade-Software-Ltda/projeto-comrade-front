import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { comradePermissaoTokenModel } from '../../../core/tokens/comrade-permissao-token.model';
import jwt_decode from 'jwt-decode';
import { ComradeTokenRepository } from 'src/app/core/repositories/comrade-token.repository';

@Injectable({
  providedIn: 'root',
})
export class ComradeTokenWebRepository extends ComradeTokenRepository {
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
