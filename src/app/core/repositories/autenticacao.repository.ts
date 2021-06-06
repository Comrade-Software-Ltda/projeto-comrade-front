import { Observable } from 'rxjs';
import { AutenticacaoModel } from '../domain/autenticacao.model';
import { SinglekpmgResponseModel } from '../utils/single-kpmg-response-model';

export abstract class AutenticacaoRepository {
  abstract postExpirarSenha(
    param: AutenticacaoModel
  ): Observable<SinglekpmgResponseModel<AutenticacaoModel>>;
  abstract postEsquecerSenha(
    param: AutenticacaoModel
  ): Observable<SinglekpmgResponseModel<AutenticacaoModel>>;
}
