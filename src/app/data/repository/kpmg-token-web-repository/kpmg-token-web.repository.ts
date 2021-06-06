import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { kpmgTokenRepository } from '../../../core/repositories/kpmg-token.repository';
import { kpmgPermissaoTokenModel } from '../../../core/utils/kpmg-permissao-token.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class kpmgTokenWebRepository extends kpmgTokenRepository {
  constructor(private http: HttpClient) {
    super();
  }

  setkpmgPermissaoToken(param: string): Observable<void> {
    localStorage.setItem('kpmgPermissaoToken', param);

    return scheduled([], asyncScheduler);
  }

  getkpmgPermissaoToken(): Observable<kpmgPermissaoTokenModel> {
    const token = localStorage.getItem('kpmgPermissaoToken');

    var tokenDecode = jwt_decode(token || '') as kpmgPermissaoTokenModel;

    if (token) {
      return scheduled([tokenDecode], asyncScheduler);
    } else {
      return scheduled([], asyncScheduler);
    }
  }
}
