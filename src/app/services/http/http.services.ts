import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { shareReplay, retry, delay, map, catchError } from 'rxjs/operators';
import { DefaultResponse } from './default-response';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  subscriptions = new Subscription();
  headers = new HttpHeaders();

  post<T>(
    url: string,
    body: any,
    useDefaultHeader: boolean = true,
    useFormData: boolean = false
  ): Observable<DefaultResponse<T>> {
    return this.request<T>('POST', `${url}`, body, useDefaultHeader, useFormData);
  }

  put<T>(
    url: string,
    body: any,
    useDefaultHeader: boolean = true,
    useFormData: boolean = false
  ): Observable<DefaultResponse<T>> {
    return this.request<T>('PUT', `${url}`, body, useDefaultHeader, useFormData);
  }

  patch<T>(url: string, body: any): Observable<DefaultResponse<T>> {
    return this.request<T>('PATCH', `${url}`, body);
  }

  get<T>(url: string): Observable<DefaultResponse<T>> {
    return this.request<T>('GET', `${url}`);
  }

  download(url: string): Observable<ArrayBuffer> {
    return this.http.get(`${url}`, {
      responseType: 'arraybuffer',
    });
  }

  delete<T>(url: string, id: string): Observable<DefaultResponse<T>> {
    return this.request<T>('DELETE', `${url}`, { id });
  }

  private request<T>(
    type: string,
    url: string,
    body: any = null,
    useDefaultHeader: boolean = true,
    useFormData: boolean = false
  ): Observable<DefaultResponse<T>> {
    let headers: HttpHeaders;
    headers = this.getDefaultHeader(useFormData);

    if (environment.logRequest) {
      console.dir({ type, url, headers, body });
    }

    const response = this.http
      .request<T>(type, url, {
        body,
        headers,
      })
      .pipe(
        shareReplay(),
        retry(0),
        delay(this.randomInteger(250, 450)),
        map((x) => this.onsuccess<T>(type, x))
      );

    if (environment.traceRequest) {
      // eslint-disable-next-line no-restricted-syntax
      console.trace('trace');

      response.subscribe((res) => {
        console.log(res);
      });
    }

    return response;
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getDefaultHeader(useFormData: boolean = false) {
    const headers = new HttpHeaders({});

    return headers;
  }

  private oncatch<T>(e: any) {
    const result = new DefaultResponse<T>();
    result.responseError(e);
    return result;
  }

  private onsuccess<T>(type: any, e: any) {
    const result = new DefaultResponse<T>();
    result.responseSuccess(type, e);
    return result;
  }
}
