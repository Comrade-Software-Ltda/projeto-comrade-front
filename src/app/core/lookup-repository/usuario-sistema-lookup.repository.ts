import { Observable } from 'rxjs';
import { LookupModel } from '../utils/lookup.model';

export abstract class UsuarioSistemaLookupRepository {
  abstract listar(): Observable<LookupModel[]>;
  abstract listarPorNome(nome: string): Observable<LookupModel[]>;
}
