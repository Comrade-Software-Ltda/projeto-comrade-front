import { ValidationResultModel } from 'src/app/core/utils/responses/validation-result.model';

export class DefaultResponse<T> {
  code: number | undefined;
  success: boolean | undefined;
  data!: T;
  message: string | undefined;
  messages: string[] | undefined;
  ExceptionMessage: string | undefined;
  validationResult: ValidationResultModel[] | undefined;

  constructor() {}

  /**
   *
   * Método que lança erro no objeto
   *
   * @param _data Objeto de erro
   * @param _code Campo do erro ocorrido
   * @param _message  Erro ocorrido
   */
  responseError(_payload: any, _code: number = 400, _message: string = 'Error') {
    try {
      console.log(_payload);
    } catch {
      this.code = _code;
      this.message = _message;
    }
  }

  /**
   *
   * Método que lança objeto de success
   *
   * @param _data Objeto de retorno
   * @param _code Campo do erro ocorrido
   * @param _title  Erro ocorrido
   */
  responseSuccess(_type: string, _data: T, _code: number = 200, _title: string = 'Success') {
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
