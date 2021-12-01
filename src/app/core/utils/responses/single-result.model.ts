import { ValidationResultModel } from './validation-result.model';

export class SingleResultModel<T> {
  data?: T;
  validationResult?: ValidationResultModel[];
  code?: number;
  success?: boolean;
  message?: string;
  ExceptionMessage?: string;
  messages?: string[];
}
