import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { SystemMenuRoutingModule } from './system-menu.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemMenuComponent } from './system-menu.component';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, SystemMenuRoutingModule],
  exports: [],
  declarations: [SystemMenuComponent],
  providers: [],
})
export class SystemMenuModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemMenuModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemMenuModule');
  }
}
