import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { AirplaneModel } from '../../models/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';

@Injectable({
  providedIn: 'root',
})
export class UpdateAirplaneUsecase implements UseCase<AirplaneModel, void> {
  constructor(private processoRepository: AirplaneRepository) {}

  execute(params: AirplaneModel): Observable<void> {
    return this.processoRepository.updateAirplane(params);
  }
}
