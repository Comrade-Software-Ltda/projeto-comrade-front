import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxPopupModule, DxDataGridModule, DxFormModule, DxButtonModule, DxTemplateModule, DxCheckBoxModule } from 'devextreme-angular';
import { RoleRoutingModule } from './role-system-user.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { RoleSystemUserComponent } from './role-system-user.component';
import { ModalModule } from './../../components/modal/modal.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, RoleRoutingModule, ModalModule, CommonModule, DxPopupModule,
    DxButtonModule,DxCheckBoxModule,
    DxTemplateModule],
  exports: [],
  declarations: [RoleSystemUserComponent],
  providers: [],
})
export class RoleSystemUserModule {
  constructor(@Optional() @SkipSelf() parentModule: RoleSystemUserModule) {
    throwIfAlreadyLoaded(parentModule, 'RoleSystemUserModule');
  }
}
