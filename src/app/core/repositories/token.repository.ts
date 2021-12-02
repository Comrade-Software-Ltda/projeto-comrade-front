import { Observable } from 'rxjs';
import { AuthenticationModel } from '../models/authentication.model';
import { TokenModel } from '../models/token.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class TokenRepository {
  abstract postGenerateToken(param: AuthenticationModel): Observable<SingleResultModel<TokenModel>>;
}
