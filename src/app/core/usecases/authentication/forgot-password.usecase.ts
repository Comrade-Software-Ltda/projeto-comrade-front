import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AuthenticationRepository } from '../../repositories/authentication.repository';
import { AuthenticationModel } from '../../domain/authentication.model';
import { SingleResultModel } from '../../utils/single-result.model';

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
