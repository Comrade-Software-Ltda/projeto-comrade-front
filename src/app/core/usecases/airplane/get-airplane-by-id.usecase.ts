import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AirplaneModel } from '../../domain/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';
import { SinglecomradeResponseModel } from '../../utils/single-comrade-response-model';

@Injectable({
  providedIn: 'root',
})
export class GetAirplaneByIdUsecase
  implements UseCase<number, SinglecomradeResponseModel<AirplaneModel>>
{
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(id: number): Observable<SinglecomradeResponseModel<AirplaneModel>> {
    return this.airplaneRepository.getAirplaneById(id);
  }
}
