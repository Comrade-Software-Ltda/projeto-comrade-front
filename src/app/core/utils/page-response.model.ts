export class PageResponseModel<T> {
  data?: T[];
  codigo?: number;
  sucesso?: boolean;
  mensagem?: string;
  mensagens?: string[];

  pageNumber?: number;
  pageSize?: number;
  nextPage?: number;
  previusPage?: number;
}
