import { SinglecomradeResponseModel } from '../../utils/single-comrade-response-model';
import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AutenticacaoRepository } from '../../repositories/autenticacao.repository';
import { AutenticacaoModel } from '../../domain/autenticacao.model';

@Injectable({
  providedIn: 'root',
})
export class PostExpirarSenhaUsecase
  implements UseCase<AutenticacaoModel, SinglecomradeResponseModel<AutenticacaoModel>>
{
  constructor(private processoRepository: AutenticacaoRepository) {}

  execute(params: AutenticacaoModel): Observable<SinglecomradeResponseModel<AutenticacaoModel>> {
    return this.processoRepository.postExpirarSenha(params);
  }
}
