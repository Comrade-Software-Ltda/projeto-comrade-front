import { Observable } from 'rxjs';
import { AutenticacaoModel } from '../domain/autenticacao.model';
import { TokenModel } from '../domain/token.model';
import { SinglekpmgResponseModel } from '../utils/single-kpmg-response-model';

export abstract class TokenRepository {
  abstract postLogin(param: AutenticacaoModel): Observable<SinglekpmgResponseModel<TokenModel>>;
}
