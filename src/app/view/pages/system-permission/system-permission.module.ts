import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { SystemPermissionRoutingModule } from './system-permission.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemPermissionComponent } from './system-permission.component';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, SystemPermissionRoutingModule],
  exports: [],
  declarations: [SystemPermissionComponent],
  providers: [],
})
export class SystemPermissionModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemPermissionModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemPermissionModule');
  }
}
