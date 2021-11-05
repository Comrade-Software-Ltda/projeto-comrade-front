import { Observable } from 'rxjs';
import { LookupModel } from './lookup.model';

export abstract class SystemUserLookupRepository {
  abstract GetAll(): Observable<LookupModel[]>;
  abstract GetAllByName(nome: string): Observable<LookupModel[]>;
}
