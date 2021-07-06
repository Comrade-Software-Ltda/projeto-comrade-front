import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/page-filter.model';
import { PageResultModel } from '../../utils/page-result.model';
import { AirplaneModel } from '../../domain/airplane.model';
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
