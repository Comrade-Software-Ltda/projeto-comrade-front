import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { DeleteSystemUserUsecase } from 'src/app/core/usecases/system-user/delete-system-user.usecase';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { EditSystemUserUsecase } from 'src/app/core/usecases/system-user/edit-system-user.usecase';
import { CreateSystemUserUsecase } from 'src/app/core/usecases/system-user/create-system-user.usecase';

@Component({
  selector: 'app-system-user',
  templateUrl: 'system-user.component.html',
  styleUrls: ['system-user.component.scss'],
  providers: [],
})
export class SystemUserComponent implements OnInit {
  dataSource!: SystemUserModel[];
  constructor(
    private getAllSystemUserUsecase: GetAllSystemUserUsecase,
    private postSystemUserUsecase: CreateSystemUserUsecase,
    private deleteSystemUserUsercase: DeleteSystemUserUsecase,
    private putSystemUserUsecase: EditSystemUserUsecase
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.getAllSystemUserUsecase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data ?? [];
      });
  }
 
  create(e: any): void {
    console.log(e);
    const model = e.data as SystemUserModel;
    this.postSystemUserUsecase.execute(model).subscribe();
    console.log(model);
  }
  edit(e: any): void {
    console.log(e);
    const model = { ...e.oldData, ...e.newData } as SystemUserModel;
    this.putSystemUserUsecase.execute(model).subscribe();
  }
  delete(e: any): void {
    const model = e.data as SystemUserModel;
    if (model.id) {
      this.deleteSystemUserUsercase.execute(model.id).subscribe();
    }
  }
}