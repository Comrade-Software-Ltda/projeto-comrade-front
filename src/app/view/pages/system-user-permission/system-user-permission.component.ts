import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { DeleteSystemUserUsecase } from 'src/app/core/usecases/system-user/delete-system-user.usecase';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { EditSystemUserUsecase } from 'src/app/core/usecases/system-user/edit-system-user.usecase';
import { CreateSystemUserUsecase } from 'src/app/core/usecases/system-user/create-system-user.usecase';
import { ModalService } from '../../components/modal/modal.service';

@Component({
  selector: 'app-system-user-permission',
  templateUrl: 'system-user-permission.component.html',
  styleUrls: ['system-user-permission.component.scss'],
  providers: [],
})
export class SystemUserPermissionComponent implements OnInit {
  dataSource!: SystemUserModel[];
  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private createSystemUser: CreateSystemUserUsecase,
    private deleteSystemUser: DeleteSystemUserUsecase,
    private editSystemUser: EditSystemUserUsecase,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }

  delete(e: any): void {
    this.deleteSystemUser.execute(e.key).subscribe();
  }

  beforeSave(e: any): void {
    e.data.registerDate = new Date();
  }

  save(e: any): void {
    this.createSystemUser.execute(e.data).subscribe();
  }

  update(e: any): void {
    this.editSystemUser.execute(e.data).subscribe();
  }
}
