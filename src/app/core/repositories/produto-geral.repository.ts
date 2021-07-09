import { Observable } from 'rxjs';
import { ProdutoGeralModel } from '../domain/produto-geral.model';
import { PageFilterModel } from '../utils/page-filter.model';
import { PageResultModel } from '../utils/page-result.model';

export abstract class ProdutoGeralRepository {
  abstract getAllProdutoGeral(
    filter: PageFilterModel
  ): Observable<PageResultModel<ProdutoGeralModel>>;
  abstract GetAllByName(nome: string): Observable<ProdutoGeralModel[]>;
}
