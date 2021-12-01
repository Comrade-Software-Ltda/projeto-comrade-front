import { Observable } from 'rxjs';
import { AuthenticationModel } from '../domains/authentication.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class AuthenticationRepository {
  abstract updatePassword(
    param: AuthenticationModel
  ): Observable<SingleResultModel<AuthenticationModel>>;
  abstract forgotPassword(
    param: AuthenticationModel
  ): Observable<SingleResultModel<AuthenticationModel>>;
}
