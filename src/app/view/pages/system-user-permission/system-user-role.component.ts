import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { DeleteSystemUserUsecase } from 'src/app/core/usecases/system-user/delete-system-user.usecase';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { EditSystemUserUsecase } from 'src/app/core/usecases/system-user/edit-system-user.usecase';
import { CreateSystemUserUsecase } from 'src/app/core/usecases/system-user/create-system-user.usecase';

@Component({
  selector: 'app-system-user-role',
  templateUrl: 'system-user-role.component.html',
  styleUrls: ['system-user-role.component.scss'],
  providers: [],
})
export class SystemUserPermissionComponent implements OnInit {
  dataSource!: SystemUserModel[];
  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private createSystemUser: CreateSystemUserUsecase,
    private deleteSystemUser: DeleteSystemUserUsecase,
    private editSystemUser: EditSystemUserUsecase
  ) {}

  ngOnInit(): void {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
