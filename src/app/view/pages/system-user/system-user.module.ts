import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { SystemUserRoutingModule } from './system-user.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemUserComponent } from './system-user.component';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, SystemUserRoutingModule],
  exports: [],
  declarations: [SystemUserComponent],
  providers: [],
})
export class SystemUserModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemUserModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemUserModule');
  }
}
