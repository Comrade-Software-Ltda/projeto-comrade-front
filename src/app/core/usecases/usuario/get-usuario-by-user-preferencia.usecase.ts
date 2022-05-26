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
export class GetUsuariosByUserPreferenciaUsecase
  implements UseCase<number, PageResultModel<UsuarioModel>>
{
  constructor(private usuarioRepository: UsuarioRepository) {}

  execute(id: number): Observable<PageResultModel<UsuarioModel>> {
    return this.usuarioRepository.getUsuariosByUserPreferencia(id);
  }
}
