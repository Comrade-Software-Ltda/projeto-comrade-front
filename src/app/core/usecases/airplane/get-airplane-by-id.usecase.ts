import { Injectable } from '@angular/core';
import { UseCase } from '../../bases/use-case';
import { Observable } from 'rxjs';
import { AirplaneModel } from '../../domains/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';
import { SingleResultModel } from '../../response-results/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetAirplaneByIdUsecase implements UseCase<number, SingleResultModel<AirplaneModel>> {
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(id: number): Observable<SingleResultModel<AirplaneModel>> {
    return this.airplaneRepository.getAirplaneById(id);
  }
}
