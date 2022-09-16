import { Component, OnInit } from '@angular/core';
import { GetAllSystemPermissionUsecase } from '../../../core/usecases/system-permission/get-all-system-permission.usecase';
import {SystemPermissionModel,} from '../../../core/models/system-permission.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';
import { PostSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/post-system-permission.usecase';
import { DeleteSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/delete-system-permission.usercase';
import { GetSystemPermissionByIdUsecase } from 'src/app/core/usecases/system-permission/get-system-permission-by-id.usecase';
import { PutSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/put-system-permission.usecase';
import { SingleResultModel } from 'src/app/core/utils/responses/single-result.model';


@Component({
  selector: 'app-system-permission',
  templateUrl: 'system-permission.component.html',
  styleUrls: ['system-permission.component.scss'],
  providers: [],
})
export class SystemPermissionComponent implements OnInit {
  dataSource!: SystemPermissionModel[];

  constructor(
    private deleteSystemPermissionUsercase: DeleteSystemPermissionUsecase,
    private getAllSystemPermissionUsecase: GetAllSystemPermissionUsecase,
    private getSystemPermissionByIdUsecase: GetSystemPermissionByIdUsecase,
    private postSystemPermissionUsecase: PostSystemPermissionUsecase,
    private putSystemPermissionUsecase: PutSystemPermissionUsecase
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.getAllSystemPermissionUsecase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemPermissionModel>) => {
        this.dataSource = grid.data ?? [];
      });
  }
  getById(): void {
    this.getSystemPermissionByIdUsecase
      .execute('id')
      .subscribe((model: SingleResultModel<SystemPermissionModel>) => {
        console.log(model);
      });
  }
  create(e: any): void {
    console.log(e);
    const model = e.data as SystemPermissionModel;
    this.postSystemPermissionUsecase.execute(model).subscribe();
    console.log(model);
  }
  
  edit(e: any): void {
    console.log(e);
    const model = { ...e.oldData, ...e.newData } as SystemPermissionModel;
    this.putSystemPermissionUsecase.execute(model).subscribe();
  }
  delete(e: any): void {
    const model = e.data as SystemPermissionModel;
    if (model.id) {
      this.deleteSystemPermissionUsercase.execute(model.id).subscribe();
    }
  }
}
