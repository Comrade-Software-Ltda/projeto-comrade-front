import { Observable } from 'rxjs';
import { AuthenticationModel } from '../domain/authentication.model';
import { SingleResultModel } from '../response-results/single-result.model';

export abstract class AuthenticationRepository {
  abstract updatePassword(
    param: AuthenticationModel
  ): Observable<SingleResultModel<AuthenticationModel>>;
  abstract forgotPassword(
    param: AuthenticationModel
  ): Observable<SingleResultModel<AuthenticationModel>>;
}
