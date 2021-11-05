export class PageFilterModel {
  id?: number;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  extraParam?: number;
  custom?: any[];

  pathParams?: any;

  constructor() {
    this.pageNumber = 1;
    this.pageSize = 50;
  }
}

export class ParamCustom {
  key!: string;
  value!: string;
}
