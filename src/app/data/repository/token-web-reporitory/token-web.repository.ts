import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenModel } from 'src/app/core/domain/token.model';
import { SinglecomradeResponseModel } from 'src/app/core/utils/single-comrade-response-model';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { TokenWebEntity } from './token-web-entity';
import { TokenWebRepositoryMapper } from './token-web-repository-mapper';
import { TokenRepository } from '../../../core/repositories/token.repository';
import { AutenticacaoWebRepositoryMapper } from '../autenticacao-web-reporitory/autenticacao-web-repository-mapper';
import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';

@Injectable({
  providedIn: 'root',
})
export class TokenWebRepository extends TokenRepository {
  mapper = new TokenWebRepositoryMapper();
  autenticacaoMapper = new AutenticacaoWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  postLogin(param: AutenticacaoModel): Observable<SinglecomradeResponseModel<TokenModel>> {
    var request = this.http
      .post<SinglecomradeResponseModel<TokenWebEntity>>(
        `${environment.AUTORIZACAO}token/token`,
        this.autenticacaoMapper.mapTo(param)
      )
      .pipe(
        map((x) => {
          return this.mapper.responseWebMapFrom(x.data);
        })
      );

    return request;
  }
}
