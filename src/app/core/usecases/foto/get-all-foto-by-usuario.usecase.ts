import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { FotoModel } from '../../models/foto.model';
import { FotoRepository } from '../../repositories/foto.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllFotoUsecase implements UseCase<number, PageResultModel<FotoModel>> {
  constructor(private fotoRepository: FotoRepository) {}

  execute(id: number): Observable<PageResultModel<FotoModel>> {
    return this.fotoRepository.getAllFotosByUserId(id);
  }
}
