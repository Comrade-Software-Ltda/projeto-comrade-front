import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { AuthenticationRepository } from '../../repositories/authentication.repository';
import { AuthenticationModel } from '../../domains/authentication.model';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordUsecase
  implements UseCase<AuthenticationModel, SingleResultModel<AuthenticationModel>>
{
  constructor(private authenticationRepository: AuthenticationRepository) {}

  execute(params: AuthenticationModel): Observable<SingleResultModel<AuthenticationModel>> {
    return this.authenticationRepository.forgotPassword(params);
  }
}
