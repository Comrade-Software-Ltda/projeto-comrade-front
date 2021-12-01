import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NgZone } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any) {
    const router = this.injector.get(Router);

    if (true) {
      console.log('URL: ' + router.url);

      console.log('Esse erro foi pego no incerceptador !!!');
      console.log({ status: error.status, error });

      if (environment.traceRequest) {
        // eslint-disable-next-line no-restricted-syntax
        console.trace('trace error');
      }

      if (error.status === 401) {
        if (!error.error) {
          console.log('Sessão expirada! Faça login novamente para acessar o sistema comrade.');
        } else {
          console.log(error.error);
        }
      } else if (error.status === 403) {
        if (!error.error) {
          console.log('Conteúdo não encontrado ou você não tem permissão para acessá lo!');
        } else {
          console.log(error.error);
        }
      } else if (error.status === 500) {
        if (error.error) {
          console.log(error.error);
        } else {
          console.log(
            'Erro interno do sistema. Por favor entrar em contato com o administrador do sistema.'
          );
        }
      }
    } else {
      const ngZone = this.injector.get(NgZone);
      if (error != null && error.error != null) {
        ngZone.run(() => {
          router.navigate(
            [
              '/error',
              {
                status: error.status,
                titulo: error.error.title,
                message: error.error.userMessage,
              },
            ],
            {
              skipLocationChange: true,
            }
          );
        });
      } else {
        ngZone.run(() => {
          router.navigate(
            [
              '/error',
              {
                status: '0_0',
                titulo: 'Erro não identificado',
                message: 'Erro inesperado o sistema não identificou o erro e as messages',
              },
            ],
            {
              skipLocationChange: true,
            }
          );
        });
      }
    }
  }
}
