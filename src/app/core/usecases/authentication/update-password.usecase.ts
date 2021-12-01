import { SingleResultModel } from '../../utils/responses/single-result.model';
import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { AuthenticationRepository } from '../../repositories/authentication.repository';
import { AuthenticationModel } from '../../domains/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class UpdatePasswordUsecase
  implements UseCase<AuthenticationModel, SingleResultModel<AuthenticationModel>>
{
  constructor(private authenticationRepository: AuthenticationRepository) {}

  execute(params: AuthenticationModel): Observable<SingleResultModel<AuthenticationModel>> {
    return this.authenticationRepository.updatePassword(params);
  }
}
