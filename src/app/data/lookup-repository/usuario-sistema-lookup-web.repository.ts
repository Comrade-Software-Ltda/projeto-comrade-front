import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { LookupModel } from 'src/app/core/utils/lookup.model';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment.prod';
import { UsuarioSistemaLookupRepository } from '../../core/lookup-repository/usuario-sistema-lookup.repository';
import { LookupWebEntity } from './helpers/lookup-web-entity';
import { LookupWebRepositoryMapper } from './helpers/lookup-web-repository-mapper';

@Injectable({
  providedIn: 'root',
})
export class UsuarioSistemaLookupWebRepository extends UsuarioSistemaLookupRepository {
  mapper = new LookupWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  listar(): Observable<LookupModel[]> {
    return this.http
      .getAll<LookupWebEntity[]>(`${environment.AUTORIZACAO}Comum/lookup-ba-usu`)
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

  listarPorNome(nome: string): Observable<LookupModel[]> {
    return this.http
      .getAll<LookupWebEntity[]>(`${environment.AUTORIZACAO}Comum/lookup-ba-usu-por-nome/${nome}`)
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
