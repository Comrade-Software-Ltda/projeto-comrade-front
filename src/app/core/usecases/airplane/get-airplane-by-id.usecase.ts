import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AirplaneModel } from '../../domain/airplane.model';
import { AirplaneRepository } from '../../repositories/airplane.repository';
import { SinglekpmgResponseModel } from '../../utils/single-kpmg-response-model';

@Injectable({
  providedIn: 'root',
})
export class GetAirplaneByIdUsecase
  implements UseCase<number, SinglekpmgResponseModel<AirplaneModel>> {
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(id: number): Observable<SinglekpmgResponseModel<AirplaneModel>> {
    return this.airplaneRepository.getAirplaneById(id);
  }
}
