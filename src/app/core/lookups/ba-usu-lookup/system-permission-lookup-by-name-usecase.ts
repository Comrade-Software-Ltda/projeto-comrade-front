import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../utils/bases/use-case';
import { SystemPermissionLookupRepository } from './system-permission-lookup.repository';
import { LookupModel } from '../../models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class SystemPermissionLookupByNameUsecase implements UseCase<string, LookupModel[]> {
  constructor(private lookupRepository: SystemPermissionLookupRepository) {}

  execute(nome: string): Observable<LookupModel[]> {
    return this.lookupRepository.GetAllByName(nome);
  }
}
