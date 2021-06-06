import { Observable } from 'rxjs';
import { kpmgPermissaoTokenModel } from '../utils/kpmg-permissao-token.model';

export abstract class kpmgTokenRepository {
  [x: string]: any;
  abstract getkpmgPermissaoToken(): Observable<kpmgPermissaoTokenModel>;
  abstract setkpmgPermissaoToken(param: string): Observable<void>;
}
