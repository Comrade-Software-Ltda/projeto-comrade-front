import { Component, EventEmitter, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { ModalService } from '../../components/modal/modal.service';
import { GetAllSystemRoleUsecase } from 'src/app/core/usecases/system-role/get-all-system-role.usecase';

@Component({
  selector: 'app-system-user-role',
  templateUrl: 'system-user-role.component.html',
  styleUrls: ['system-user-role.component.scss'],
  providers: [],
})
export class SystemUserRoleComponent implements OnInit {
  dataSource!: SystemUserModel[];
  roles!: SystemRoleModel[];
  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private getAllSystemRole: GetAllSystemRoleUsecase,
    private modalService: ModalService
  ) {}

  handleCellClick(e: any) {
    console.log(e.column.dataField == 'name');
  }
  ngOnInit(): void {
    this.getRoles();
    this.getSystemUsers();
  }
  showInfo() {
    console.log('teste');
    this.modalService.open('modal-pesquisa');
  }

  closeDialog(rowIndex: any) {
    return this.modalService.close('modal-pesquisa');
  }

  getRoles() {
    this.getAllSystemRole
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemRoleModel>) => {
        console.log(grid.data);
        this.roles = grid.data!;
      });
  }

  getSystemUsers() {
    this.getAllSystemUser
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data!;
      });
  }
}
