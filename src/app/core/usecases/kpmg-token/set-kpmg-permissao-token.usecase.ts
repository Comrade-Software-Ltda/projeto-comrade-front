import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { kpmgTokenRepository } from '../../repositories/kpmg-token.repository';

@Injectable({
  providedIn: 'root',
})
export class SetkpmgPermissaoTokenUsecase implements UseCase<string, void> {
  constructor(private kpmgTokenRepository: kpmgTokenRepository) {}

  execute(param: string): Observable<void> {
    return this.kpmgTokenRepository.setkpmgPermissaoToken(param);
  }
}
