import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ExemploCrudModel } from '../../domain/exemplo-crud.model';
import { ExemploCrudRepository } from '../../repositories/exemplo-crud.repository';

@Injectable({
  providedIn: 'root',
})
export class GetExemploCrudByIdUsecase implements UseCase<number, ExemploCrudModel> {
  constructor(private processoRepository: ExemploCrudRepository) {}

  execute(params: number): Observable<ExemploCrudModel> {
    return this.processoRepository.getExemploCrudById(params);
  }
}
