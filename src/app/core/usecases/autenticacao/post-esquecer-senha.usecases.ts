import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AutenticacaoRepository } from '../../repositories/autenticacao.repository';
import { AutenticacaoModel } from '../../domain/autenticacao.model';
import { SinglecomradeResponseModel } from '../../utils/single-comrade-response-model';

@Injectable({
  providedIn: 'root',
})
export class PostEsquecerSenhaUsecase
  implements UseCase<AutenticacaoModel, SinglecomradeResponseModel<AutenticacaoModel>>
{
  constructor(private processoRepository: AutenticacaoRepository) {}

  execute(params: AutenticacaoModel): Observable<SinglecomradeResponseModel<AutenticacaoModel>> {
    return this.processoRepository.postEsquecerSenha(params);
  }
}
