import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { kpmgTokenRepository } from '../../repositories/kpmg-token.repository';
import { kpmgPermissaoTokenModel } from '../../utils/kpmg-permissao-token.model';

@Injectable({
  providedIn: 'root',
})
export class GetkpmgPermissaoTokenUsecase implements UseCase<void, kpmgPermissaoTokenModel> {
  constructor(private kpmgTokenRepository: kpmgTokenRepository) {}

  execute(): Observable<kpmgPermissaoTokenModel> {
    return this.kpmgTokenRepository.getkpmgPermissaoToken();
  }
}
