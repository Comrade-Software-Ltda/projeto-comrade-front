import { Subscription } from 'rxjs';

export abstract class BaseVisualizacao {
  subscriptions = new Subscription();
  public loading!: boolean;

  public layout!: string;
  public textoBreadcrumb!: string;
  public totalRecords!: string;
  public titleModal!: string;

  public msgs: any[] = [];
  public columns: any[] = [];
  public list: any[] = [];

  constructor() {}

  public abstract doLazyLoad(param: any): any;
  public abstract onOpenModal(param: any): any;
  public abstract doGetRegister(param: any): any;
}
