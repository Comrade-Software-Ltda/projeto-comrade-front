import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { Mapper } from '../../../core/utils/bases/mapper';
import { UsuarioWebEntity } from './usuario-web-entity';

export class UsuarioWebRepositoryMapper extends Mapper<UsuarioWebEntity, UsuarioModel> {
  mapFrom(param: UsuarioWebEntity): UsuarioModel {
    return {
      id: param.usuarioId,
      email: param.usuarioEmail ?? '',
      genero: param.usuarioGenero ?? '',
      nome: param.usuarioNome ?? '',
      dataDeNascimento: new Date(param.usuarioDataDeNascimento ?? ''),
      idadeMaxima: param.preferenciaIdadeMaxima,
      idadeMinima: param.preferenciaIdadeMinima,
      telefoneDDD: param.preferenciaTelefoneDDD,
      telefoneDDI: param.preferenciaTelefoneDDI,
      telefoneNumero: param.preferenciaTelefoneNumero,
      preferenciaGenero: param.preferenciaGenero,
    };
  }

  mapTo(param: UsuarioModel): UsuarioWebEntity {
    return {
      usuarioId: param.id,
      usuarioNome: param.nome,
      usuarioEmail: param.email,
      usuarioGenero: param.genero,
      preferenciaGenero: param.preferenciaGenero,
      usuarioDataDeNascimento: param.dataDeNascimento.toISOString(),
      preferenciaIdadeMaxima: param.idadeMaxima,
      preferenciaIdadeMinima: param.idadeMinima,
      preferenciaTelefoneDDD: param.telefoneDDD,
      preferenciaTelefoneDDI: param.telefoneDDI,
      preferenciaTelefoneNumero: param.telefoneNumero,
    };
  }
}
