import { Component, OnInit } from '@angular/core';
import { GetAllRoleUsecase } from '../../../core/usecases/role/get-all-role.usecase';
import {RoleModel,} from '../../../core/models/role.model';
import { PageResultModel } from '../../../core/utils/responses/page-result.model';
import { PostRoleUsecase } from 'src/app/core/usecases/role/post-role.usecase';
import { DeleteRoleUsercase } from 'src/app/core/usecases/role/delete-role.usercase';
import { GetRoleByIdUsecase } from 'src/app/core/usecases/role/get-role-by-id.usecase';
import { PutRoleUsecase } from 'src/app/core/usecases/role/put-role.usecase';
import { SingleResultModel } from 'src/app/core/utils/responses/single-result.model';


@Component({
  selector: 'app-role',
  templateUrl: 'role.component.html',
  styleUrls: ['role.component.scss'],
  providers: [],
})
export class RoleComponent implements OnInit {
  dataSource!: RoleModel[];

  constructor(
    private deleteRoleUsercase: DeleteRoleUsercase,
    private getAllRoleUsecase: GetAllRoleUsecase,
    private getRoleByIdUsecase: GetRoleByIdUsecase,
    private postRoleUsecase: PostRoleUsecase,
    private putRoleUsecase: PutRoleUsecase
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.getAllRoleUsecase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<RoleModel>) => {
        this.dataSource = grid.data ?? [];
      });
  }
  getById(): void {
    this.getRoleByIdUsecase
      .execute('id')
      .subscribe((model: SingleResultModel<RoleModel>) => {
        console.log(model);
      });
  }
  create(e: any): void {
    console.log(e);
    const model = e.data as RoleModel;
    this.postRoleUsecase.execute(model).subscribe();
    console.log(model);
  }
  
  edit(e: any): void {
    console.log(e);
    const model = { ...e.oldData, ...e.newData } as RoleModel;
    this.putRoleUsecase.execute(model).subscribe();
  }
  delete(e: any): void {
    const model = e.data as RoleModel;
    if (model.id) {
      this.deleteRoleUsercase.execute(model.id).subscribe();
    }
  }
}
