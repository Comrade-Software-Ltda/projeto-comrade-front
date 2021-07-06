export class SinglecomradeResponseModel<T> {
  data?: T;
  codigo?: number;
  sucesso?: boolean;
  mensagem?: string;
  mensagens?: string[];
}
