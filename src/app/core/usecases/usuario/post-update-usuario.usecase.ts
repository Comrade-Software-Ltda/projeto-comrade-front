import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { UsuarioRepository } from '../../repositories/usuario.repository';
import { UsuarioModel } from '../../models/usuario.model';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class PostUpdateUsuarioUsecase
  implements UseCase<UsuarioModel, SingleResultModel<UsuarioModel>>
{
  constructor(private usuarioRepository: UsuarioRepository) {}

  execute(params: UsuarioModel): Observable<SingleResultModel<UsuarioModel>> {
    return this.usuarioRepository.postUpdateUsuario(params.id!, params);
  }
}
