import { Injectable } from '@angular/core';
import { ExemploCrudRepository } from '../../../core/repositories/exemplo-crud.repository';
import { ExemploCrudModel } from '../../../core/domain/exemplo-crud.model';
import { Observable } from 'rxjs';
import { ExemploCrudWebRepositoryMapper } from './exemplo-crud-web-repository-mapper';
import { ExemploCrudWebEntity } from './exemplo-crud-web-entity';
import { map, mergeMap, take, toArray } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExemploCrudWebRepository extends ExemploCrudRepository {
  mapper = new ExemploCrudWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getExemploCrudById(id: number): Observable<ExemploCrudModel> {
    return this.http
      .getAll<ExemploCrudWebEntity>(`${environment.EXEMPLOCRUD}exemploCrud/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  getAllExemploCrud(): Observable<ExemploCrudModel> {
    return this.http
      .getAll<ExemploCrudWebEntity>(`${environment.EXEMPLOCRUD}exemploCrud`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  postExemploCrud(param: ExemploCrudModel) {
    return this.http
      .post<ExemploCrudWebEntity>(`${environment.EXEMPLOCRUD}exemploCrud`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putExemploCrud(param: ExemploCrudModel) {
    return this.http
      .put<void>(`${environment.EXEMPLOCRUD}exemploCrud/${param.id}`, this.mapper.mapTo(param))
      .pipe(map((x) => x.data));
  }

  deleteExemploCrud(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.EXEMPLOCRUD}exemploCrud/${id}`, id)
      .pipe(map((x) => x.data));
  }
}
