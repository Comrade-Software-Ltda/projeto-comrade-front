import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioRepository } from '../../repositories/usuario.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllUsuarioUsecase
  implements UseCase<PageFilterModel, PageResultModel<UsuarioModel>>
{
  constructor(private usuarioRepository: UsuarioRepository) {}

  execute(): Observable<PageResultModel<UsuarioModel>> {
    return this.usuarioRepository.getAllUsuario();
  }
}
