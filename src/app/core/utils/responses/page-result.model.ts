export class PageResultModel<T> {
  data?: T[];
  code?: number;
  success?: boolean;
  message?: string;
  messages?: string[];

  pageNumber?: number;
  pageSize?: number;
  nextPage?: number;
  previusPage?: number;
}
