import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ExemploCrudModel } from '../../domain/exemplo-crud.model';
import { ExemploCrudRepository } from '../../repositories/exemplo-crud.repository';
import { AirplaneModel } from '../../domain/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';

@Injectable({
  providedIn: 'root',
})
export class PutAirplaneUsecase implements UseCase<AirplaneModel, void> {
  constructor(private processoRepository: AirplaneRepository) {}

  execute(params: AirplaneModel): Observable<void> {
    return this.processoRepository.putAirplane(params);
  }
}
