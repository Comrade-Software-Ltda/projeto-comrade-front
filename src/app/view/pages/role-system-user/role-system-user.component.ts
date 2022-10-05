import { Component, OnInit } from '@angular/core';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { SystemUserModel } from 'src/app/core/models/system-user.model';
import { GetAllSystemUserUsecase } from 'src/app/core/usecases/system-user/get-all-system-user.usecase';
import dxPopup from 'devextreme/ui/popup';
import { ModalService } from '../../components/modal/modal.service';
import { RoleModel } from 'src/app/core/models/role.model';
import { GetAllRoleUsecase } from 'src/app/core/usecases/role/get-all-role.usecase';

@Component({
  selector: 'app-system-user',
  templateUrl: 'role-system-user.component.html',
  styleUrls: ['role-system-user.component.scss'],
  providers: [],
})
export class RoleSystemUserComponent implements OnInit {
  dataSource!: SystemUserModel[];
  dataSourceAux: any[] = [];
  dataSourceRole!:RoleModel[];
  currentSystemUser!: SystemUserModel;  
  popupVisible = false;
  selectedRole!: RoleModel[];
  
  popup: any = {};

  constructor(
    private getAllSystemUserUsecase: GetAllSystemUserUsecase,
    private getAllRoleUsecase: GetAllRoleUsecase,
    private modalService: ModalService,
  ) {
    
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllRole();
  }

  getAll(): void {
    this.getAllSystemUserUsecase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<SystemUserModel>) => {
        this.dataSource = grid.data ?? [];
      });
  }
  getAllRole(): void {
    this.getAllRoleUsecase
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<RoleModel>) => {
        console.log(grid.data);
        this.dataSourceRole = grid.data ?? [];
      });
  }

  popUpInitialize(e: any){
    console.log(e.component);
    this.popup = e.component;
  }

  // showPopUp(){
  //   // this.curentSystemUser = (event.row?.data as SystemUserModel);
  //   console.log(this.popup);
  //   this.popup.show();
  //   this.popupVisible = true;
  // }

  mockUserList(): void {
    this.dataSourceAux = this.dataSource.map((u) => {
      if (u.id == 'ec872b9a-484f-437f-2ec2-08da9b39d088') {
        return {
          ...u,
          Roles: [
            {
              id: '81696b17-7854-4967-4a9d-08da9687d7e8',
              name: 'JUSEUS',
            },
          ],
        };
      } else {
        return {
          ...u,
          Roles: [
            {
              id: 'c22bcadf-ccd3-44af-c8b2-08da968ca774',
              name: 'ABELL',
            },
          ],
        };
      }
    });
  }

  showInfo(e:any) {
    console.log(e.data);
    this.selectedRole = e.data;
    this.popupVisible = true;
  }
  showClose() {
  
    this.modalService.close('modal-fechar');
  } 

  exemplo1(e:any){
    console.log(e.value);
  }

  exemplo2(role: RoleModel){
    console.log(role);
  }
}