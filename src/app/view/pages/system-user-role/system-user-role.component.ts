import { Component, EventEmitter, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { GetAllSystemRoleUsecase } from 'src/app/core/usecases/system-role/get-all-system-role.usecase';

@Component({
  selector: 'app-system-user-role',
  templateUrl: 'system-user-role.component.html',
  styleUrls: ['system-user-role.component.scss'],
  providers: [],
})
export class SystemUserRoleComponent implements OnInit {
  dataSource!: SystemUserModel[];
  dataSourceAux: any[] = [];
  roles: SystemRoleModel[] = [];
  selectedRowKeys: any[] = [];
  selectionMode = 'all';
  selectedSystemUser!: SystemUserModel;
  selectedRoleNames = 'No Role Selected';
  recursiveSelectionEnabled = false;
  isRoleVisible = false;
  popupVisible = false;
  teste = false;
  selectedSystemRole!: SystemRoleModel[];
  applyButtonOption = {
    text: 'apply',
    onClick() {},
  };

  constructor(
    private getAllSystemUser: GetAllSystemUserUsecase,
    private getAllSystemRole: GetAllSystemRoleUsecase
  ) {}

  handleCellClick(e: any) {
    console.log(e.data);
  }
  ngOnInit(): void {
    this.getRoles();
    this.getSystemUsers();
  }

  showInfo(e: any) {
    this.selectedSystemUser = e.data;
    this.selectedSystemRole = e.data.systemRoles;
    this.popupVisible = true;
    console.log('SHOW INFO: ' + this.roles.includes(this.selectedSystemUser.systemRoles[0]));

    console.log(this.selectedSystemUser);
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
        this.mockUserList();
      });
  }

  mockUserList(): void {
    this.dataSourceAux = this.dataSource.map((u) => {
      return {
        ...u,
        systemRoles: [
          {
            id: 'c22bcadf-ccd3-44af-c8b2-08da968ca774',
            name: 'ADMNISTRADOR',
          },
        ],
      };
    });
  }

  handleValueChanged(role: SystemRoleModel) {
    console.log(this.roles[0]);
    console.log(this.selectedSystemUser.systemRoles[0]);
    var i = 0;
    var j = 0;
    for (i = 0; i < this.roles.length; i++) {
      for (j = 0; j < this.selectedSystemUser.systemRoles.length; j++) {
        if (this.selectedSystemUser.systemRoles[j].id == this.roles[i].id) {
          this.teste = true;
        }
      }
    }
    console.log('SHOW INFO: ' + this.teste);
  }

  showValue(e: any) {
    console.log(e.value);
  }

  isInsideTheArray(element: SystemUserModel) {}
}
