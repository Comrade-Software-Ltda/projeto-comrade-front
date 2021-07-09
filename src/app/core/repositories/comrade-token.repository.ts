import { Observable } from 'rxjs';
import { comradePermissaoTokenModel } from '../utils/comrade-permissao-token.model';

export abstract class comradeTokenRepository {
  [x: string]: any;
  abstract getComradePermissaoToken(): Observable<comradePermissaoTokenModel>;
  abstract setComradePermissaoToken(param: string): Observable<void>;
}
