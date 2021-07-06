import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { comradePermissaoTokenModel } from '../../core/utils/comrade-permissao-token.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!environment.disablePermissions) {
      const tokenPermissao = localStorage.getItem('comradePermissaoToken');

      if (tokenPermissao) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${tokenPermissao}`,
          },
        });
      }
    }

    return next.handle(req);
  }
}
