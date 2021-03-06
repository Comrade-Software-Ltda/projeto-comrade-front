import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { AirplaneModel } from '../../models/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetAirplaneByIdUsecase implements UseCase<number, SingleResultModel<AirplaneModel>> {
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(id: number): Observable<SingleResultModel<AirplaneModel>> {
    return this.airplaneRepository.getAirplaneById(id);
  }
}
