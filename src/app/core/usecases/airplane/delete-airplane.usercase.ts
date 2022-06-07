import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { AirplaneRepository } from '../../repositories/airplane.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteAirplaneUsercase implements UseCase<string, void> {
  constructor(private airplaneRepository: AirplaneRepository) {}

  execute(id: string): Observable<void> {
    return this.airplaneRepository.deleteAirplane(id);
  }
}
