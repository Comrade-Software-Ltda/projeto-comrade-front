import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { SystemUserLookupRepository } from '../../core/lookups/ba-usu-lookup/system-user-lookup.repository';
import { LookupWebEntity } from './helpers/lookup-web-entity';
import { LookupWebRepositoryMapper } from './helpers/lookup-web-repository-mapper';

@Injectable({
  providedIn: 'root',
})
export class SystemUserLookupWebRepository extends SystemUserLookupRepository {
  mapper = new LookupWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  GetAll(): Observable<LookupModel[]> {
    return this.http
      .getAll<LookupWebEntity[]>(`${environment.SYSTEMUSER}common/lookup-system-user`)
      .pipe(
        map((item) => {
          return item.data;
        })
      )
      .pipe(
        map((item: any) => {
          return this.mapper.mapFromList(item.data);
        })
      );
  }

  GetAllByName(nome: string): Observable<LookupModel[]> {
    return this.http
      .getAll<LookupWebEntity[]>(
        `${environment.SYSTEMUSER}common/lookup-predicate-system-user-by-name/${nome}`
      )
      .pipe(
        map((item) => {
          return item.data;
        })
      )
      .pipe(
        map((item: any) => {
          return this.mapper.mapFromList(item.data);
        })
      );
  }
}
