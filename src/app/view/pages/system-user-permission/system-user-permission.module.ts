import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { SystemUserPermissionRoutingModule } from './system-user-permission.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemUserPermissionComponent } from './system-user-permission.component';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, SystemUserPermissionRoutingModule],
  exports: [],
  declarations: [SystemUserPermissionComponent],
  providers: [],
})
export class SystemUserPermissionModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemUserPermissionModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemUserPermissionModule');
  }
}
