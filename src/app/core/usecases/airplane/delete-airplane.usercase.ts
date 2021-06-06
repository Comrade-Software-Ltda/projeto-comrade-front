import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AirplaneRepository } from '../../repositories/airplane.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteAirplaneUsercase implements UseCase<number, void> {
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(id: number): Observable<void> {
    return this.airplaneRepository.deleteAirplane(id);
  }
}
