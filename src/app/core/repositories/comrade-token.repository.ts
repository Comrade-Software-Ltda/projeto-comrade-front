import { Observable } from 'rxjs';
import { comradePermissaoTokenModel } from '../tokens/comrade-permissao-token.model';

export abstract class ComradeTokenRepository {
  [x: string]: any;
  abstract getComradePermissaoToken(): Observable<comradePermissaoTokenModel>;
  abstract setComradePermissaoToken(param: string): Observable<void>;
}
