import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioRepository } from '../../repositories/usuario.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class GetUsuarioByIdUsecase implements UseCase<number, SingleResultModel<UsuarioModel>> {
  constructor(private usuarioRepository: UsuarioRepository) {}

  execute(id: number): Observable<SingleResultModel<UsuarioModel>> {
    return this.usuarioRepository.getUsuarioById(id);
  }
}
