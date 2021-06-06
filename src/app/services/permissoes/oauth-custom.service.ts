import { environment } from './../../../environments/environment';
import { SetkpmgPermissaoTokenUsecase } from './../../core/usecases/kpmg-token/set-kpmg-permissao-token.usecase';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OauthCustomService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private setkpmgPermissaoToken: SetkpmgPermissaoTokenUsecase
  ) {}

  public username = '';
  public password = '';
  public token = '';

  async getToken(tokenPermissao: string): Promise<string> {
    return new Promise<string>(async (resolve) => {
      const token = window.btoa('L3' + ':' + 'kpmg');
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + token,
        }),
      };

      const body = this.getBodyHttpParams(tokenPermissao);

      this.http.post(environment.authorization, body, options).subscribe(
        (data) => {
          if (data) {
            const token = JSON.stringify(data);
            this.setkpmgPermissaoToken.execute(JSON.stringify(token)).subscribe();
          }
        },
        (err) => {
          console.log(err);
          localStorage.clear();
          localStorage.setItem(
            'mensagemErroLogin',
            JSON.stringify('Conta de usuário não esta cadastrada.')
          );
          this.router.navigate(['login']);
          resolve('');
        }
      );
    });
  }

  getBodyHttpParams(tokenPermissao: string): HttpParams {
    return new HttpParams()
      .set('username', tokenPermissao)
      .set('password', 'L3')
      .set('grant_type', 'password');
  }
}
