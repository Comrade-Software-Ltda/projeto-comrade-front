import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenModel } from 'src/app/core/domain/token.model';
import { SingleResultModel } from 'src/app/core/response-results/single-result.model';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { TokenWebEntity } from './token-web-entity';
import { TokenWebRepositoryMapper } from './token-web-repository-mapper';
import { TokenRepository } from '../../../core/repositories/token.repository';
import { AuthenticationWebRepositoryMapper } from '../authentication-web-reporitory/authentication-web-repository-mapper';
import { AuthenticationModel } from 'src/app/core/domain/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class TokenWebRepository extends TokenRepository {
  mapper = new TokenWebRepositoryMapper();
  authenticationMapper = new AuthenticationWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  postGenerateToken(param: AuthenticationModel): Observable<SingleResultModel<TokenModel>> {
    var request = this.http
      .post<SingleResultModel<TokenWebEntity>>(
        `${environment.COMRADE}token/generate-token`,
        this.authenticationMapper.mapTo(param)
      )
      .pipe(
        map((x) => {
          return this.mapper.responseWebMapFrom(x.data);
        })
      );

    return request;
  }
}
