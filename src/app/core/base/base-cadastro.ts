import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

export abstract class BaseCadastro {
  subscriptions = new Subscription();

  public loading!: boolean;
  public submitted!: boolean;
  public isCreate!: boolean;

  public registerForm!: FormGroup;

  public layout!: string;
  public textoBreadcrumb: any;
  public titleModal!: string;
  public totalRecords!: number;

  public msgs: any[] = [];
  public columns: any[] = [];
  public list: any[] = [];

  get f() {
    return this.registerForm.controls;
  }

  constructor() {}

  public abstract startForm(): any;
  public abstract doLazyLoad(param: any): any;
  public abstract onOpenModal(param: any): any;
  public abstract doGetRegister(param: any): any;
  public abstract onDelete(param: any): any;
  public abstract onCancel(): any;
  public abstract onSubmit(): any;
  public abstract onAdd(): any;
  public abstract save(): any;
  public abstract clear(): any;
}
