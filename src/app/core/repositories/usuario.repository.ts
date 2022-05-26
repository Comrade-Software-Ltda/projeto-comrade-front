import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class UsuarioRepository {
  abstract getAllUsuario(): Observable<PageResultModel<UsuarioModel>>;
  abstract getUsuarioById(id: number): Observable<SingleResultModel<UsuarioModel>>;
  abstract postUpdateUsuario(
    id: number,
    usuario: UsuarioModel
  ): Observable<SingleResultModel<UsuarioModel>>;
  abstract postUpdateUsuarioPreferences(
    id: number,
    usuario: UsuarioModel
  ): Observable<SingleResultModel<UsuarioModel>>;
}
