import { Component, OnInit } from '@angular/core';

import { DeleteSystemRoleUsecase } from 'src/app/core/usecases/system-role/delete-system-role.usecase';
import { PostSystemRoleUsecase } from 'src/app/core/usecases/system-role/post-system-role.usecase';
import { GetAllSystemRoleUsecase } from 'src/app/core/usecases/system-role/get-all-system-role.usecase';

import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';

import { FormGroup, FormControl } from '@angular/forms';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PutSystemRoleUsecase } from 'src/app/core/usecases/system-role/put-system-role.usecase';

@Component({
  selector: 'app-system-role',
  templateUrl: 'system-role.component.html',
  styleUrls: ['system-role.component.scss'],
  providers: [],
})
export class SystemRoleComponent implements OnInit {
  fileName = '';
  dataSource!: SystemRoleModel[];

  info?: SystemRoleModel;
  pageModel?: PageFilterModel;
  InfoFromGet?: PageResultModel<SystemRoleModel>;

  formString = '';

  constructor(
    private postSystemRoleUseCase: PostSystemRoleUsecase,
    private putSystemRoleUseCase: PutSystemRoleUsecase,
    private getAllSystemRoleUseCase: GetAllSystemRoleUsecase,
    private deleteSystemRoleUseCase: DeleteSystemRoleUsecase
  ) {}

  lines?: any;

  formTransaction = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    this.info = {
      name: this.formTransaction.get('name')?.value,
    };
    this.postSystemRoleUseCase.execute(this.info).subscribe();
  }

  getButton() {
    this.getAllSystemRoleUseCase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemRoleModel>) => {
        console.log(grid.data);
        this.dataSource = grid.data!;
      });
  }

  deleteRow(e: any): void {
    var rowIndex = e.component.getRowIndexByKey(e.key);

    console.log(e);
    this.deleteSystemRoleUseCase.execute(e.key).subscribe();
  }

  editRow(e: any): void {
    console.log('EDIT');
    this.putSystemRoleUseCase.execute(e.data).subscribe();
  }

  addRow(e: any): void {
    console.log('ADD ROW');
    this.info = {
      //id: e.key,
      name: e.data.name,
    };
    this.postSystemRoleUseCase.execute(this.info).subscribe();
  }
}
