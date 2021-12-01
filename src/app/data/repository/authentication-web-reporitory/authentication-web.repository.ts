import { SingleResultModel } from '../../../core/utils/responses/single-result.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, take, toArray } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { AuthenticationModel } from 'src/app/core/domains/authentication.model';
import { AuthenticationWebEntity } from './authentication-web-entity';
import { AuthenticationWebRepositoryMapper } from './authentication-web-repository-mapper';
import { AuthenticationRepository } from 'src/app/core/repositories/authentication.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationWebRepository extends AuthenticationRepository {
  mapper = new AuthenticationWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  updatePassword(param: AuthenticationModel): Observable<SingleResultModel<AuthenticationModel>> {
    var request = this.http
      .post<SingleResultModel<AuthenticationWebEntity>>(
        `${environment.COMRADE}authentication/update-password`,
        this.mapper.mapTo(param)
      )
      .pipe(
        map((x) => {
          return this.mapper.responseWebMapFrom(x.data);
        })
      );

    return request;
  }

  forgotPassword(param: AuthenticationModel): Observable<SingleResultModel<AuthenticationModel>> {
    var request = this.http
      .post<SingleResultModel<AuthenticationWebEntity>>(
        `${environment.COMRADE}authentication/forgot-password`,
        this.mapper.mapTo(param)
      )
      .pipe(
        map((x) => {
          return this.mapper.responseWebMapFrom(x.data);
        })
      );

    return request;
  }
}
