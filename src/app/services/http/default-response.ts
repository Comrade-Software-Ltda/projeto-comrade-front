export class DefaultResponse<T> {
  codigo: number | undefined;
  sucesso: boolean | undefined;
  data!: T;
  mensagem: string | undefined;
  mensagens: string[] | undefined;

  constructor() {}

  /**
   *
   * Método que lança erro no objeto
   *
   * @param _data Objeto de erro
   * @param _code Campo do erro ocorrido
   * @param _message  Erro ocorrido
   */
  error(_payload: any, _code: number = 400, _message: string = 'Error') {
    try {
      console.log(_payload);
    } catch {
      this.codigo = _code;
      this.mensagem = _message;
    }
  }

  /**
   *
   * Método que lança objeto de sucesso
   *
   * @param _data Objeto de retorno
   * @param _code Campo do erro ocorrido
   * @param _title  Erro ocorrido
   */
  success(_type: string, _data: T, _code: number = 200, _title: string = 'Success') {
    switch (_type.toUpperCase()) {
      case 'GET':
      case 'DELETE':
      case 'PATCH':
      case 'POST':
      case 'PUT':
        this.data = _data;
        return;
    }
  }
}
