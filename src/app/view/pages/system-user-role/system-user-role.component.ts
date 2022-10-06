import { Component, EventEmitter, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { SystemRoleModel } from 'src/app/core/models/system-role.model';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import { GetAllSystemRoleUsecase } from 'src/app/core/usecases/system-role/get-all-system-role.usecase';
import { of } from 'rxjs';

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
  initialSelectedSystemUser!: SystemUserModel;
  finalSelectedSystemUser!: SystemUserModel;
  recursiveSelectionEnabled = false;
  isRoleVisible = false;
  popupVisible = false;
  teste = false;
  selectedSystemUserRoles!: SystemRoleModel[];
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

  setValue(role: SystemRoleModel) {
    for (let i in this.initialSelectedSystemUser.systemRoles) {
      if (role.id == this.initialSelectedSystemUser.systemRoles[i].id) return true;
    }
    return false;
  }

  showInfo(e: any) {
    this.initialSelectedSystemUser = e.data;
    this.finalSelectedSystemUser = e.data;
    this.selectedSystemUserRoles = e.data.systemRoles;
    this.popupVisible = true;
    console.log(this.initialSelectedSystemUser);
    console.log(this.selectedSystemUserRoles);
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
      if (u.id == '1be54cce-1870-c4d8-6a9d-d69ede8d8864') {
        return {
          ...u,
          systemRoles: [
            {
              id: 'f388513a-9548-1601-cc6d-cd40ec157e81',
              name: 'CAMARADA',
            },
          ],
        };
      } else {
        return {
          ...u,
          systemRoles: [
            {
              id: 'c22bcadf-ccd3-44af-c8b2-08da968ca774',
              name: 'ADMNISTRADOR',
            },
          ],
        };
      }
    });
  }

  handleValueChanged(role: SystemRoleModel, e: any) {
    console.log(role);
    console.log(this.initialSelectedSystemUser);
    console.log(e.value);

    if (e.value == true) {
      this.initialSelectedSystemUser.systemRoles.push(role);
    } else {
    }
    console.log(this.initialSelectedSystemUser);
  }

  removeObjectById(arr: string[], role: SystemRoleModel) {
    const index = arr.findIndex((num) => num === role.id);
    console.log(index);

    return arr;
  }
}
