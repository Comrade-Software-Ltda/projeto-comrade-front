import { Observable } from 'rxjs';
import { ProdutoGeralModel } from '../domain/produto-geral.model';
import { PageFilterModel } from '../utils/page-filter.model';
import { PageResponseModel } from '../utils/page-response.model';

export abstract class ProdutoGeralRepository {
  abstract getAllProdutoGeral(
    filter: PageFilterModel
  ): Observable<PageResponseModel<ProdutoGeralModel>>;
  abstract listarPorNome(nome: string): Observable<ProdutoGeralModel[]>;
}
