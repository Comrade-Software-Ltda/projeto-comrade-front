import { Component, OnInit } from '@angular/core';

import { DeleteSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/delete-system-permission.usecase';
import { PostSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/post-system-permission.usecase';
import { GetAllSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/get-all-system-permission.usecase';

import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';

import { FormGroup, FormControl } from '@angular/forms';
import { SystemPermissionModel } from 'src/app/core/models/system-permission.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PutSystemPermissionUsecase } from 'src/app/core/usecases/system-permission/put-system-permission.usecase';

@Component({
  selector: 'app-system-permission',
  templateUrl: 'system-permission.component.html',
  styleUrls: ['system-permission.component.scss'],
  providers: [],
})
export class SystemPermissionComponent implements OnInit {
  fileName = '';
  dataSource!: SystemPermissionModel[];

  info?: SystemPermissionModel;
  pageModel?: PageFilterModel;
  InfoFromGet?: PageResultModel<SystemPermissionModel>;

  formString = '';

  constructor(
    private postSystemPermissionUseCase: PostSystemPermissionUsecase,
    private putSystemPermissionUseCase: PutSystemPermissionUsecase,
    private getAllSystemPermissionUseCase: GetAllSystemPermissionUsecase,
    private deleteSystemPermissionUseCase: DeleteSystemPermissionUsecase
  ) {}

  lines?: any;

  formTransaction = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit(): void {
    this.getButton();
  }

  getButton() {
    this.getAllSystemPermissionUseCase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemPermissionModel>) => {
        console.log(grid.data);
        this.dataSource = grid.data!;
      });
  }

  deleteRow(e: any): void {
    var rowIndex = e.component.getRowIndexByKey(e.key);

    console.log(e);
    this.deleteSystemPermissionUseCase.execute(e.key).subscribe();
  }

  editRow(e: any): void {
    console.log('EDIT');
    this.putSystemPermissionUseCase.execute(e.data).subscribe();
  }

  addRow(e: any): void {
    console.log('ADD ROW');
    this.info = {
      name: e.data.name,
      tag: e.data.tag,
    };
    this.postSystemPermissionUseCase.execute(e.data).subscribe();
  }
}
