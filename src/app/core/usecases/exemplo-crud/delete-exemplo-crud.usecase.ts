import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ExemploCrudRepository } from '../../repositories/exemplo-crud.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteExemploCrudUsecase implements UseCase<number, void> {
  constructor(private processoRepository: ExemploCrudRepository) {}

  execute(id: number): Observable<void> {
    return this.processoRepository.deleteExemploCrud(id);
  }
}
