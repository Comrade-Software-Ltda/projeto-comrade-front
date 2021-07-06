import { Observable } from 'rxjs';
import { AutenticacaoModel } from '../domain/autenticacao.model';
import { SinglecomradeResponseModel } from '../utils/single-comrade-response-model';

export abstract class AutenticacaoRepository {
  abstract postExpirarSenha(
    param: AutenticacaoModel
  ): Observable<SinglecomradeResponseModel<AutenticacaoModel>>;
  abstract postEsquecerSenha(
    param: AutenticacaoModel
  ): Observable<SinglecomradeResponseModel<AutenticacaoModel>>;
}
