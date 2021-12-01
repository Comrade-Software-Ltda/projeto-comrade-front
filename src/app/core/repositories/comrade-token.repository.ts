import { Observable } from 'rxjs';
import { comradeTokenModel } from '../utils/tokens/comrade-token.model';

export abstract class ComradeTokenRepository {
  [x: string]: any;
  abstract getComradeToken(): Observable<comradeTokenModel>;
  abstract setComradeToken(param: string): Observable<void>;
}
