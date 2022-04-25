import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { AirplaneModel } from '../../models/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllAirplaneUsecase
  implements UseCase<PageFilterModel, PageResultModel<AirplaneModel>>
{
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<AirplaneModel>> {
    return this.airplaneRepository.getAllAirplane(filter);
  }
}
