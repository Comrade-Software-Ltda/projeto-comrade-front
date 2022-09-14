import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { SystemRoleRoutingModule } from './system-role.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { SystemRoleComponent } from './system-role.component';

@NgModule({
  imports: [
    DxDataGridModule,
    DxFormModule,
    SystemRoleRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
  ],
  exports: [],
  declarations: [SystemRoleComponent],
  providers: [],
})
export class SystemRoleModule {
  constructor(@Optional() @SkipSelf() parentModule: SystemRoleModule) {
    throwIfAlreadyLoaded(parentModule, 'SystemRoleModule');
  }
}
