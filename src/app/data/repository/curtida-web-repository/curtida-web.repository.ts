import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { CurtidaModel } from 'src/app/core/models/curtida.model';
import { CurtidaWebEntity } from './curtida-web-entity';
import { SingleResultModel } from 'src/app/core/utils/responses/single-result.model';
import { CurtidaRepository } from 'src/app/core/repositories/curtida.repository';
import { CurtidaWebRepositoryMapper } from './curtida-web-repository-mapper';

@Injectable({
  providedIn: 'root',
})
export class CurtidaWebRepository extends CurtidaRepository {
  mapper = new CurtidaWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  post(curtida: CurtidaModel): Observable<SingleResultModel<CurtidaModel>> {
    return this.http
      .post<SingleResultModel<CurtidaWebEntity>>(
        `${environment.SYSTEMUSER}curtida/`,
        this.mapper.mapTo(curtida)
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }
}
