import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { AirplaneModel } from '../../models/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateAirplaneUsecase implements UseCase<AirplaneModel, AirplaneModel> {
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(params: AirplaneModel): Observable<AirplaneModel> {
    return this.airplaneRepository.createAirplane(params);
  }
}
