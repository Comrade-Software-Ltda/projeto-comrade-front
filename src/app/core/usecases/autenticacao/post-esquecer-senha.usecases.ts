import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AutenticacaoRepository } from '../../repositories/autenticacao.repository';
import { AutenticacaoModel } from '../../domain/autenticacao.model';
import { SinglekpmgResponseModel } from '../../utils/single-kpmg-response-model';

@Injectable({
  providedIn: 'root',
})
export class PostEsquecerSenhaUsecase
  implements UseCase<AutenticacaoModel, SinglekpmgResponseModel<AutenticacaoModel>> {
  constructor(private processoRepository: AutenticacaoRepository) {}

  execute(params: AutenticacaoModel): Observable<SinglekpmgResponseModel<AutenticacaoModel>> {
    return this.processoRepository.postEsquecerSenha(params);
  }
}
