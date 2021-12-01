import { Observable } from 'rxjs';
import { AuthenticationModel } from '../domains/authentication.model';
import { TokenModel } from '../domains/token.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class TokenRepository {
  abstract postGenerateToken(param: AuthenticationModel): Observable<SingleResultModel<TokenModel>>;
}
