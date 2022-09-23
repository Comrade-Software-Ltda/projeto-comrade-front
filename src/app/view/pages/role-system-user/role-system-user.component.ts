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
  dataSourceRole!:RoleModel[];
  currentSystemUser!: SystemUserModel;  
  popupVisible: boolean;
  popup: any = {};

  constructor(
    private getAllSystemUserUsecase: GetAllSystemUserUsecase,
    private getAllRoleUsecase: GetAllRoleUsecase,
    private modalService: ModalService,
  ) {
    this.popupVisible = false;
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

  showPopUp(){
    // this.curentSystemUser = (event.row?.data as SystemUserModel);
    console.log(this.popup);
    this.popup.show();
    this.popupVisible = true;
  }

  showInfo() {
  
    this.modalService.open('modal-pesquisa');
  }
  showClose() {
  
    this.modalService.close('modal-fechar');
  }
  save(){

    this.modalService.add('modal-save');

  }
 
}