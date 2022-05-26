import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioWebRepositoryMapper as UsuarioWebRepositoryMapper } from './usuario-web-repository-mapper';
import { UsuarioWebEntity } from './usuario-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { UsuarioRepository } from 'src/app/core/repositories/usuario.repository';
import { SingleResultModel } from 'src/app/core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioWebRepository extends UsuarioRepository {
  mapper = new UsuarioWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getAllUsuario(): Observable<PageResultModel<UsuarioModel>> {
    var request = this.http
      .getAll<PageResultModel<UsuarioWebEntity>>(`${environment.SYSTEMUSER}usuario`)
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  getUsuarioById(id: number): Observable<SingleResultModel<UsuarioModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<UsuarioWebEntity>>(`${environment.SYSTEMUSER}usuario`, id)
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  postUpdateUsuario(id: number, usuario: UsuarioModel) {
    return this.http
      .post<SingleResultModel<UsuarioWebEntity>>(
        `${environment.SYSTEMUSER}usuario/${id}`,
        this.mapper.mapTo(usuario)
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }

  postUpdateUsuarioPreferences(id: number, usuario: UsuarioModel) {
    return this.http
      .post<SingleResultModel<UsuarioWebEntity>>(
        `${environment.SYSTEMUSER}preferencia/usuario/${id}`,
        this.mapper.mapTo(usuario)
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }
}
