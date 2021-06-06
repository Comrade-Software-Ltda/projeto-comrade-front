import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ExemploCrudModel } from '../../domain/exemplo-crud.model';
import { ExemploCrudRepository } from '../../repositories/exemplo-crud.repository';

@Injectable({
  providedIn: 'root',
})
export class PutExemploCrudUsecase implements UseCase<ExemploCrudModel, void> {
  constructor(private processoRepository: ExemploCrudRepository) {}

  execute(params: ExemploCrudModel): Observable<void> {
    return this.processoRepository.putExemploCrud(params);
  }
}
