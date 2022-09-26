import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxDataGridModule,
  DxFormModule,
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxTreeViewComponent,
  DxTreeListModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { SystemUserRoleRoutingModule } from './system-user-role.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemUserRoleComponent } from './system-user-role.component';
import { ModalModule } from './../../components/modal/modal.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    DxDataGridModule,
    DxFormModule,
    SystemUserRoleRoutingModule,
    ModalModule,
    CommonModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxTreeListModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  exports: [],
  declarations: [SystemUserRoleComponent],
  providers: [],
})
export class SystemUserRoleModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemUserRoleModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemUserRoleModule');
  }
}
