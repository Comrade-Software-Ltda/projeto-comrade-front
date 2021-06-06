import { Observable } from 'rxjs';
import { ExemploCrudModel } from '../domain/exemplo-crud.model';

export abstract class ExemploCrudRepository {
  abstract getExemploCrudById(id: number): Observable<ExemploCrudModel>;
  abstract getAllExemploCrud(): Observable<ExemploCrudModel>;
  abstract postExemploCrud(param: ExemploCrudModel): Observable<ExemploCrudModel>;
  abstract putExemploCrud(param: ExemploCrudModel): Observable<void>;
  abstract deleteExemploCrud(id: number): Observable<void>;
}
