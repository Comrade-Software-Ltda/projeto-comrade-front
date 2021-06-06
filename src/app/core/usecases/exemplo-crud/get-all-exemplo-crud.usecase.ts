import { Injectable } from '@angular/core';
import { ExemploCrudRepository } from '../../repositories/exemplo-crud.repository';
import { UseCase } from '../../base/use-case';
import { ExemploCrudModel } from '../../domain/exemplo-crud.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllExemploCrudUsecase implements UseCase<number, ExemploCrudModel> {
  constructor(private processoRepository: ExemploCrudRepository) {}

  execute(): Observable<ExemploCrudModel> {
    return this.processoRepository.getAllExemploCrud();
  }
}
