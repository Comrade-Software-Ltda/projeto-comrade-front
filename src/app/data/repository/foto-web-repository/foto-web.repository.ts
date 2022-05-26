import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { FotoRepository } from 'src/app/core/repositories/foto.repository';
import { FotoWebRepositoryMapper } from './foto-web-repository-mapper';
import { FotoModel } from 'src/app/core/models/foto.model';
import { FotoWebEntity } from './foto-web-entity';

@Injectable({
  providedIn: 'root',
})
export class FotoWebRepository extends FotoRepository {
  mapper = new FotoWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getAllFotosByUserId(userId: number): Observable<PageResultModel<FotoModel>> {
    var request = this.http
      .getAll<PageResultModel<FotoWebEntity>>(`${environment.SYSTEMUSER}foto/${userId}`)
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }
}
