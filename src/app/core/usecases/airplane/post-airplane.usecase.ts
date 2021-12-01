import { Injectable } from '@angular/core';
import { UseCase } from '../../bases/use-case';
import { Observable } from 'rxjs';
import { AirplaneModel } from '../../domains/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';

@Injectable({
  providedIn: 'root',
})
export class PostAirplaneUsecase implements UseCase<AirplaneModel, AirplaneModel> {
  constructor(private processoRepository: AirplaneRepository) {}

  execute(params: AirplaneModel): Observable<AirplaneModel> {
    return this.processoRepository.postAirplane(params);
  }
}
